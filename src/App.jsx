import { useState, useEffect } from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./header/Header";
import Accueil from "./accueil/Accueil";

const routes = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "",
    element: <p>Bienvenue!</p>,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={routes} />
      <div>Footer</div>
    </>
  );
}

export default App;
