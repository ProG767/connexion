import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useState } from "react";

function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

const DEFAULT_FRUITS = ["pomme", "poire", "pêche", "abricot"];

function App() {
  const [search, setSearch] = useState("");

  const [value, setValue] = useState("");
  const [list, setList] = useState(DEFAULT_FRUITS);
  const [order, setOrder] = useState("asc");

  const onAdd = () => {
    if (value.trim() != "") {
      const newList = [...list, value];
      setList(newList);
      setValue("");
    }
  };

  const onSort = () => {
    const copie =
      order === "asc"
        ? [...list].sort((a, b) => a.localeCompare(b))
        : [...list].sort((a, b) => b.localeCompare(a));
    setList(copie);

    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
  };

  const onDelete = (fruit) => {
    const updatedList = list.filter((s) => s !== fruit);
    setList(updatedList);
  };

  const onClear = () => {
    setSearch("");
  };

  const found = list.find((f) => f.toLowerCase().includes(value.toLowerCase()));

  const filteredElements = list.filter((element) => {
    return element.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Input label="Recherce" value={search} onChange={setSearch} />{" "}
      <button onClick={onClear}>X</button>
      <Input label="Mon champ " value={value} onChange={setValue} />
      <div style={{ display: "flex", gap: "10px", paddingTop: 12 }}>
        <Button label="ajouter" onClick={onAdd} />
        <Button label="sort" onClick={onSort} />
      </div>
      <br />
      {value === "" ? (
        filteredElements.map((fruit) => (
          <p key={fruit}>
            {fruit} <Button label="sup" onClick={() => onDelete(fruit)} />
          </p>
        ))
      ) : found ? (
        <p>
          {found} <Button label="sup" onClick={onDelete} />
        </p>
      ) : (
        <p>aucune info affiché</p>
      )}
    </div>
  );
}

export default App;
