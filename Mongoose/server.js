const express = require('express');
const path = require("path");
const app = express();
const companyRouter = require('./routes/company')
const mongoose = require('mongoose')
const config = require('./config/config');
const port = 6006;

mongoose.connect(config.mongoURL)
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/company", companyRouter)


app.listen(port, () => console.log(`Server is running on port ${port}`))