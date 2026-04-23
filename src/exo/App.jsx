import { useEffect, useState } from "react";
import "./App.css";

function Button({ label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

function Checkbox({ onChange }) {
  return <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />;
}

function generateUser() {
  return Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    nom: ["toot", "mimi", "nino", "mimi", "nono"][i],
    score: 0,
  }));
}

function App() {
  const [compte, setCompte] = useState(0);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [list, setList] = useState(generateUser());

  const onIncrement = () => {
    setCompte(compte + 1);
  };

  const onInitialized = () => {
    setList(list.map((j) => ({ ...j, score: 0 })));
  };

  const onRandom = () => {
    const newUsers = list.map((j) => ({
      ...j,
      score: j.score + Math.floor(Math.random() * 33),
    }));
    setList(newUsers);
  };

  const sup = (id) => {
    setList(list.filter((j) => j.id !== id));
  };

  const onOrdoner = () => {
    const copie = [...list];
    copie.sort((a, b) => a.score - b.score);
    setList(copie);
  };

  useEffect(() => {
    localStorage.setItem("joueur", JSON.stringify(list));
    setMessage("✅sauvegardé" + JSON.stringify(list));
    setTimeout(() => setMessage(""), 10000);
  }, [list]);

  return (
    <div>
      <div>
        {list.map((j) => (
          <p key={j.id}>
            {j.nom} {j.score}
            <button onClick={() => sup(j.id)}>sup</button>
          </p>
        ))}
      </div>
      <p>{compte}</p>
      <Button label="valider" disabled={!checked} onClick={onIncrement} />
      <Button label="annuler" onClick={onInitialized} />
      <Button label="random" onClick={onRandom} />
      <Button label="croissant" onClick={onOrdoner} />
      {message && <p>{message}</p>}
      <Checkbox onChange={setChecked} />
      <UserC />
    </div>
  );
}


function UserC() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <UserRow users={users} />;
}

function UserRow({ users }) {
  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          {item.name} - {item.email}
        </li>
      ))}
    </ul>
  );
}




export default App;
