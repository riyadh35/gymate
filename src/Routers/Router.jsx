import App from "../App";
import AboutUs from "../pages/About/AboutUs";
import BlogPage from "../pages/Blogpage/BlogPage";
import Classes from "../pages/Classes/Classes";
import ContactPage from "../pages/Contact/ContactPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import HomePage from "../pages/Home/HomePage";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import PicingPage from "../pages/PicingPage/PicingPage";
import SchedulePages from "../pages/Schedule/SchedulePages";

const Router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "schedule",
        element: <SchedulePages />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "picing",
        element: <PicingPage />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
];

export default Router;
