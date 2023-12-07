const React = require("react");
const Layout = require("./Layout");

module.exports = function Registration() {
  return (
    <Layout>
      <div className="wrapper__registration">
        <div className="cardreg__container">
          <h4 className="card-header">Регистрация</h4>
          <div className="card-body">
            <form action="/api/user/registration" method="POST">
              <div className="regInput">
                <label className="formReg">
                  <input
                    name="userName"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Имя пользователя"
                  />
                </label>
              </div>
              <div className="regInput">
                <label className="formReg">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Электронная почта"
                  />
                </label>
              </div>
              <div className="regInput">
                <label className="formReg">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    placeholder="Пароль"
                  />
                </label>
              </div>
              <button type="submit" className="btnSubmitReg btnHover">
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
