const React = require("react");

const Layout = require("./Layout");

const Main = ({ user, teas }) => (
  <Layout user={user}>
    <div className="auction"> Разновидности Чая</div>
    <div className="cardsAuction">
      {teas.map((tea) => (
        <div className="card">
          <div className="card-body">
          <div className="cardYandex" id="map" ></div>
            <a href={`/tea/${tea.id}`}>{tea.teaName}</a>
          </div>
        </div>
      ))}
    </div>
    <script
      src="https://api-maps.yandex.ru/2.1/?apikey=ee11ac76-8900-40f8-8654-ebdd5c98919e&lang=ru_RU"
      type="text/javascript"
    />
    <script src="/yandeScript.js"/>
  </Layout>
);

module.exports = Main;
