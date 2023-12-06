
const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const teaRouter = require("./teaRouter");
const lkuserRouter = require("./lkuserRouter");
const lkadminRouter = require("./lkadminRouter");

apiRouter.use("/user", userRouter);
apiRouter.use('/tea', teaRouter);
apiRouter.use('/lk', lkuserRouter);
apiRouter.use('/lkadmin', lkadminRouter);



module.exports = apiRouter;
