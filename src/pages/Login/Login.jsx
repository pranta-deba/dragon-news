import { NavLink } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
  return (
    <div className="bg-[#F3F3F3] pb-28">
      <div className="max-w-[1500px] w-[90%] mx-auto py-5">
        <Navbar />
        <div>
          <div className="border max-w-[652px] mx-auto p-6 md:p-14 bg-white space-y-6">
            <h1 className="text-4xl font-semibold text-center">Login your account</h1>
            <hr />
            <form> 
                <p className="text-xl font-semibold mb-2">Email address</p>
                <input type="email" placeholder="Enter your email address" className="w-full bg-[#F3F3F3] p-4 text-[#9F9F9F] font-normal"/>
                <p className="text-xl font-semibold mb-2">Password</p>
                <input type="email" placeholder="Enter your password" className="w-full bg-[#F3F3F3] p-4 text-[#9F9F9F] font-normal"/>
                <button className="w-full my-4 bg-[#403F3F] hover:text-black text-xl font-semibold text-white btn">Login</button>
            </form>
            <p className="text-center">Dont Have An Account ? <NavLink to="/register" className="text-[#FF8C47] font-semibold">Register</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
