import { useState } from "react";
import logo from "./assets/logo.png";

function Input({ label, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Button({ label, onClick }) {
  return (
    <button className="btn btn-primary w-100" onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const envoyer = () => {
    alert(`email: ${email} | password: ${password}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-25 text-center">
        <img src={logo} alt="logo" className="mb-4" style={{ width: "100px" }} />
        <Input label="email" value={email} onChange={setEmail} />
        <Input label="password" value={password} onChange={setPassword} />
        <Button label="Envoyer" onClick={envoyer} />
      </div>
    </div>
  );
}  
export default App;