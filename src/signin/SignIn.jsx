import { useState } from "react";
import Input from "../components/Inputs";
import Button from "../components/Button";

function SignIn() {
  const path = window.location.pathname.split("/");
  const username = path[2] ?? "";
  const pass = path[3] ?? "";

  const [email, setEmail] = useState(username);
  const [password, setPassword] = useState(pass);

  const envoyer = () => {
    alert(`email: ${email} | password: ${password}`);
  };

  const onGoToSignUp = () => {
    const newUrl = window.location.origin + "/sign-up";
    window.location.href = newUrl;
  };

  const handleChangeEmail = (newValue) => {
    setEmail(newValue);
    window.location.pathname = "/sign-in/" + newValue;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-25 text-center">
        <img
          src="src/assets/logo.png"
          alt="logo"
          className="mb-4"
          style={{ width: "100px" }}
        />
        <Input label="email" value={email} onChange={handleChangeEmail} />
        <Input label="password" value={password} onChange={setPassword} />
        <Button label="Envoyer" onClick={envoyer} />

        <div className="mt-2">
          <Button
            label="Mot de passe Oublié"
            color="secondary"
            onClick={() => console.log("mot de passe oublié")}
          />
        </div>
        <div className="mt-2">
          <Button label="Créer un compte" onClick={onGoToSignUp} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
