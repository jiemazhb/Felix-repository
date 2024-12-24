
import React, { useState } from "react";
import useFetch from "./useFetch";
import useDebounce from "./useDebounce";

function UsageOfCustumHooks() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); 
  
  const apiUrl = debouncedQuery
    ? `https://api.example.com/search?query=${debouncedQuery}`
    : null;

  const { data, isLoading, isError } = useFetch(apiUrl);

  const handleOnChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Search App</h1>
      <input type="text" placeholder="Search..." value={query} onChange={handleOnChange} style={{ padding: "10px", width: "300px" }} />

      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: "red" }}>Something went wrong!</p>}

      {data && (
        <ul>
          {data.results.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsageOfCustumHooks;
