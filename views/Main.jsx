const React = require("react");

const Layout = require("./Layout");

const Main = ({ user, teas }) => (
  <Layout user={user}>
    <h3 className="auction chernayaKartaMira">Чайная карта Мира</h3>
    <div className="cardsAuction">
      <div className="mapContainer">
        <div className="cardYandex" id="map"></div>
      </div>
      <div className="cards">
        {teas.map((tea) => (
          <div className="card">
            <div className="card-body">
              <a href={`/tea/${tea.id}`}>{tea.teaName}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <script
      src="https://api-maps.yandex.ru/2.1/?apikey=ee11ac76-8900-40f8-8654-ebdd5c98919e&lang=ru_RU"
      type="text/javascript"
    />
    <script src="/yandeScript.js" />
  </Layout>
);

module.exports = Main;
