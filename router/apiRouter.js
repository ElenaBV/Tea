
const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const teaRouter = require("./teaRouter");
const lkuserRouter = require("./lkuserRouter");

apiRouter.use("/user", userRouter);
apiRouter.use('/tea', teaRouter);
apiRouter.use('/lk', lkuserRouter);



module.exports = apiRouter;
