import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[1500px] w-[90%] mx-auto py-5">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
