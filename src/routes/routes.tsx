import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import RouteNoteFoundError from "../pages/routeErrors/RouteNoteFoundError";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Dashboard />,
                errorElement: <RouteNoteFoundError />
            },
        ]
    },
]);

export default router