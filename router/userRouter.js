const userRouter = require("express").Router()
const { UniqueConstraintError } = require("sequelize");
const {User} = require("../db/models");
const bcrypt = require('bcrypt');

userRouter.post('/registration', async (req, res) => {
    const { userName, email, password } = req.body;
    
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const user = await User.create({ userName, email, password: hashPass });
        
        req.session.user = {
            id: user.id,
            name: user.userName,
            email: user.email,
        };
        res.redirect('/');
    } catch (error) {
        if(error instanceof UniqueConstraintError){
            // "Такой е-майл уже есть"
        }else{
            console.log(error);
            res.sendStatus(400);
        }
    }
    
});
userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.redirect('/registration');
        
      } else {
        const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ message: 'Неверный пароль' });
      }
        if (passwordCompare) {
          req.session.user = {
            id: user.id,
            name: user.userName,
            email: user.email,
          };
          res.redirect('/');
        } else {
          res.redirect('/registration');
        }
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  });
  
  userRouter.get('/logout', async (req, res) => {
    try {
      req.session.destroy(() => {
        res.clearCookie('Pechenki');
        res.redirect('/');
      });
    } catch (error) {
      console.log('Ошибка: ', error);
    }
  });




module.exports = userRouter