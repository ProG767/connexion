import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Accueil from "./accueil/Accueil";
import Profile from "./profile/Profile"

function Layout() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {

        index: true,
        element: <Accueil />,

      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;