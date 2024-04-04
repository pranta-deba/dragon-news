import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [errorMgs, setErrorMgs] = useState({});
  const navigate = useNavigate();

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMgs({
        mgs: "Invalid email",
        email: true,
        pass: false,
      });
      return;
    } else if (password === "") {
      setErrorMgs({
        mgs: "Invalid password",
        email: false,
        pass: true,
      });
      return;
    }

    signIn(email, password)
      .then(() => {
        e.target.reset();
        setErrorMgs({});
        navigate("/");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#F3F3F3] pb-28">
      <div className="max-w-[1500px] w-[90%] mx-auto py-5">
        <Navbar />
        <div>
          <div className="border max-w-[652px] mx-auto p-6 md:p-14 bg-white space-y-6">
            <h1 className="text-4xl font-semibold text-center">
              Login your account
            </h1>
            <hr />
            <form onSubmit={(e) => handleSubmitFrom(e)}>
              <p className="text-xl font-semibold mb-2 flex items-center gap-4">
                Email address{" "}
                <span className="text-sm text-red-600 font-bold">
                  {errorMgs.email ? errorMgs.mgs : ""}
                </span>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full bg-[#F3F3F3] p-4 text-[#9F9F9F] font-normal"
                required={false}
              />
              <p className="text-xl font-semibold mb-2 flex items-center gap-4">
                Password{" "}
                <span className="text-sm text-red-600 font-bold">
                  {errorMgs.pass ? errorMgs.mgs : ""}
                </span>
              </p>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-[#F3F3F3] p-4 text-[#9F9F9F] font-normal"
              />
              <button className="w-full my-4 bg-[#403F3F] hover:text-black text-xl font-semibold text-white btn">
                Login
              </button>
            </form>
            <p className="text-center">
              Dont Have An Account ?{" "}
              <NavLink to="/register" className="text-[#FF8C47] font-semibold">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
