import LatestHeader from "../../components/LatestHeader/LatestHeader";
import Header from "../shared/Header/Header";
import LeftNav from "../shared/LeftNav/LeftNav";
import Navbar from "../shared/Navbar/Navbar";
import RightNav from "../shared/RightNav/RightNav";

const Home = () => {
    return (
        <div>
            <Header/>
            <LatestHeader/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="border">
                    <LeftNav/>
                </div>
                <div className="border col-span-2">
                    coming soon..............
                </div>
                <div className="border">
                    <RightNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;