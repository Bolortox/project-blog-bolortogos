import Link from "next/link";
import { FacebookIcon } from "../svg/FacebookIcon";
import { FooterIcon } from "../svg/FooterIcon";
import { InstaIcon } from "../svg/InstaIcon";
import { LastIcon } from "../svg/LastIcon";
import { TwitterIcon } from "../svg/TwitterIcon";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full h-auto items-center justify-center pt-[64px] bg-slate-50  ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6 w-[30%]">
          <div className="flex flex-col gap-3">
            <p className="text-lg  font-semibold ">About</p>
            <p className=" text-slate-500 font-normal font-sans non-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="text-slate-800">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        {/* first section ended */}
        <div className="text-base flex flex-col gap-2">
          <Link href="/">
            <button className="hover:text-blue-500">Home</button>
          </Link>
          <Link href="/blog-list">
            <button className="hover:text-blue-500">Blog</button>
          </Link>
          <Link href="/contact-us">
            <button className="hover:text-blue-500">Contact</button>
          </Link>
        </div>
        {/* second half ended  */}
        <div className="flex gap-7 w-[30%]">
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://x.com/">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/">
            <InstaIcon />
          </a>
          <a href="https://www.linkedin.com/">
            <LastIcon />
          </a>
        </div>
      </div>
      {/* top half done  */}
      <div className="flex gap-[609px] py-8">
        <Link href="/">
          <FooterIcon />
        </Link>
        <div className="flex text-slate-600 gap-4">
          <p>Terms of Use</p>
          <p className="text-slate-100">|</p>
          <p>Privacy Policy</p>
          <p className="text-slate-100">|</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
