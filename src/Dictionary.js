import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pexelsapiKey =
      "563492ad6f917000010000013fd9e419869741dc8208b4c3283dcf2b";
    let pexelsURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsapiKey}` };
    axios.get(pexelsURL, { headers: header }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handlePexelResponse(response) {
    console.log(response.data.photos);
    setImages(response.data.photos);
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
          <p>Suggested words: yoga, wine, sunset...</p>
        </section>
        <Results results={results} images={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
