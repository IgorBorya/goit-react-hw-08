import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Search contacts by name</label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};
