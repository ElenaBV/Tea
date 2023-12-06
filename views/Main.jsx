const React = require("react");

const Layout = require("./Layout");

const Main = ({ user, teas }) => (
  <Layout user={user}>
    <div className="auction"> Разновидности Чая</div>
    <div className="cardsAuction">
      {teas.map((tea) => (
        <div className="card">
          <div className="card-body">
            <a href={`/tea/${tea.id}`}>{tea.teaName}</a>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

module.exports = Main;
