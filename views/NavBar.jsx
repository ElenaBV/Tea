const React = require("react");

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-gradient bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user ? (
              user.name === "admin" ? (
                <>
                  <a className="logout newStyle" href="/">
                    Главная страница
                  </a>
                  <a className="logout newStyle" href="/api/user/logout">
                    Выход
                  </a>
                  <a className="nav_user newStyle" href="/api/lkadmin">
                    {user.name}
                  </a>
                </>
              ) : (
                <>
                  <a className="nav_user newStyle" href="/api/lk">
                    Личный кабинет
                  </a>
                  <a className="logout newStyle" href="/">
                    Главная страница
                  </a>
                  <a className="logout newStyle" href="/api/user/logout">
                    Выход
                  </a>
                  <a className="newStyle hi">Привет, {user.name}</a>
                </>
              )
            ) : (
              <>
                <a className="nav-link newStyle" href="/login">
                  Вход
                </a>
                <a className="nav-link newStyle" href="/registration">
                  Регистрация
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
