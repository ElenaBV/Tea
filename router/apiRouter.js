const apiRouter = require("express").Router()
const userRouter = require("./userRouter")

apiRouter.use("/user",userRouter)

module.exports = apiRouter