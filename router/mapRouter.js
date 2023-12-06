const mapRouter = require("express").Router()

const Main = require("../views/Main")

mapRouter.post("/", async(req,res)=>{
    const teas = Tea.findAll({raw:true})
    res.json(teas)
})

module.exports = mapRouter