import { useState } from "react";
import Input from "../components/Inputs";
import Button from "../components/Button";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const envoyer = () => {
    alert(`email: ${email} | password: ${password}`);
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
        <Input label="email" value={email} onChange={setEmail} />
        <Input label="password" value={password} onChange={setPassword} />
        <Button label="Envoyer" onClick={envoyer} />
      </div>
    </div>
  );
}

export default App;
