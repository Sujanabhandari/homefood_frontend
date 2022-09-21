import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
    
  return (
    <div className="container mt-5">
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
