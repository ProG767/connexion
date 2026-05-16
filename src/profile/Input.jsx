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
  return (
    <button>
      {" "}
      onClick = {onClick}
      {label}
    </button>
  );
}

function App() {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([
    "pomme",
    "poire",
    "pêche",
    "abricot",
  ]);

  const search = list.filter((s) =>
    s.toLowerCase().includes(value.toLowerCase()),
  );

  const found = list.find((f) => f.toLowerCase().includes(value.toLowerCase()));
  const add = () => {
    setList([...list, value]);
    setValue("");
  };
  const sort = () => {
    const copie = [...list];
    copie.sort((a, b) => a.localeCompare(b));
    setList(copie);
  };
  const sup = () => {
    setList(list.filter((s) => s === s));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Input label="Mon champ " value={value} onChange={setValue} />
      <div style={{ display: "flex", gap: "10px", paddingTop: 12 }}>
        <Button label="ajouter" onClick={add} />
        <Button label="sort" onClick={sort} />
      </div>
      {/*search.map((l) => (
    <p key={l}>{l}</p>
    ))*/}
      {value === "" ? (
        list.map((f) => (
          <p key={f}>
            {f} <Button label="sup" onClick={sup} />{" "}
          </p>
        ))
      ) : found ? (
        <p>
          {found} <Button label="sup" onClick={sup} />
        </p>
      ) : (
        <p>aucune info affiché</p>
      )}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("react-app"));
root.render(<App />);
