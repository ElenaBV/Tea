const viewRouter = require("express").Router()
const renderTemplate = require("../lib/renderTemplate")
const Login = require("../views/Login")
const Main = require("../views/Main")
const Registration = require("../views/Registration")

viewRouter.get("/",(req,res)=>{
    const {user} = req.session
    renderTemplate(Main, {user}, res)
})

viewRouter.get("/login",(req,res)=>{
    renderTemplate(Login,{},res)
})


viewRouter.get("/registration",(req,res)=>{
    renderTemplate(Registration,{},res)
})


module.exports = viewRouter


