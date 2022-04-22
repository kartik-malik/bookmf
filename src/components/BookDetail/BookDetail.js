import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import classes from "./BookDetail.module.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { deleteBookApi, getBook, issueBookApi } from "../../apis/book";
const BookDetail = ({}) => {
  const authCtx = useContext(AuthContext);
  const { bookId } = useParams();
  const [copies, setCopies] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [books, setBook] = useState(null);
  useEffect(() => {
    fetchDetail();
  }, []);
  let fetchDetail = async () => {
    try {
      const data = await getBook(bookId);
      setBook(data.book);
      setCopies(data.copiesLeft);
    } catch (error) {
      console.log(error);
    }
  };
  const issueBook = async () => {
    if (!authCtx.isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      const data = await issueBookApi({
        id: bookId,
        userId: authCtx.user.id,
        token: authCtx.token,
      });
      setCopies((prev) => prev - 1);
      alert("Issued Book");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  const deleteAdvertisement = async () => {
    console.log(authCtx.token);
    try {
      setLoading(true);
      const value = await deleteBookApi({
        id: bookId,
        token: authCtx.token,
        userId: authCtx.user.id,
      });
      alert("Deleted");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };
  return (
    !!books && (
      <div>
        <img src={books.imageUrl} className={classes.image}></img>
        {copies && (
          <div>
            <span style={{ color: "red" }}>Copies left</span> -{copies}
          </div>
        )}
        <div>{books.title}</div>
        <p>{books.description}</p>
        <p>Posted By {books.userId.username}</p>
        {authCtx.isLoggedIn && (
          <div className={classes.buttonContainer}>
            {authCtx.user.isAdmin && (
              <Link
                to={`/edit/book/${books._id}`}
                className={classes.editButton}
              >
                Edit
              </Link>
            )}
            {authCtx.user.isAdmin && (
              <button
                onClick={deleteAdvertisement}
                className={classes.deleteButton}
              >
                Delete
              </button>
            )}
            <button onClick={issueBook} className={classes.deleteButton}>
              Issue
            </button>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    )
  );
};
export default BookDetail;
