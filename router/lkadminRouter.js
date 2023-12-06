const renderTemplate = require('../lib/renderTemplate');
const AdminView = require('../views/AdminView');
const { Tea } = require('../db/models');

const lkadminRouter = require('express').Router();


lkadminRouter.get('/', async (req, res) => {
    try {
        const { user } = req.session;
        const tea = await Tea.findAll({raw: true})
        renderTemplate(AdminView, {user, tea}, res);
    } catch (error) {
       console.log(error);
       res.sendStatus(400); 
    }
})

lkadminRouter.post('/', async (req, res) => {
    try {
       const { user } = req.session;
       const id = req.session.user.id;
       const { teaName, place, picture, description } = req.body;
      const teaAdd = await Tea.create({
        teaName,
        place,
        picture,
        description,
        userId: id,
      })
      res.json(teaAdd);
    } catch (error) {
       console.log(error);
       res.sendStatus(400); 
    }
})

lkadminRouter.delete('/:id', async (req, res) => {
    try {
        const { user } = req.session;
        const { id } = req.params;
        // console.log('!!!!!!!!!!!!!!', id)
        const teaDelete = await Tea.destroy({where: {id}})
        res.json(teaDelete);
    } catch (error) {
      console.log(error)
      res.sendStatus(400);  
    }
})

module.exports = lkadminRouter;