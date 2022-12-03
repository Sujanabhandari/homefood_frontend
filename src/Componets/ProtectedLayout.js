import { Navigate } from "react-router-dom";

const ProtectedLayout = ({ isAuthenticated, children }) => {
  if (isAuthenticated || localStorage.getItem('token')) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectedLayout;
