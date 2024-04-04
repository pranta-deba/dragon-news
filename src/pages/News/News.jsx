import { NavLink, useLoaderData, useParams } from "react-router-dom";
import LatestHeader from "../../components/LatestHeader/LatestHeader";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightNav from "../shared/RightNav/RightNav";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const News = () => {
  const newsData = useLoaderData();
  const { id } = useParams();

  const [news, setNews] = useState({});
  useEffect(() => {
    const findNews = newsData.find((i) => i._id == id);
    setNews(findNews);
  }, [newsData, id]);
  console.log(news);
  return (
    <div>
      <Header />
      <LatestHeader />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <h4 className="text-xl font-semibold mb-4">Dragon News</h4>
          <div className="space-y-7">
            <div className="flex flex-col space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 p-6">
              <div className="space-y-5">
                <img
                  src={news.thumbnail_url}
                  alt=""
                  className="w-full mb-4  dark:bg-gray-500"
                />
                <h2 className="mb-1 text-xl font-semibold">{news.title}</h2>
                <p className="text-sm dark:text-gray-600">
                  {news.details}
                </p>
                <p className="flex items-center gap-2"><NavLink className="bg-[#D72050] font-semibold cursor-pointer mt-6 flex items-center gap-2 py-4 px-8 text-white">
                <FaArrowLeftLong /> All news in this category
                </NavLink></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default News;
