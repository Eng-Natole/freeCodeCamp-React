import { useEffect, useState } from "react";
import "./git.css";
import UserCard from "./user";

function GitProfileFinder() {
  const [userName, setUserName] = useState("berry-k0");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchGithubUserData() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if (data.message === "Not Found") {
        setError("User not found");
        setUserData(null);
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userName.trim()) fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="github-profile-container">
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <div className="error">{error}</div>}
      {loading && <h2 className="loading">Loading data... Please wait.</h2>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default GitProfileFinder;
