import { useEffect, useState } from "react";
import Suggestion from "./suggestion";
import "./style.css";

function Search() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDD, setShowDD] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDD(true);
    } else {
      setShowDD(false); // <-- Corrected here
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(
          data.users.map((userItem) => {
            return userItem.firstName;
          })
        );
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! please wait</h1>
      ) : (
        <input
          type="text"
          name="search-users"
          placeholder="search users here"
          value={searchParam}
          onChange={handleChange}
        />
      )}

      {showDD && <Suggestion data={filteredUsers} />}
    </div>
  );
}

export default Search;
