const React = require("react");

function NavBar({ user }) {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      
          {user?(
          <>
          <a className='nav_user' href="/api/lk">{user.name}</a>
          <a className="logout" href="/">Main page</a>
          <a className="logout" href="/api/user/logout">Log Out</a>
          </>):(
            <>
            <a className="nav-link" href="/login">Залогиниться</a>
          <a className="nav-link" href="/registration">Регистрация</a>
            </>
          )}
      </div>
    </nav>
  );
}

module.exports = NavBar;
