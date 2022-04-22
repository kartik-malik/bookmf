import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { addBookApi } from "../../apis/book";
import { AuthContext } from "../../Providers/AuthProvider";
import BookForm from "./BookForm";
import classes from "./BookForm.module.css";
const BookAddPage = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState(null);
  const addAdvertisementHandler = async ({
    title,
    description,
    price,
    imageUrl,
    copies,
    author,
    year,
  }) => {
    console.log("author");
    try {
      console.log(authCtx.user);
      const data = await addBookApi({
        title,
        description,
        price,
        imageUrl: imageUrl || undefined,
        copies,
        author,
        userId: authCtx.user.id,
        token: authCtx.token,
        year,
      });
      alert("Added");
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className={classes.formContainer}>
      <BookForm submitHandler={addAdvertisementHandler} />
      {error && <p>{error}</p>}
    </div>
  );
};
export default BookAddPage;
