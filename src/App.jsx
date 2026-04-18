import { useEffect, useState } from "react";
import "./App.css";

function Button({ text, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

function Checkbox({ onChange }) {
  return <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />;
}

function App() {
  const [compte, setCompte] = useState(0);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [list, setList] = useState(
    Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      nom: ["toot", "mimi", "nino", "mimi", "nono"][i],
      score: 0,
    })),
  );

  const incrementer = () => {
    setCompte(compte + 1);
  };

  const allzero = () => {
    setList(list.map((j) => ({ ...j, score: 0 })));
  };

  const random = () => {
    setList(
      list.map((j) => ({
        ...j,
        score: j.score + Math.floor(Math.random() * 33),
      })),
    );
  };

  const sup = (id) => {
    setList(list.filter((j) => j.id !== id));
  };

  const ordoner = () => {
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
    <>
      <>
        {list.map((j) => (
          <p key={j.id}>
            {j.nom} {j.score}
            <button onClick={() => sup(j.id)}>sup</button>
          </p>
        ))}
      </>
      <p>{compte}</p>
      <Button text="valider" disabled={!checked} onClick={incrementer} />
      <Button text="annuler" onClick={allzero} />
      <Button text="random" onClick={random} />
      <Button text="croissant" onClick={ordoner} />
      {message && <p>{message}</p>}
      <Checkbox onChange={setChecked} />
    </>
  );
}

export default App;
