const React = require("react");
const NavBar = require("./NavBar");

const Layout = ({ children,user }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style/style.css" />
        <meta charSet="UTF-8" />
        <script defer src="/js/indexScript.js"/>
        <title>Экзамен</title>
      </head>
      <body >
        <NavBar user={user}/>
        {children}
      </body>
    </html>
  );
};

module.exports = Layout;