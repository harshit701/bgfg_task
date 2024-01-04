import { useLoaderData } from "react-router-dom";
import NewsList from "../components/NewsList";
import { useState } from "react";

function NewsPage() {
  const { pageCount, news } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(news);

  const handleNextPage = async () => {
    const nextPage = currentPage + 1;
    try {
      const { news } = await newsLoader(nextPage);
      setData(news);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  };

  const handlePrevPage = async () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    try {
      const { news } = await newsLoader(prevPage);
      setData(news);
      setCurrentPage(prevPage);
    } catch (error) {
      console.error("Error fetching previous page:", error);
    }
  };

  return (
    <>
      <NewsList news={data} />

      <div className="pagination">
        <button onClick={handlePrevPage}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </>
  );
}

export default NewsPage;

export const newsLoader = async (page) => {
  const response = await fetch(
    "http://localhost:4000/news?p=" + (typeof page === "object" ? 1 : page)
  );

  if (!response.ok) {
    throw new Error({ message: "An Error occurred!" });
  }

  const data = await response.json();

  return data;
};
