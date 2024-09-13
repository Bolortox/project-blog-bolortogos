export const BlogPostCard = ({ dates, tags, paragraph, imgUrl }) => {
  return (
    <div className="w-[392px] h-[476px] rounded-xl border p-4 gap-5 flex flex-col ">
      <div
        className=""
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "240px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "6px",
        }}
      ></div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <button className="w-[97px] h-[28px] flex justify-center items-center rounded-md bg-indigo-100 text-sm text-blue-600 font-sans not-italic">
            {tags[0]}
          </button>
        </div>

        <p className="text-2xl font-sans not-italic font-semibold">
          {paragraph}
        </p>
      </div>
      <p className="text-base text-slate-300">{dates}</p>
    </div>
  );
};
