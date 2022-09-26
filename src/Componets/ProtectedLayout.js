import { Navigate, Outlet } from "react-router-dom";


const ProtectedLayout = ({ isAuthenticated }) => {
  return (
    <div className="container">
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default ProtectedLayout;
