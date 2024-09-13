// Blog Page Card
export const SecondCard = ({
  dates,
  tags,
  paragraph,
  imgUrl,
  profile,
  username,
}) => {
  return (
    <div className="w-[392px] h-[476px] rounded-xl border p-4 gap-5 flex flex-col  ">
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
      <div className="flex items-center gap-[20px]">
        <div className="flex gap-3 items-center ">
          <div
            style={{
              backgroundImage: `url(${profile})`,
              width: "36px",
              height: "36px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50px",
            }}
          ></div>
          <div className="font-sans not-italic text-slate-400 font-medium">
            <p>{username}</p>
          </div>
        </div>
        <p className="text-base text-slate-400">{dates}</p>
      </div>
    </div>
  );
};
