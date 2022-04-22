import { useEffect, useState } from "react";
import { getAllBooks } from "../../apis/book";
import BookCard from "../BookCard/BookCard";
import Carousel from "../carousel/Carousel";
import BookList from "../BookList/BookList";
import { useNavigate, useSearchParams } from "react-router-dom";
const Home = ({}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [books, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getAllBooks();
      setData(data.books);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  if (error) {
    return <p></p>;
  }
  return (
    <>
      {books && (
        <>
          <div className="carousel-main-container">
            <Carousel data={books.slice(0, 3)} />
          </div>
          <BookList books={books} />
        </>
      )}
    </>
  );
};
export default Home;
