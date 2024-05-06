import React, { useState } from "react";
import styles from "../styles/SearchBox.module.css";

function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.formControl}
        placeholder="Search Movie Title ..."
        value={input}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBox;
