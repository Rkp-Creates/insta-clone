const express = require('express');
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.routes")

const app = express();
app.use(express.json());   //middleware
app.use(cookieParser())   //middleware

app.use("/api/auth", authRouter)

module.exports = app;