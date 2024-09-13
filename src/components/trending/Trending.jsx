import Link from "next/link";
import { TrendingCard } from "./TrendingCard";

export const Trending = ({ trendingData = [] }) => {
  return (
    <div className="w-full flex justify-center flex-col pt-[100px] ">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        Trending
      </p>
      <div className="container grid grid-cols-4 flex-col justify-center gap-4 pt-[30px] ">
        {trendingData.map((article, index) => (
          <Link href={`/blog-list/${article?.id}`} key={article?.id}>
            <TrendingCard
              key={index}
              imgUrl={article?.cover_image}
              badge={article?.tag_list[0]}
              title={article?.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
