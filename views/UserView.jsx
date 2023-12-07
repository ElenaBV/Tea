const React = require('react');

const Layout = require("./Layout");

  const UserView = ({user, allComments}) => (
    <Layout user= {user}>
     <h3 className='auction'> Личный кабинет Пользователя</h3>
     <div className="cardsAuction">
      <div className='com'>
        {allComments.map((elem) =>(
          <div key={elem.id} className="oneComm">
            <p>{elem['Tea.teaName']}</p>
            <p className='comm'>{elem.commentBody}</p>
            {user.id === elem.ownerId &&
            <>
            <button data-id={elem.id} className='editBtn btnHover'>Изменить</button>
            <button data-id={elem.id} className='deleteBtn btnHover'>Удалить</button>
            </>
            }
          
          </div>
        ))}
      </div>
      </div>
      <script src="/commentLk.js"/>
    </Layout>
  );

  module.exports = UserView;
