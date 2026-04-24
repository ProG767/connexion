import { useState, useEffect } from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";

function App() {
  const url = window.location.href;
  const isSignUp = url.includes("sign-up");

  if (isSignUp) {
    return <SignUp />;
  }

  return <SignIn />;
}

export default App;
