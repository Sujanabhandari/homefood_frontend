import { Outlet } from "react-router-dom";

const GlobalLayout = () => {

  return (
    <main className="d-flex flex-column min-vh-100">
      <Outlet />
    </main>
  );
};

export default GlobalLayout;
