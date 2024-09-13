export const SearchDropDown = ({}) => {
  <div className="hidden md:flex flex-col w-[200px] h-[40px]  rounded-[5px] p-2 bg-slate-100 ">
    <div className="flex">
      <input
        value={searchValue}
        type="input"
        className=" bg-slate-100  flex justify-center items-center "
        placeholder="Search"
        onChange={handleInputChange}
      />
      <button>
        <SearchIcon />
      </button>
    </div>
    <div className="flex flex-col gap-[10px] pt-3">
      {searchValue &&
        filteredArticles?.map((article) => {
          return (
            <Link key={article.id} href={`/blog-list/${article?.id}`}>
              <div
                className="bg-red-500 rounded-[10px] p-2 hover:bg-slate-300"
                key={article.id}
              >
                {article.title}
              </div>
            </Link>
          );
        })}
    </div>
  </div>;
};
