import { useEffect, useState } from 'react'
import './owl.carousel.css'

import './ListProduct.scss'
import Product from './Product'

import '../service/productService'
import { fetchAllProduct } from '../service/productService'
import { useDispatch, useSelector } from 'react-redux'
import { INITIAL_LIST_PRODUCT } from '../redux/actions/action'


const ListProduct = () => {
    const dispatch = useDispatch()
    const [listProduct, setListProduct] = useState('')

    let listProductRedux = useSelector((state) => state.user.listProduct)


    useEffect(() => {
        setListProduct(listProductRedux)

    }, [listProductRedux])

    useEffect(() => {
        // console.log('efect')
        fetchProducts()

    }, [])

    const fetchProducts = async () => {
        let res = await fetchAllProduct()
        //let res = await fetchAllUser()
        if (res && res.data.DT) {

            // console.log('all data: ', res.data.DT)
            dispatch(INITIAL_LIST_PRODUCT(res.data.DT))

        }
    }

    return (

        // <!-- start product Area -->
        < section class="owl-carousel active-product-area section_gap" >
            {/* <!-- single product slide --> */}
            < div class="single-product-slider" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1> Products</h1>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {listProduct ? listProduct.map((item, index) => {
                            return (
                                <Product key={`key-${index}`} item={item} />

                            )
                        }) : <div></div>}

                    </div>
                </div>
            </div >
        </section >
        // <!-- end product Area -->
    )
}
export default ListProduct