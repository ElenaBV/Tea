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
        <>
          <p>{el.User.userName}</p>
          <p>{el.commentBody}</p>
        </>
      ))}
      {user && (
        <form action={`/api/tea/${tea.id}`} method="POST">
          <input type="text" name="commentBody" />
          <button type="submit">Add Comment</button>
        </form>
      )}
    </div>
  </Layout>
);

module.exports = TeaCard;
