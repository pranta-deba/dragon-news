import { NavLink } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMgs, setErrorMgs] = useState({});

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    if (name === "") {
      setErrorMgs({
        mgs: "Name cannot be empty!",
        name: true,
        email: false,
        photo: false,
        pass: false,
      });
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMgs({
        mgs: "Invalid email",
        name: false,
        email: true,
        photo: false,
        pass: false,
      });
      return;
    } else if (photoUrl === "") {
      setErrorMgs({
        mgs: "Photo URL cannot be empty!",
        name: false,
        email: false,
        photo: true,
        pass: false,
      });
      return;
    } else if (password.length < 6) {
      setErrorMgs({
        mgs: "Password minimum 6 characters!",
        name: false,
        email: false,
        photo: false,
        pass: true,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMgs({
        mgs: "Password at least one uppercase letter!",
        name: false,
        email: false,
        photo: false,
        pass: true,
      });
      return;
    }
    createUser(email, password)
      .then(() => {
        e.target.reset();
        setErrorMgs({});
      })
      .then(() => {
        console.log("server error!");
      });
  };

  return (
    <div className="bg-[#F3F3F3]">
      <div className="max-w-[1500px] w-[90%] mx-auto py-5">
        <Navbar />
        <div>
          <div className="border max-w-[652px] mx-auto p-6 md:p-14 bg-white space-y-6">
            <h1 className="text-4xl font-semibold text-center">
              Register your account
            </h1>
            <hr />
            <form onSubmit={(e) => handleSubmitFrom(e)}>
              <p className="text-xl font-semibold mb-2 flex items-center gap-4">
                Name{" "}
                <span className="text-sm text-red-600 font-bold">
                  {errorMgs.name ? errorMgs.mgs : ""}
                </span>
              </p>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-[#F3F3F3] p-4 text-[#9F9F9F] font-normal"
              />
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
                Photo URL{" "}
                <span className="text-sm text-red-600 font-bold">
                  {errorMgs.photo ? errorMgs.mgs : ""}
                </span>
              </p>

              <input
                type="text"
                name="photoUrl"
                placeholder="Enter your photo URL"
                className="w-full bg-[#F3F3F3] p-4 text-[#9F9F9F] font-normal"
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
              <div className="flex items-center gap-2 my-5">
                <input
                  type="checkbox"
                  name="check"
                  className="checkbox checkbox-lg"
                  required
                />
                <label className="text-base font-semibold">
                  Accept Term & Conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#403F3F] hover:text-black text-xl font-semibold text-white btn"
              >
                Register
              </button>
            </form>
            <p className="text-center">
              Already Account ?{" "}
              <NavLink to="/login" className="text-[#FF8C47] font-semibold">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
