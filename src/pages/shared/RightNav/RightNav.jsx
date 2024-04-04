import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg1 from "../../../assets/bg1.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const RightNav = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="space-y-4">
      {!user&&<div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Login With</h1>
        <a className="px-5 py-2.5 relative rounded group overflow-hidden bg-purple-50 text-primary inline-block text-center border-2 border-primary text-lg font-medium cursor-pointer">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white flex justify-center items-center gap-1">
            <FaGoogle />
            Login with Google
          </span>
        </a>
        <a className="px-5 py-2.5 relative rounded group overflow-hidden bg-purple-50 text-black inline-block text-center border-2 border-black text-lg font-medium cursor-pointer">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white flex justify-center items-center gap-1">
            <FaGithub />
            Login with Github
          </span>
        </a>
      </div>}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-3">Find Us On</h1>
        <button className="text-[#706F6F] font-medium flex items-center gap-2 border p-4 rounded-t-xl">
          <FaFacebook className="text-primary text-3xl" />
          Facebook
        </button>
        <button className="text-[#706F6F] font-medium flex items-center gap-2 border p-4">
          <FaTwitter className="text-blue-500 text-3xl" />
          Twitter
        </button>
        <button className="text-[#706F6F] font-medium flex items-center gap-2 border rounded-b-xl p-4">
          <FaInstagram className="text-red-500 text-3xl" />
          Instagram
        </button>
      </div>
      <div className="flex flex-col p-3 bg-[#F3F3F3]">
        <h1 className="text-2xl font-bold mb-3">Q-Zone</h1>
        <div>
          <figure className="flex justify-center w-full">
            <img src={qZone1} alt="" className="w-full" />
          </figure>
          <figure className="flex justify-center w-full">
            <img src={qZone2} alt="" className="w-full" />
          </figure>
          <figure className="flex justify-center w-full">
            <img src={qZone3} alt="" className="w-full" />
          </figure>
        </div>
      </div>
      <div
        className="relative text-white text-center bg-cover bg-no-repeat bg-center py-16 px-8"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-gradient-to-b from-transparent to-black absolute inset-0" />
        <div className="relative z-10 space-y-8">
          <h1 className="text-4xl font-bold">Create an Amazing Newspaper</h1>
          <p className="text-base font-normal">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="text-xl font-semibold bg-[#D72050] p-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
