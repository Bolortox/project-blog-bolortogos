import { useEffect, useState } from "react";
import { BlogPost } from "../blog-post/BlogPost";
import { Carousel, Content } from "../carousel/Carousel";

import { Trending } from "../trending/Trending";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [contentNumber, setContentNumber] = useState(9);

  const [tag, setTag] = useState();

  const fetchButtonData = () => {
    fetch(`https://dev.to/api/articles?per_page=${contentNumber}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?tag=${tag}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const fetchTrendingData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&top=4`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingData(data);
      });
  };
  const filterTag = (newtag) => {
    setTag(newtag);
  };

  useEffect(() => {
    fetchData();
  }, [tag]);

  useEffect(() => {
    fetchButtonData();
  }, [contentNumber]);

  useEffect(() => {
    fetchTrendingData();
  }, []);

  const handleClickLoadMore = () => {
    setContentNumber(contentNumber + 3);
  };

  return (
    <div className="w-full h-full m-auto">
      <div className="container flex flex-col max-w-[1216px] w-auto h-auto m-auto ">
        <Carousel />
        <Trending trendingData={trendingData} />
        <BlogPost filterTag={filterTag} articles={articles} />
        <div className="flex justify-center items-center py-5">
          <button
            onClick={handleClickLoadMore}
            className="w-[123px] h-[48px] border border-slate-300 rounded-md"
          >
            Load More
          </button>
        </div>
        <div className="bg-slate-50"></div>
      </div>
    </div>
  );
}
