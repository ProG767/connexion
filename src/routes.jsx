import { Navigate } from "react-router-dom";
import App from "./App";
import Signin from "./signin/Signin";
import Accueil from "./accueil/Accueil";
import Signup from "./signup/Signup";
import Profile from "./profile/Profile";
import RootError from "./RootError";
import PageError from "./PageError";


const ROUTES =[
  { path: "/", element: <App />, 
    errorElement: <RootError />,
    children: [
  { index: true, element: <Navigate to="/signin" /> },
  { path: "signin", element: <Signin />, errorElement: <PageError /> },
  { path: "accueil", element: <Accueil />, errorElement: <PageError /> },
  { path: "profile/:id", element: <Profile />, errorElement: <PageError />},
  { path: "signup", element: <Signup />, errorElement: <PageError />},
],},
];


export default ROUTES;
