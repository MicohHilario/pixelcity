import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

//components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/quote",
        element: <Quotation />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app bg-[url('./assets/picture/bgApp.jpg')] bg-cover  overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
