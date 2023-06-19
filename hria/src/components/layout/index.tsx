import { Outlet } from "react-router-dom";
import FooterComponent from "../FooterComponent";
import { NavigationComponent } from "./Navigation";
import { TopbarComponent } from "./Topbar";

const LayoutComponent = () => {
    return (
        <div className="container-fluid">
            <TopbarComponent />
            <div className="mt-4">
                <NavigationComponent />
            </div>

            <div className="my-3">
                <Outlet />
            </div>

            <nav className="navbar">
                <FooterComponent />
            </nav>
        </div>
    );
};

export default LayoutComponent;
