import React from "react";
import s from "./SearchBox.module.css";

export const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={s.searchBox}>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts..."
        className={s.input}
      />
    </div>
  );
};
