import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = false; // TODO: auth 연동

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}