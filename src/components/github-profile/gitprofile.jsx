import { useEffect, useState } from "react";
import "./git.css";
import UserCard from "./user";

function GitProfileFinder() {
  const [userName, setUserName] = useState("berry-k0");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https:api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! pleae wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="search github username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserCard user={userData} /> : null}
    </div>
  );
}

export default GitProfileFinder;
