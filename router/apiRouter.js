
const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const teaRouter = require("./teaRouter");
const lkuserRouter = require("./lkuserRouter");
const lkadminRouter = require("./lkadminRouter");
const {checkUser, checkAdmin} = require('../middlwares/middlwares');
// const mapRouter = require("./mapRouter")


apiRouter.use("/user", userRouter);
apiRouter.use('/tea', teaRouter);
apiRouter.use(checkUser);
apiRouter.use('/lk', lkuserRouter);
apiRouter.use(checkAdmin);
apiRouter.use('/lkadmin', lkadminRouter);
// apiRouter.use("/map", mapRouter);



module.exports = apiRouter;
