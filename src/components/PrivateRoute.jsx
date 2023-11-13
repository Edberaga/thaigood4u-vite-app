import { Outlet, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import checkAuth from "../hooks/checkAuth";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = checkAuth();
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}