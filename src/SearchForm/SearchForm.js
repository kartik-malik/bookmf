import { useRef, useEffect } from "react";
import classes from "./PokeSearchForm.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

export const PokeForm = () => {
  const inputEl = useRef(null);
  const navigate = useNavigate();
  const submitData = (e) => {
    e.preventDefault();
    navigate(`/search?r=${inputEl.current.value}`, {});
  };
  return (
    <form onSubmit={submitData} className={`${classes.PokeSearch__form}`}>
      <input
        type="search"
        ref={inputEl}
        placeholder="search"
        className={`${classes.PokeSearch__input}`}
      />
      <button type="submit" className={classes.PokeSearch__button}>
        <img src="https://cdn.pegasus.imarticus.org/homepage/homepagesearchicon.svg" />
      </button>
    </form>
  );
};
export default PokeForm;
