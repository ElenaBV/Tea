const viewRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Login = require("../views/Login");
const Main = require("../views/Main");
const Registration = require("../views/Registration");
const TeaCard = require("../views/TeaCard");
const { Tea, Comment, User } = require("../db/models");


viewRouter.get("/", async (req, res) => {
  const { user } = req.session;

  const teas = (await Tea.findAll()).map((tea) => tea.get());
  renderTemplate(Main, { user, teas }, res);
});

viewRouter.get("/tea/:id", async (req, res) => {
  const { user } = req.session;
 
  const tea = await Tea.findByPk(req.params.id);
  const comment = await Comment.findAll({
    where: { teaId: req.params.id },
    include: [User],
  });
  console.log("commentdjhfiahegshrg",comment);
  renderTemplate(TeaCard, { user, tea, comment }, res);
});


viewRouter.get("/login", (req, res) => {
  renderTemplate(Login, {}, res);
});

viewRouter.get("/registration", (req, res) => {
  renderTemplate(Registration, {}, res);
});

module.exports = viewRouter;
