import HomePageComponent from "./pages/homePage";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contact";
import LoadingPage from "./pages/loadingPage";
import Router from "./Routers/Router";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
