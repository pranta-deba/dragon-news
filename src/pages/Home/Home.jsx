import LatestHeader from "../../components/LatestHeader/LatestHeader";
import NewsCard from "../../components/NewsCard/NewsCard";
import Header from "../shared/Header/Header";
import LeftNav from "../shared/LeftNav/LeftNav";
import Navbar from "../shared/Navbar/Navbar";
import RightNav from "../shared/RightNav/RightNav";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const newsData = useLoaderData();
  return (
    <div>
      <Header />
      <LatestHeader />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftNav />
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-4">Dragon News Home</h4>
          <div className="space-y-7">
            {
                newsData.map((item,id) => <NewsCard key={id} item={item}/>)
            }
          </div>
        </div>
        <div>
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
