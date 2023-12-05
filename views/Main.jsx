const React = require('react');

  const Layout = require("./Layout");

  const Main = ({user,}) => (
    <Layout user= {user}>
     <div className='auction'> Главная страница</div>
     <div className="cardsAuction">
      </div>
    </Layout>
  );

  module.exports = Main;