export default function UserCard({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    name,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user-card">
      <img src={avatar_url} alt="user avatar" className="avatar" />
      <div className="info">
        <h2>
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noreferrer"
          >
            {name || login}
          </a>
        </h2>
        <p className="joined-date">
          Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
        <div className="stats">
          <div className="stat">
            <p>Repos</p>
            <p>{public_repos}</p>
          </div>
          <div className="stat">
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div className="stat">
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
