const renderTemplate = require('../lib/renderTemplate');
const AdminView = require('../views/AdminView');
const { Tea } = require('../db/models');
const {checkAdmin} = require("../middlwares/middlwares")
const lkadminRouter = require('express').Router();



lkadminRouter.get('/', checkAdmin,async (req, res) => {
    try {
        const { user } = req.session;
        const tea = await Tea.findAll({raw: true})
        renderTemplate(AdminView, {user, tea}, res);
    } catch (error) {
       console.log(error);
       res.sendStatus(400); 
    }
})

lkadminRouter.post('/',checkAdmin,async (req, res) => {
    try {
       const { user } = req.session;
       const userId = req.session.user.id;
       const { teaName, place,latitude,longitude, picture, description } = req.body;
      const teaAdd = await Tea.create({
        teaName,
        place,
        picture,
        description,
        userId,
        latitude,
        longitude,
      })
      res.json(teaAdd);
    } catch (error) {
       console.log(error);
       res.sendStatus(400); 
    }
})

lkadminRouter.delete('/:id', checkAdmin, async (req, res) => {
    try {
        const { user } = req.session;
        const { id } = req.params;
        const teaDelete = await Tea.destroy({where: {id}})
        res.json(teaDelete);
    } catch (error) {
      console.log(error)
      res.sendStatus(400);  
    }
})

module.exports = lkadminRouter;