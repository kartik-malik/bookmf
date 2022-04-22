import { useState } from "react";
import classes from "./BookForm.module.css";
const AdvertisementForm = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [price, setPrice] = useState(props.price || "");
  const [imageUrl, setImageUrl] = useState(props.imageUrl || undefined);
  const [copies, setCopies] = useState(props.copies || "");
  const [author, setAuthor] = useState(props.author || "");
  const [year, setYear] = useState(props.year || null);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (price == "" || price < 0) {
      setError("Price cant be empty");
      return false;
    }
    if (!title) {
      setError("Title cant be empty");
      return false;
    }
    if (!author) {
      setError("Author cant be empty");

      return false;
    }
    if (!price) {
      setError("Price cant be empty");

      return false;
    }
    // if (imageUrl.slice(0, 4) != "http") {
    //   setError("image urlnot valid");
    //   return false;
    // }
    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    console.log({ title, description, price, imageUrl, author, copies, year });
    props.submitHandler({
      title,
      description,
      price,
      imageUrl,
      author,
      copies,
      year,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Your title</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Your description</label>
        <textarea
          type="text"
          id="description"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          required
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="year">year</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="copies">Copies</label>
        <input
          type="number"
          id="copies"
          value={copies}
          onChange={(e) => {
            setCopies(e.target.value);
          }}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
      </div>

      {error && <p>{error}</p>}
      <button type="submit" className={classes.actions}>
        Submit
      </button>
    </form>
  );
};
export default AdvertisementForm;
