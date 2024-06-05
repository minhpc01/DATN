import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { fetchCart, updateCart, deleteCart, fetchAllCart, updateShipping } from "../service/cartService"
import _ from 'lodash'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import './Cart.scss'
import { INITIAL_CART_REDUX, INITIAL_CARTALL_REDUX, INCREASE, DECREASE } from "../redux/actions/action"

const Cart = () => {
    const navigate = useNavigate()
    const { search } = useLocation();
    const dispatch = useDispatch()

    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";
    const [arrCart, setArrCart] = useState([])
    const [total, setTotal] = useState(0)
    const [shipping, setShipping] = useState(0)

    var a = []
    var tt = 0
    let username = sessionStorage.getItem("username")
    let idAccount = sessionStorage.getItem("idAccount")
    // console.log('id account: ', idAccount)
    useEffect(() => {

        if (!username) {
            navigate("/login?redirect=/cart")
        }
        //fetchAllCartF()
        fetchCartF()

    }, [])

    const fetchCartF = async () => {

        let resCart = await fetchCart({ idAccount })
        console.log('res cart fetch: ', resCart.data.DT)
        tt = 0
        a = []
        if (resCart && resCart.data.DT) {
            // dispatch(INITIAL_CARTALL_REDUX(resCart.data.DT))
            resCart.data.DT.map((item, index) => {
                if (item.Products.name != null && item.User.id != null) {
                    a.push(item)
                    tt = tt + item.Products.price * item.Products.Cart_Detail.qty
                }
            })
        }

        //console.log('a: ', a)
        dispatch(INITIAL_CART_REDUX(a))
        setArrCart(a)
        setTotal(tt)
    }
    const fetchAllCartF = async () => {
        let res = await fetchAllCart()
        // console.log('res fetch all cart: ', res)
        if (res && res.data.DT) {
            dispatch(INITIAL_CARTALL_REDUX(res.data.DT))
        }
    }

    const handleCartUp = (cartProduct) => {
        // console.log('cart product: ', cartProduct)
        arrCart.map((item, index) => {
            if (item.Products.id === cartProduct.Products.id) {
                item.Products.Cart_Detail.qty = item.Products.Cart_Detail.qty + 1

            }
            setArrCart(arrCart)
        })
        //setArrCart([...arrCart, { ...item, qty: item.qty + 1 }])
    }
    const handleDeleteCart = async (item) => {
        // dispatch(DELETE_CART(item.id))
        const res = await deleteCart(item)
        console.log('res delete cart: ', res)
        fetchCartF()
    }
    const handleProceed = async (e) => {
        e.preventDefault()

        let id
        if (shipping == 10) {
            id = 2
            //  method = 'economical'
        }
        else {
            id = 1
            // method = 'flash'
        }
        let res = await updateShipping({ id, idAccount: idAccount })
        console.log('update shipping: ', res)
    }

    const onChange1 = (e) => {

        setShipping(+e.target.value)

    };
    const onChange2 = (e) => {
        setShipping(+e.target.value)

    };

    return (
        // <!--================Cart Area =================-->
        <section class="cart_area">
            <div class="container">
                <div class="cart_inner">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th></th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    arrCart.map((item, index) => (

                                        <tr key={`key ${index}`}>
                                            <td>
                                                <div class="media d-flex">
                                                    <div class="d-flex">

                                                        <img src={item.Products.image} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <p>{item.Products.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>${item.Products.price}</h5>
                                            </td>
                                            <td>
                                                <div class="product_count">
                                                    <input type="text" name="qty" id="sst" maxlength="12" value={item.Products.Cart_Detail.qty} title="Quantity:"
                                                        class="input-text qty" />
                                                    <button
                                                        class="increase items-count" type="button">
                                                        <i class="lnr lnr-chevron-up fa-solid fa-chevron-up"
                                                            onClick={async () => {

                                                                //handleCartUp(item)
                                                                dispatch(INCREASE(item.id))
                                                                // bi chậm 1 nhịp
                                                                await updateCart({ ...item, type: 'plus' })
                                                                fetchCartF()
                                                            }


                                                            }></i>
                                                    </button>
                                                    <button
                                                        class="reduced items-count" type="button">
                                                        <i
                                                            class="lnr lnr-chevron-down fa-solid fa-chevron-down"
                                                            onClick={async () => {

                                                                //handleCartUp(item)
                                                                dispatch(DECREASE(item.id))
                                                                // số lượng sản phẩm trong giỏ lớn hơn 1 mới cho giảm
                                                                if (item.Products.Cart_Detail.qty > 1) {
                                                                    await updateCart({ ...item, type: 'minus' })
                                                                    fetchCartF()
                                                                }
                                                            }}>

                                                        </i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <i class="fa-regular fa-trash-can" onClick={() => handleDeleteCart(item)}></i>
                                            </td>
                                            <td>

                                                <h5>${item.Products.Cart_Detail.qty * item.Products.price}</h5>
                                            </td>
                                        </tr>
                                    ))}


                                <tr class="shipping_area">
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Shipping</h5>
                                    </td>
                                    <td>
                                        <div class="shipping_box">
                                            <ul class="list">
                                                <li className="d-flex"> Economical delivery: $10.00<input onChange={(e) => onChange1(e)} className="radio" type="radio" value={10} name="radAnswer" /></li>
                                                <li className="d-flex">flash Shipping: $15.00<input onChange={(e) => onChange2(e)} className="radio" type="radio" value={15} name="radAnswer" /></li>
                                                {/* <li className="d-flex">Flat Rate: $10.00<input className="radio" type="radio" value={10} name="radAnswer" onChange={(e => setShipping(e.target.value))} /></li>
                                                <li className="d-flex active" >Local Delivery: $2.00<input className="radio" type="radio" value={2} name="radAnswer" onChange={(e => setShipping(e.target.value))} /></li> */}
                                            </ul>
                                            {/* <h6>Calculate Shipping <i class="fa fa-caret-down" aria-hidden="true"></i></h6> */}
                                            {/* <select class="shipping_select">
                                                <option value="1">Bangladesh</option>
                                                <option value="2">India</option>
                                                <option value="4">Pakistan</option>
                                            </select>
                                            <select class="shipping_select">
                                                <option value="1">Select a State</option>
                                                <option value="2">Select a State</option>
                                                <option value="4">Select a State</option>
                                            </select>
                                            <input type="text" placeholder="Postcode/Zipcode" />
                                            <a class="gray_btn" href="#">Update Details</a> */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5 className="total">$ {total + shipping}</h5>
                                    </td>
                                </tr>
                                <tr class="out_button_area">
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div class="checkout_btn_inner d-flex align-items-center">
                                            <div onClick={(e) => handleProceed(e)}>
                                                <Link class="primary-btn" to="/checkout" >Proceed to checkout</Link>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        // {/* <!--================End Cart Area =================--> */}
    )
}
export default Cart