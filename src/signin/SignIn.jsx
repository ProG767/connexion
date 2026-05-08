import { useState } from "react";
import Input from "../components/Inputs";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";

function SignIn() {
  const { username, pwd } = useParams();

  const [email, setEmail] = useState(username);
  const [password, setPassword] = useState(pwd);
  const navigate = useNavigate();

  const envoyer = () => {
    alert(`email: ${email} | password: ${password}`);
    navigate("/profile/"+email);
  };

  const onGoToSignUp = () => {
    navigate("/signup");
  };

  const handleChangeEmail = (newValue) => {
    setEmail(newValue);
   
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
        {username}
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
