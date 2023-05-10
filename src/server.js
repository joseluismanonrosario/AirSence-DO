const express = require("express");
const { dirname } = require("path");

const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"../public")));

app.get("/", (req, res) => {res.render("./pages/landing-page")})

app.get("/home",(req, res) => {res.render("./pages/index")});

app.get("/blog", (req, res) => {res.render("./pages/blog")});

app.get("/products", (req, res) => {res.render("./pages/products")});

app.get("/features", (req, res) => {res.render("./pages/features")});

app.get("/contact", (req, res) => {res.render("./pages/contact")});

app.get("/about_us", (req, res) => {res.render("./pages/about_us")});

app.get("/404", (req, res) => {res.render("./pages/Error404")});

app.get("/b1",(req, res) => {res.render("./blogs/blog1")});

app.get("/b2",(req, res) => {res.render("./blogs/blog2")});

app.get("/b3",(req, res) => {res.render("./blogs/blog3")});

app.get("/b4",(req, res) => {res.render("./blogs/blog4")});

app.get("/b5",(req, res) => {res.render("./blogs/blog5")});

app.get("/b6",(req, res) => {res.render("./blogs/blog6")});

app.listen(4000,()=>{console.log("Server en http://localhost:4000")});


console.log(__dirname);

