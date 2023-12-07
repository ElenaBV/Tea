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
                  <a className="nav_user" href="/api/lkadmin">
                    {user.name}
                  </a>
                  <a className="logout" href="/">
                    Главная страница
                  </a>
                  <a className="logout" href="/api/user/logout">
                    Выход
                  </a>
                </>
              ) : (
                <>
                  <a className="nav_user" href="/api/lk">
                    {user.name}
                  </a>
                  <a className="logout" href="/">
                    Главная страница
                  </a>
                  <a className="logout" href="/api/user/logout">
                    Выход
                  </a>
                </>
              )
            ) : (
              <>
                <a className="nav-link" href="/login">
                  Вход
                </a>
                <a className="nav-link" href="/registration">
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
