import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchApi } from "../../apis/book";
import PokeCard from "../BookCard/BookCard";

const PokeResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const searchQuery = searchParams.get("r");
  useEffect(() => {
    searchApi(searchQuery)
      .then((data) => {
        console.log(data);
        setData(data.books);
      })
      .catch((err) => {
        console.log(err.response.data.status);

        if (err.response.data.status == 404) setData([]);
      });
  }, [searchQuery]);
  return (
    <>
      {data.length > 0
        ? data.map((item) => {
            return (
              <PokeCard
                title={item.title}
                id={item._id}
                imageUrl={item.imageUrl}
              />
            );
          })
        : "No result found"}
    </>
  );
};
export default PokeResultPage;
