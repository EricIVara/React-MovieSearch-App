import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search Movie Title ..."
        value={input}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBox;
