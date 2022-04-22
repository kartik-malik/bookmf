import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { editBookApi, getBook } from "../../apis/book";
import { AuthContext } from "../../Providers/AuthProvider";
import BookForm from "./BookForm";
import classes from "./BookForm.module.css";
const BookEditPage = () => {
  const authCtx = useContext(AuthContext);
  const params = useParams();
  const [error, setError] = useState("");
  const [bookData, setBookData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      const data = await getBook(params.bookId);
      setBookData(data.book);
    } catch (error) {}
  };
  const editAdvertisementHandler = async (data) => {
    try {
      const value = await editBookApi({
        id: params.bookId,
        token: authCtx.token,
        ...data,
        userId: authCtx.user.id,
      });
      alert("Edited");
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    bookData && (
      <div className={classes.formContainer}>
        <BookForm
          submitHandler={editAdvertisementHandler}
          title={bookData.title}
          description={bookData.title}
          imageUrl={bookData.imageUrl}
          price={bookData.price}
          author={bookData.author}
          year={bookData.year}
          copies={bookData.copies}
        />
        {error && <p>{error}</p>}
      </div>
    )
  );
};
export default BookEditPage;
