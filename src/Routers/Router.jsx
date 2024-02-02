import App from "../App";
import AboutUs from "../pages/About/AboutUs";
import BlogPage from "../pages/Blog/BlogPage";
import Classes from "../pages/Classes/Classes";
import ContactPage from "../pages/Contact/ContactPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import HomePage from "../pages/Home/HomePage";
import PicingPage from "../pages/Picing/PicingPage";
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
    ],
  },
];

export default Router;
