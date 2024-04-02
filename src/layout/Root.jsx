import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
