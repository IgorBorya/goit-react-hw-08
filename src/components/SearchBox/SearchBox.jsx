import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor="search-input">Find contacts by name</label>
      <input
        id="search-input"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
        className={s.input}
      />
    </div>
  );
};
