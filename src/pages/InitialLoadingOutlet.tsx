
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";


const InitialLoadingOutlet = () => {
    const { user } = useAuth();
    const location = useLocation();

    if (user === null) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
};

export default InitialLoadingOutlet;