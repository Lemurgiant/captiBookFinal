import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthApi from "../hooks/queries/useAuthApi";
import PrimarySpinner from "../components/PrimarySpinner";

const ProtectedRoutes = ({ needAuth }: { needAuth: boolean }) => {
  const { isAuthenticated, authLoading } = useAuthApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated && needAuth) {
      navigate("/signup", { replace: true });
    } else if (isAuthenticated && !needAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, needAuth, authLoading, navigate]);

  if (authLoading) {
    return <PrimarySpinner size="8rem" />;
  }

  return isAuthenticated === needAuth ? <Outlet /> : null;
};

export default ProtectedRoutes;
