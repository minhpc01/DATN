import userService from '../services/userService'

const userRegisterFunc = async (req, res) => {
    try {

        //console.log('req user register body: ', req.body)
        let data = await userService.userRegister(req.body)
        //console.log('req data register: ', data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
}
const userLoginFunc = async (req, res) => {
    try {

        //console.log('req body login: ', req.body)
        let data = await userService.userLogin(req.body)
        //console.log('req data register: ', data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }

}
const adminLoginFunc = async (req, res) => {
    try {

        //console.log('req body login: ', req.body)
        let data = await userService.adminLogin(req.body)
        //console.log('req data register: ', data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }

}
const adminRegisterFunc = async (req, res) => {
    try {

        //console.log('req user register body: ', req.body)
        let data = await userService.adminRegister(req.body)
        //console.log('req data register: ', data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
}
const userCheckoutFunc = async (req, res) => {
    try {

        //console.log('req body: ', req.body)
        let data = await userService.userCheckout(req.body)


        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
}

module.exports = {
    userRegisterFunc, userLoginFunc, userCheckoutFunc, adminLoginFunc, adminRegisterFunc
}