import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  return (
    <div className="results">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
