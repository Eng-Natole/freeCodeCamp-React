import "./git.css";

export default function UserCard({ user }) {
  if (!user) return <p>No user data available.</p>;

  const {
    avatar_url,
    followers = 0,
    following = 0,
    public_repos = 0,
    url,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  const formattedDate = createdDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="user-card">
      <div className="avatar-section">
        <img src={avatar_url} alt={`${login}'s avatar`} className="avatar" />
      </div>

      <div className="info-section">
        <h2>
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name || login}
          </a>
        </h2>
        <p>User joined on {formattedDate}</p>

        <div className="user-stats">
          <div className="stat">
            <p>Public Repos</p>
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
    </section>
  );
}
