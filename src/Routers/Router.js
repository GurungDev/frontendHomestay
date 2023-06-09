import { createBrowserRouter } from "react-router-dom";
import HomePageComponent from "../pages/homePage";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contact";
import { HomeIcon } from "@heroicons/react/24/outline";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex items-center h-[60px] bg-red-200">
        <div className="flex items-center">
          <HomeIcon className="h-6"></HomeIcon>
          <span>HomeStay</span>
        </div>
        <div>Center</div>
        <div>
          <button>Login </button>
          <button>Sign up </button>
        </div>
      </div>
    ),
  },
  //   { path: "/about", element: <AboutUs /> },
  //   { path: "/contact", element: <ContactUs /> },
]);

export default Router;
