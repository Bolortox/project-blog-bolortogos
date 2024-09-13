import Link from "next/link";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { HeaderButtons } from "@/components/buttons";
import { HeaderIcon } from "@/components/svg/HeaderIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import { BurgerIcon } from "@/components/svg/BurgerIcon";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [articlesForSearch, setArticlesForSearch] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const resultRef = useRef(null);
  const path = usePathname();
  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };
  useEffect(() => {
    setSearchQuery("");
    fetchSearchData();
  }, []);
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = articlesForSearch.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(results.length > 0);
  }, [searchQuery, articlesForSearch]);

  useEffect(() => {
    setShowResults(false);
    setSearchQuery("");
  }, [path]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!resultRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full h-auto justify-center">
      <div className="container flex justify-between max-w-[1216px] px-12 fixed z-[1] py-[32px] bg-white">
        <div>
          <Link href="/">
            <HeaderIcon />
          </Link>
        </div>
        {/* Heading icon from the left side ended */}
        <div className="hidden md:flex md:items-center gap-10 text-slate-600 ">
          <Link href="/" className="hover:text-blue-500 ">
            <HeaderButtons text={"Home "} />
          </Link>

          <Link href="/blog-list" className="hover:text-blue-500">
            <HeaderButtons text={"Blog "} />
          </Link>
          <Link href="/contact-us" className="hover:text-blue-500">
            <HeaderButtons text={"Contact "} />
          </Link>
        </div>
        {/* Links are connected to these buttons in the middle to page  */}

        <div
          ref={resultRef}
          className="hidden md:flex flex-col w-[200px] h-[40px]  rounded-[5px] p-2 bg-slate-100 "
        >
          <div className="flex">
            <input
              value={searchQuery}
              type="input"
              className=" bg-slate-100  flex justify-center items-center "
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="flex flex-col gap-[10px] pt-3">
            {showResults &&
              searchResults?.map((article) => {
                return (
                  <Link key={article.id} href={`/blog-list/${article?.id}`}>
                    <div
                      className="bg-slate-100 rounded-[10px] p-2 hover:bg-slate-300"
                      key={article.id}
                    >
                      {article.title}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <button className="md:hidden ">
          <BurgerIcon />
        </button>
      </div>
    </div>
  );
};
