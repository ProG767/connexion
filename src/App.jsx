import { useState, useEffect } from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";

function App() {
  const pathname = window.location.pathname;
  const isSignUp = pathname.includes("/sign-up");
  const isSignIn = pathname.includes("/sign-in");

  if (isSignUp) {
    return <SignUp />;
  }

  if (isSignIn) {
    return <SignIn />;
  }

  return <SignIn />;
}

export default App;
