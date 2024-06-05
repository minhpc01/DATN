import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { addToCart } from "../service/cartService"

import './Category.scss'
import { fetchAllProduct } from "../service/productService"

const Category = (props) => {
    const [listProduct, setListProduct] = useState([])
    const listProductRedux = useSelector((state) => state.user.listProduct)
    const navigate = useNavigate()
    const { item } = props
    let idAccount = sessionStorage.getItem("idAccount")
    let cart = useSelector((state) => state.user.cart)
    let lengthCart = cart.length

    const addCart = async (e) => {

        if (idAccount && idAccount !== "") {
            const existItem = cart.find((x) => x.Products.id === item.id);
            const qty = existItem ? existItem.Products.Cart_Detail.qty + 1 : 1;

            e.preventDefault()
            //dispatch(ADD_TO_CART(item, qty))

            let res = await addToCart({ ...item, idAccount: +idAccount, lengCartAll: lengthCart })
            console.log('res add product: ', res)
            toast.success('Add product to cart success!')
        }
        else {
            navigate("/login?redirect=/cart")
        }


    }

    useEffect(() => {

        fetchProducts()

    }, [])

    const fetchProducts = async () => {
        let res = await fetchAllProduct()
        //let res = await fetchAllUser()
        if (res && res.data.DT) {

            console.log('all data: ', res.data.DT)
            setListProduct(res.data.DT)

        }
    }
    const handleClickAdidas = (e) => {
        e.preventDefault()
        // cập nhật lại list product khi xong moi lan lap, de lap tren list product do
        setListProduct(listProductRedux)
        const listProductAdidas = listProductRedux.filter(item => item.categoryId === 1)
        setListProduct(listProductAdidas)
    }
    console.log('listProduct: ', listProduct)

    const handleClickNike = (e) => {
        e.preventDefault()
        // cập nhật lại list product khi xong moi lan lap, de lap tren list product do
        setListProduct(listProductRedux)
        const listProductNike = listProductRedux.filter(item => item.categoryId === 2)
        setListProduct(listProductNike)
    }
    const handleClickPuma = (e) => {
        e.preventDefault()
        // cập nhật lại list product khi xong moi lan lap, de lap tren list product do
        setListProduct(listProductRedux)
        const listProductNike = listProductRedux.filter(item => item.categoryId === 3)
        setListProduct(listProductNike)
    }

    return (
        <>
            {/* <!-- Start Banner Area --> */}
            <section className=" banner-area organic-breadcrumb">
                <div className="container mt-3">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Shop Category page</h1>
                            <nav className="d-flex align-items-center">
                                <Link to="index.html">Home<span className="lnr lnr-arrow-right"></span></Link>
                                <Link to="#">Shop<span className="lnr lnr-arrow-right"></span></Link>
                                <Link to="category.html">Fashon Category</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area --> */}
            <div className="container category-product">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="sidebar-categories">
                            <div className="head">Browse Categories</div>
                            <ul className="main-categories">
                                <li className="main-nav-list">
                                    <Link onClick={(e) => handleClickAdidas(e)} data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
                                        className="lnr lnr-arrow-right"></span>Adidas<span className="number"></span></Link>
                                </li>
                                <li className="main-nav-list" ><Link onClick={(e) => handleClickNike(e)} data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
                                    className="lnr lnr-arrow-right"></span>Nike<span className="number"></span></Link>
                                </li>
                                <li className="main-nav-list" ><Link onClick={(e) => handleClickPuma(e)} data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
                                    className="lnr lnr-arrow-right"></span>Puma<span className="number"></span></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        {/* <!-- Start Filter Bar --> */}

                        {/* <!-- End Filter Bar -->
				<!-- Start Best Seller --> */}
                        <section className="lattest-product-area pb-40 category-list">
                            <div className="row">

                                {/* <!-- single product --> */}

                                {/* <!-- single product --> */}
                                {listProduct ? listProduct.map((item, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6" key={`key ${index}`}>
                                            <div className="single-product">
                                                <img className="img-fluid" src={item.image} alt="" />
                                                <div className="product-details">
                                                    <h6>{item.name}</h6>
                                                    <div className="price">
                                                        <h6>${item.price}</h6>
                                                        <h6 className="l-through">${item.priceOld}</h6>
                                                    </div>
                                                    <div class="prd-bottom">
                        <a href="" class="social-info" onClick={(e) => addCart(e)}>
                            <span class="ti-bag"><i class="fa-solid fa-cart-shopping"></i></span>
                            <p class="hover-text">Add to bag</p>
                        </a>

                        <div href="" class="social-info">
                            <span class="lnr lnr-move"><i class="fa-solid fa-info"></i></span>
                            <p class="hover-text"><Link to={`/product/detail/${item.id}`}>view more</Link></p>
                        </div>
                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <div></div>}

                            </div>
                        </section>
                        {/* <!-- End Best Seller -->
				<!-- Start Filter Bar --> */}
                        
                        {/* <!-- End Filter Bar --> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category