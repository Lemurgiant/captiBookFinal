import { useNavigate } from "react-router-dom";
import useAuthApi from "../../hooks/queries/useAuthApi";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const { isAuthenticated } = useAuthApi();
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated === false) {
        navigate("/signup", { replace: true });
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated === true && <WrappedComponent {...props} />;
  };
};

export default withAuth;
