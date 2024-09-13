export const TrendingCard = ({ imgUrl, badge, title }) => {
  return (
    <div className="hover:scale-[1.1]">
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "320px",
          width: "289px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "6px",
        }}
        className="rounded-xl flex flex-col justify-end gap-4 p-7 "
      >
        <button className="bg-indigo-500 rounded-md w-[94px] h-[27px] text-sm font-sans text-white">
          {badge}
        </button>
        <p className="font-sans  font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};
