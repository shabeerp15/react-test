import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "hooks/userContext";

export function hasJWT() {
  let flag = false;
  //check user has JWT token
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
  if (token) flag = true;
  return flag;
}

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  return (
    hasJWT(state) ? children : <Navigate to="/authentication/sign-in" />
  );
};

export default PrivateRoute;