const renderTemplate = require('../lib/renderTemplate');
const UserView = require('../views/UserView');
const { Comment, Tea } = require('../db/models');


const lkuserRouter = require('express').Router();

lkuserRouter.get('/', async (req, res) => {
    try {
        const { user } = req.session;
    const allComments = await Comment.findAll({include: Tea, raw: true});  
    renderTemplate(UserView, { user,  allComments }, res) 
    } catch (error) {
        console.log(error);
    }
})

lkuserRouter.delete('/:id', async (req, res) => {
    const {id} = req.params
    const commentId = await Comment.findOne({where: {id}}, {raw: true})
    const ownerI =  commentId.dataValues.ownerId
    try {
        const {user} = req.session;
        if(user.id === ownerI) {
          const deleteCom = await Comment.destroy({where: {id}}) 
          res.json(deleteCom); 
        } 
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
})

lkuserRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { commentBody } = req.body;
        const {user} = req.session;
        const commentId = await Comment.findOne({where: {id}}, {raw: true})
        const ownerId =  commentId.dataValues.ownerId

        if(user.id === ownerId) {
        const editCom = await Comment.update({commentBody}, {where: {id}})
        res.json(editCom)
        }  
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
})




module.exports = lkuserRouter;