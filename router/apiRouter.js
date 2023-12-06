const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const teaRouter = require("./teaRouter");

apiRouter.use("/user", userRouter);
apiRouter.use('/tea', teaRouter);

module.exports = apiRouter;
