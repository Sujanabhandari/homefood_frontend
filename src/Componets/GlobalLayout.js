import { Outlet } from "react-router-dom";

const GlobalLayout = () => {

  return (
    <div className="container mainContainer">
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
