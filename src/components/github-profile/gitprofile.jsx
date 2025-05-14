import "./git.css";

function GitProfileFinder() {
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="search github username..."
        />
      </div>
    </div>
  );
}

export default GitProfileFinder;
