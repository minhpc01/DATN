
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './components/main.css'
import { sendIdAccount } from "./service/userService";

import Home from './pages/Home';
import Header from './components/Header';
import Login from "./pages/Login";
import About from './pages/About';
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";

import Register from "./pages/Register";

import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import ConfirmPayment from "./pages/ConfirmPayment";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { fetchCart, fetchAllCart } from "./service/cartService"
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux"
import { INITIAL_CART_REDUX, INITIAL_CARTALL_REDUX } from "./redux/actions/action"


function App() {
  const navigate = useNavigate()
  const { search } = useLocation();
  const dispatch = useDispatch()


  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  let cart = useSelector((state) => state.user.cart)

  var a = []

  //console.log('arr cart: ', arrCart)
  // var a = _.cloneDeep(arrCart)
  // var tt = _.cloneDeep(total)

  let username = sessionStorage.getItem("username")

  let idAccount = sessionStorage.getItem("idAccount")
  useEffect(() => {

    //console.log('id account: ', idAccount)
    // if () {

    // }
    sendIdAccount()
    if (!username) {
      navigate("/login?redirect=/cart")
    }
    // fetch all cart _detail
    //fetchAllCartF()
    // fetch  cart-detail by userid
    //fetchCartF()
    // console.log('cart qty: ', cart.qty)

  }, [])

  const sendIdAccount = async () => {
    await sendIdAccount({ idAccount: idAccount })
  }

  const fetchCartF = async () => {

    let resCart = await fetchCart({ idAccount })
    console.log('res cart fetch at app: ', resCart.data.DT)

    a = []
    if (resCart && resCart.data.DT) {
      // dispatch(INITIAL_CARTALL_REDUX(resCart.data.DT))
      resCart.data.DT.map((item, index) => {
        if (item.Products.name != null && item.User.id != null) {
          a.push(item)

        }
      })
    }

    console.log('a: ', a)
    //dispatch(INITIAL_CART_REDUX(a))

  }
  const fetchAllCartF = async () => {
    let res = await fetchAllCart()
    console.log('res fetch all cart: ', res)
    if (res && res.data.DT) {
      dispatch(INITIAL_CARTALL_REDUX(res.data.DT))
    }
  }
  return (
    <div className="">

      <Header />
      <Routes>
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/thank-you" element={<ConfirmPayment />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/product/detail/:id" element={<ProductDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />

      </Routes>
      <Footer />


    </div>
  );
}

export default App;
