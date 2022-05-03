import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`We are searching for ${keyword}`);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} />
    </form>
  );
}
