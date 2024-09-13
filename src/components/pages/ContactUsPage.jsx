import ContactUs from "@/pages/contact-us";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function ContactUsPage() {
  return (
    <main className="">
      <div className="w-full h-full m-auto flex items-center">
        <div className="container flex flex-col max-w-[643px] w-auto h-auto m-auto pt-[100px]">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col gap-5">
              <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
                Contact Us
              </p>
              <p className="text-slate-500 font-sans not-italic ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex gap-[50px]">
              <div className="border border-slate-300 rounded-xl p-4 w-full h-full">
                <p className="font-semibold font-sans not-italic text-xl">
                  Adress
                </p>
                <p className="text-slate-500">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
              <div className="border border-slate-300 rounded-xl p-4 w-full h-full">
                <p className="font-semibold font-sans not-italic text-xl">
                  Contact
                </p>
                <p className="text-slate-500">313-332-8662 info@email.com</p>
              </div>
            </div>

            <div className="bg-slate-100 w-full h-full p-4 flex flex-col gap-4">
              <p className="font-sans not-italic text-base font-semibold">
                Leave a Message
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  className=" w-full h-9 bg-white rounded-[5px] flex justify-center items-center border border-slate-200 pl-2"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className=" w-full h-9 bg-white rounded-[5px] flex justify-center items-center border border-slate-200 pl-2"
                  placeholder="Your email"
                />
              </div>
              <input
                type="text"
                className=" w-full h-9 bg-white rounded-[5px] flex justify-center items-center border border-slate-200 pl-2"
                placeholder="Subject"
              />
              <textarea
                type="text"
                className="  w-full h-[130px] bg-white rounded-[5px] flex justify-center items-center border border-slate-200 pl-2"
                placeholder="Write a message"
              />

              <button className="bg-blue-500 text-white h-[40px] w-[130px] rounded-md text-sm">
                Send a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
