const React = require("react");
const NavBar = require("./NavBar");

const Layout = ({ children, user }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style/style.css" />
        <script defer src="/teaLkAdmin.js"/>
        {/* <script src="/localstorage.js"/> */}
        <meta charSet="UTF-8" />
        <title>Чаепитие</title>
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};

module.exports = Layout;
