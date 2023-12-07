const React = require("react");

const Layout = require("./Layout");

const TeaCard = ({ user, tea, comment }) => (
  <Layout user={user}>
    <div className="auction">
      <h1>{tea.teaName}</h1>
      <p>{tea.description}</p>
      <p>{tea.place}</p>
      <img src={tea.picture}></img>
      {comment.map((el) => (
        <div className="comment-wrapper">
          <p className="username">{el.User.userName}:</p>
          <p className="comment-text">{el.commentBody}</p>
        </div>
      ))}
      {user && (
        <form action={`/api/tea/${tea.id}`} method="POST">
          <input type="text" name="commentBody" className="commentInput" />
          <button className="btnComment btnHover" type="submit">
            Добавить комментарий
          </button>
        </form>
      )}
    </div>
  </Layout>
);

module.exports = TeaCard;
