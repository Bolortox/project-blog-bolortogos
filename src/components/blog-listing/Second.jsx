// This is blog posts pages

import Link from "next/link";
import { SecondCard } from "./SecondCard";

export const Second = ({ articles }) => {
  return (
    <div className=" pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        All Blog Post
      </p>
      <div className="container  grid grid-cols-3 flex-col justify-center gap-4 pt-[30px]">
        {articles.map((article, index) => {
          return (
            <Link href={`/blog-list/${article?.id}`} key={article?.id}>
              <SecondCard
                key={index}
                imgUrl={article?.cover_image}
                tags={article?.tag_list}
                paragraph={article?.title}
                dates={article?.created_at}
                profile={article?.user.profile_image}
                username={article?.user.username}
              />
            </Link>
          );
        })}
      </div>
      {/* <div className="flex justify-center items-center py-5">
        <button className=" w-[123px] h-[48px]  border border-slate-300 rounded-md">
          Load More
        </button>
      </div> */}
    </div>
  );
};
