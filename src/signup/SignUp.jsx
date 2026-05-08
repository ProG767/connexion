import { useState, useEffect } from "react";
import Input from "../components/Inputs";
import Select from "../components/Select";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const JOURS = Array.from({ length: 31 }, (_, i) => i + 1);
const MOIS_LISTE = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const ANNEES = Array.from({ length: 100 }, (_, i) => 2024 - i);

function SignUp() {
  const navigate = useNavigate();

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [jour, setJour] = useState("");
  const [mois, setMois] = useState("");
  const [annee, setAnnee] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  // fetch au chargement
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    const newUser = { prenom, nom, jour, mois, annee, email, password };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Créé ! ID : ${data.id}`);
        setPrenom("");
        setNom("");
        setJour("");
        setMois("");
        setAnnee("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  const handeSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-80">
        <h4 className="mb-4 text-center">Créer un compte</h4>

        <div className="d-flex gap-2">
          <Input label="Prénom" value={prenom} onChange={setPrenom} />
          <Input label="Nom" value={nom} onChange={setNom} />
        </div>

        <label className="form-label">Date de naissance</label>
        <div className="d-flex gap-2 mb-3 w-100">
          <Select
            className="flex-fill"
            label="Jour"
            value={jour}
            onChange={setJour}
            options={JOURS}
          />
          <Select
            className="flex-fill"
            label="Mois"
            value={mois}
            onChange={setMois}
            options={MOIS_LISTE}
          />
          <Select
            className="flex-fill"
            label="Année"
            value={annee}
            onChange={setAnnee}
            options={ANNEES}
          />
        </div>

        <Input label="Email" type="email" value={email} onChange={setEmail} />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />

        <Button label="S'inscrire" onClick={handleSubmit} />

        <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
          {users.length} utilisateurs existants chargés
        </p>

        <Button
          label="J'ai déjà un compte"
          color="secondary"
          onClick={handeSignIn}
        />
      </div>
    </div>
  );
}

export default SignUp;
