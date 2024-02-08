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
import Friday from "../pages/Schedule/Friday";
import Monday from "../pages/Schedule/Monday";
import Saturday from "../pages/Schedule/Saturday";
import SchedulePages from "../pages/Schedule/SchedulePages";
import Sunday from "../pages/Schedule/Sunday";
import Thursday from "../pages/Schedule/Thursday";
import Tuesday from "../pages/Schedule/Tuesday";
import Wednesday from "../pages/Schedule/Wednesday";

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
        children: [
          {
            index: true,
            element: <Monday />,
          },
          {
            path: "/schedule/tuesday",
            element: <Tuesday />,
          },
          {
            path: "/schedule/wednesday",
            element: <Wednesday />,
          },
          {
            path: "/schedule/thursday",
            element: <Thursday />,
          },
          {
            path: "/schedule/sunday",
            element: <Sunday />,
          },
          {
            path: "/schedule/friday",
            element: <Friday />,
          },
          {
            path: "/schedule/saturday",
            element: <Saturday />,
          },
        ],
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
