import Link from "next/link";
import { LeftIcon } from "../svg/LeftIcon";
import { RightIcon } from "../svg/RightIcon";
import { useEffect, useState } from "react";

export const Carousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);

  const fetchCarouselData = () => {
    fetch(`https://dev.to/api/articles?per_page=6&top=6`)
      .then((response) => response.json())
      .then((data) => {
        setCarouselData(data);
      });
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" h-[800px] cover w-full m-auto py-16 relative pt-28 ">
      <Link href={`/blog-list/${carouselData[currentIndex]?.id}`}>
        <div
          style={{
            backgroundImage: `url(${carouselData[currentIndex]?.cover_image})`,
          }}
          className=" p-3 w-full h-full rounded-2xl bg-center bg-cover duration-500 "
        >
          <div className=" w-[598px] h-[286px] absolute bottom-20  p-10 bg-white rounded-xl flex flex-col gap-6">
            <button className="w-[97px] h-[28px] bg-indigo-500 text-white flex justify-center items-center rounded-md text-xs  non-italicfont-medium hover:shadow-2xl ">
              {carouselData[currentIndex]?.tag_list[0]}
            </button>
            <div className="text-4xl font-semibold font-sans">
              {carouselData[currentIndex]?.title}
            </div>
            <div className="text-sm font-sans text-slate-400 ">
              {carouselData[currentIndex]?.published_at}
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-end gap-[9px] pt-[11px] ">
        <button
          onClick={prevSlide}
          className=" w-10 h-10 rounded-lg border border-black flex justify-center items-center "
        >
          <LeftIcon />
        </button>

        <button
          onClick={nextSlide}
          className=" w-10 h-10 rounded-lg border border-black flex justify-center items-center "
        >
          <RightIcon />
        </button>
      </div>
    </div>
  );
};
