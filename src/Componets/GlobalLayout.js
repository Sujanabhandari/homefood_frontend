import { Outlet } from "react-router-dom";

const GlobalLayout = () => {

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default GlobalLayout;
