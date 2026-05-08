import { useState } from "react";
import Input from "../components/Inputs";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

function SignIn() {
  const { username = "", pwd = "" } = useParams();

  const [email, setEmail] = useState(username);
  const [password, setPassword] = useState(pwd);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn } = useUser();

  const envoyer = () => {
    const user = signIn(email);

    if (user) {
      setError("");
      navigate("/profile/" + user.id);
    } else {
      setError("User " + email + " est introuvable!");
    }
  };

  const onGoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-50">
      <div className="w-25 text-center">
        <img
          src="/src/assets/logo.png"
          alt="logo"
          className="mb-4"
          style={{ width: "100px" }}
        />

        <Input label="email" value={email} onChange={setEmail} />
        <Input label="password" value={password} onChange={setPassword} />

        {error && <div className="text-danger">{error}</div>}

        <Button label="Envoyer" onClick={envoyer} />

        <div className="mt-2">
          <Button
            label="Mot de passe oublié"
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
