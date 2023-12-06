const apiRouter = require("express").Router()
const lkuserRouter = require("./lkuserRouter");
const userRouter = require("./userRouter")

apiRouter.use("/user",userRouter);
apiRouter.use('/lk', lkuserRouter);

module.exports = apiRouter