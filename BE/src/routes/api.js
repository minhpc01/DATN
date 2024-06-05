import express from "express";
import productController from '../controller/productController'
import userController from '../controller/userController'
import cartController from '../controller/cartController'
import orderController from '../controller/orderController'
import blogController from '../controller/blogController'
import categoryController from '../controller/categoryController'
import paymentController from '../controller/paymentController'
import shippingController from '../controller/shippingController'


const router = express.Router();

// app: express app
const initApiRoutes = (app) => {
    // định nghĩa các routes được sử dụng



    // api product
    router.get("/product/read", productController.readFunc)
    router.get("/product/detail/:id", productController.readProductDetailFunc)

    // api user
    router.post("/user/register",
        userController.userRegisterFunc
    )
    router.post("/user/login",
        userController.userLoginFunc
    )

    router.post("/user/checkout",
        userController.userCheckoutFunc
    )
    // router.post("/user/send-idaccount",
    //     userController.sendIdAccountFunc
    // )
    //// api admin
    router.post("/admin/login",
        userController.adminLoginFunc
    )
    router.post("/admin/register",
        userController.adminRegisterFunc
    )
    // cart api
    router.post("/cart/init",
        cartController.initCartFunc
    )
    router.post("/cart/read",
        cartController.readFunc
    )
    router.get("/cart-all/read",
        cartController.readAllFunc
    )
    router.put("/update-cart-qty",
        cartController.updateCartFunc
    )
    router.delete("/delete-cart",
        cartController.deleteCartFunc
    )
    router.post("/cart/add",
        cartController.addToCartFunc
    )
    router.put("/shipping/update",
        cartController.updateShippingFunc
    )
    // get cart detail
    router.get("/cart-detail/read/:idAccount",
        cartController.readCartDetailFunc
    )

    router.post("/order/read",
        orderController.readFunc
    )
    router.post("/order-confirm/read",
        orderController.readOrderConfirmFunc
    )

    // add user to cart
    router.post("/add-user-to-cart",
        cartController.addUserToCartFunc
    )
    // blog controller
    router.get("/blog/read",
        blogController.readFunc
    )
    // category controller
    router.get("/category/read",
        categoryController.readFunc
    )
    // payment controller
    router.get("/payment/read",
        paymentController.readFunc
    )
    // shipping controller
    router.get("/shipping/read",
        shippingController.readFunc
    )
    // order controller
    router.get("/order/read",
        orderController.readFuncAll
    )
    router.post("/order/create", orderController.createFuncAll
    )
    return app.use("/api/v1", router);
};
export default initApiRoutes;
