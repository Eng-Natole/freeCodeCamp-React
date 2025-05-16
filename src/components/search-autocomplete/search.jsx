import { useEffect, useState } from "react";

function Search() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function fetchListOfUsers() {
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-users"
        id=""
        placeholder="search users here"
      />
    </div>
  );
}

export default Search;
