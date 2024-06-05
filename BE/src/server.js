import express from "express";
import configViewEngine from "./config/viewEngine";
// import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import initApiAdminRoutes from './routes/apiAdmin'
import bodyParser from "body-parser";
import { connection } from "./config/connectDB";
require("dotenv").config(); // giúp lấy các biến trong file .env

const app = express();
// config view engine
configViewEngine(app);

// config body-parser: thư viện lấy để lấy thông tin khi đẩy lên server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

// connection db
connection();

//init web route
// initWebRoutes(app);
initApiRoutes(app);
initApiAdminRoutes(app)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("localhost ", PORT);
});
