import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FETCH_DATA_SUCCESS, LOGOUT } from "../redux/actions/action";
import { INITIAL_LIST_PRODUCT } from "../redux/actions/action";


import './Header.scss'
import { fetchAllProduct } from "../service/productService";

const Header = () => {
    //const useSelector = useSelector()
    const [isShowSearch, setIsShowSearch] = useState(false)
    const [valueSearch, setValueSearch] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.account.username);
    const listProduct = useSelector((state) => state.user.listProduct);


    useEffect(() => {
        if (sessionStorage.getItem("username") !== null) {
            dispatch(
                FETCH_DATA_SUCCESS(
                    sessionStorage.getItem("userAccount"),
                    sessionStorage.getItem("username"),
                    localStorage.getItem("token")
                )
            );
        }
    }, []);

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(LOGOUT())
        navigate('/')
    }
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            const filterListProduct = listProduct.filter(item => item.name.includes(valueSearch.toLocaleUpperCase()) === true || item.name.includes(valueSearch.toLowerCase()) === true)
            dispatch(INITIAL_LIST_PRODUCT(filterListProduct))
        }
    }
    const fetchProducts = async () => {
        let res = await fetchAllProduct()
        //let res = await fetchAllUser()
        if (res && res.data.DT) {

            // console.log('all data: ', res.data.DT)
            dispatch(INITIAL_LIST_PRODUCT(res.data.DT))

        }
    }

    return (
        <div>
            <div>
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">

                        <h1 className="logo me-auto"><a href="#">MINHSPORT</a></h1>

                        <a href="index.html" className="logo me-auto"><img src="../assets/img/logo.png" alt="" className="img-fluid" /></a>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li>
                                    <Link className="active" to="/">HOME</Link>

                                </li>

                                <li className="dropdown"><a href="#"><span>SHOP</span> <i className="fa-solid fa-chevron-down"></i></a>
                                    <ul>
                                        <li><Link to="/category">SHOP CATEGORY</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">CONTACT</Link></li>
                                <li className="search"><i className="fa-solid fa-magnifying-glass"
                                    onClick={() => {
                                        fetchProducts()
                                        setIsShowSearch(!isShowSearch)

                                    }}></i></li>
                                <li className="cart"><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                                {username ? <li className="dropdown"><Link className="getstarted ">{username}</Link>
                                    <ul>
                                        <li><Link to="/" onClick={(e) => handleLogout(e)}>Log out</Link></li>


                                    </ul>
                                </li> : <li><Link to="/login" className="getstarted">LOGIN</Link></li>}
                                {/* <li><Link to="/login" className="getstarted">LOGIN</Link></li> */}
                            </ul>
                            <i className="fa-solid fa-bars bi bi-list mobile-nav-toggle"></i>

                        </nav>

                    </div>

                    <input value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} onKeyUp={(e) => handleSearch(e)} className={isShowSearch ? "input-search show" : "input-search hidden"} type="text" placeholder="Search product..." />
                </header>

            </div>


        </div>

    )
}
export default Header

