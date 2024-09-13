import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const router = useRouter();
  const id = router.query.id;
  const [article, setArticle] = useState({});

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="pt-[100px] w-full h-full m-auto container max-w-[800px] flex flex-col gap-8 ">
        <div className=" flex flex-col gap-5">
          <h1 className="text-4xl font-semibold"> {article?.title} </h1>
          <div className="flex justify-start gap-6">
            <div className="flex gap-2">
              <div
                style={{
                  backgroundImage: `url(${article.user?.profile_image})`,
                  width: "28px",
                  height: "28px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "28px",
                }}
              ></div>
              <p className="font-sans  not-italic text-slate-600">
                {article.user?.name}
              </p>
            </div>
            <p className="font-sans  not-italic text-slate-600">
              {article?.published_at}
            </p>
          </div>
        </div>
        {/* header  end */}

        <div
          style={{
            backgroundImage: `url(${article?.cover_image})`,
            width: "800px",
            height: "462px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "28px",
          }}
        ></div>
        <div className="font-sans  not-italic text-slate-600">
          {article.description}
        </div>
        <p className="font-sans  not-italic text-slate-600 pb-20">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
      </div>
    </div>
  );
};
export default SinglePost;
