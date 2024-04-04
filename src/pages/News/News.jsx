import LatestHeader from "../../components/LatestHeader/LatestHeader";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightNav from "../shared/RightNav/RightNav";

const News = () => {
    return (
        <div>
      <Header />
      <LatestHeader />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <h4 className="text-xl font-semibold mb-4">Dragon News</h4>
          <div className="space-y-7">
            ddd
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