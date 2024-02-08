import App from "../App";
import About from "../components/About";
import BlogPage from "../pages/Blogpage/BlogPage";
import Classes from "../pages/Classes/Classes";
import ContactPage from "../pages/Contact/ContactPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import GalleryPage1 from "../pages/Gallery/GalleryPage1";
import GalleryPage2 from "../pages/Gallery/GalleryPage2";
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
        element: <About />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
        children: [
          {
            index: true,
            element: <GalleryPage1 />,
          },
          {
            path: "/gallery/page-1",
            element: <GalleryPage1 />,
          },
          {
            path: "/gallery/page-2",
            element: <GalleryPage2 />,
          },
        ],
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
