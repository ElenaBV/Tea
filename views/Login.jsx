const React = require("react");
const Layout = require("../views/Layout");

module.exports = function Login({ message }) {
  return (
    <Layout>
      <div className="wrapper__login">
        <div className="cardlogin__container">
          <h4 className="card-header">Вход</h4>
          <div className="card-body">
            <form action="/api/user/login" method="POST">
              <div className="mb-3">
                <label className="formLog">
                  <input
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Электронная почта"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="formLog">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Пароль"
                  />
                </label>
              </div>
              <button type="submit" className="btnSubmitLog btnHover">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
