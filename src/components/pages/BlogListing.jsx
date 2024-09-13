import { Second } from "../blog-listing/Second";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { useEffect, useState } from "react";

export default function BlogListing() {
  const [articles, setArticles] = useState([]);
  const [contentNumber, setContentNumber] = useState(9);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const fetchButtonData = () => {
    fetch(`https://dev.to/api/articles?per_page=${contentNumber}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchButtonData();
  }, [contentNumber]);

  const handleClickLoadMore = () => {
    setContentNumber(contentNumber + 3);
  };

  return (
    <div className="w-full h-full m-auto">
      <div className="container flex flex-col max-w-[1216px] w-auto h-auto m-auto ">
        <Second articles={articles} />
        {/* Second is the name of blog pages.  */}
        <div className="flex justify-center items-center py-5">
          <button
            onClick={handleClickLoadMore}
            className="w-[123px] h-[48px] border border-slate-300 rounded-md"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
