import App from "../App";
import HomePage from "../pages/Home/HomePage";

const Router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default Router;
