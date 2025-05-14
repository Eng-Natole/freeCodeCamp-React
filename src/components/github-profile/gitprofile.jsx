import { useEffect, useState } from "react";
import "./git.css";

function GitProfileFinder() {
  const [userName, setUserName] = useState("eng-natole");

  async function fetchGithubUserData() {
    const res = await fetch(`https:api.github.com/users/${userName}`);

    const data = await res.json();
    console.log(data);
  }

  function handleSubmit() {}

  useEffect(() => {
    fetchGithubUserData();
  }, []);

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
    </div>
  );
}

export default GitProfileFinder;
