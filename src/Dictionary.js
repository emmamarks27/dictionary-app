import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`We are searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} />
    </form>
  );
}
