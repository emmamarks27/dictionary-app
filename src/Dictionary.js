import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  if (loaded) {
    return (
      <div className="results">
        <section className="results-section">
          <h1>What would you like to search?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} placeholder="hello" />
          </form>
          <p>Suggested words: sunset, head, pound...</p>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
