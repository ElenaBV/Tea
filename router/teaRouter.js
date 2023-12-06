const teaRouter = require("express").Router();
const { Tea, Comment } = require("../db/models");

teaRouter.post("/:id", async (req, res) => {
  const { user } = req.session;
  const { id } = req.params;
  const { commentBody } = req.body;

  await Comment.create({
    commentBody,
    teaId: id,
    ownerId: req.session.user.id,
  });
  res.redirect(`/tea/${id}`);
});

module.exports = teaRouter;
