import { Routes,Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages } from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import { DashboardTasks } from "../pages/DashboardPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<Homepage {...props} />} />

            {/* nested routes, matches on /dash/messages etc */}
            <Route path="dash" element={<DashboardPage {...props} />}>
            <Route path="messages" element={<DashboardMessages />} />
            <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            <Route path='/about' element={<AboutPage {...props} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        )
    }
export default AppRoutes;
