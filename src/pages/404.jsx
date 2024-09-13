import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className=" w-full h-full m-auto container max-w-2xl flex flex-col justify-center items-center py-40 ">
      <div className="pt-[100px] flex gap-10">
        <p className="font-sans not-italic  text-7xl pr-10 border-r border-slate-400 h-[156px]">
          404
        </p>
        <div className="flex flex-col gap-5">
          <div className="font-sans not-italic text-xl font-semibold">
            Page Not Found
          </div>
          <p></p>
          <p className="text-slate-500 text-base">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link href="/">
            <button className="rounded-md text-white w-[130px] h-[40px] bg-indigo-500 ">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
