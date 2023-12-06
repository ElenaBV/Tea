const React = require('react');

const Layout = require("./Layout");

  const AdminView = ({user, tea}) => (
    <Layout user= {user}>
     <h3 className='auction'> Личный кабинет Админа</h3>
     <div className="teaAdmin">
    <div className='tea'>
        {tea.map((el) => (
            <div key={el.id} className='oneTea'>
                <p>{el.teaName}</p>
                <p>{el.place}</p>
                <p>{el.picture}</p>
                <p>{el.description}</p>
                <button data-id={el.id} className='deleteBtn'>Удалить</button>
            </div>
        ))}
    </div>
<div className='form'>
    <p className='form-edit'>Форма добавления</p>
    <button className='add-btn'>Добавить</button>
</div>
      </div>
      <script src="/teaLkAdmin.js"/>
    </Layout>
  );

  module.exports = AdminView;