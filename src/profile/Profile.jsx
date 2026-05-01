import { useState } from "react";

export default function ProfileSettings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const save = () => {
    alert(`Saved: ${name} - ${email}`);
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Profile Settings</h2>

      <input
        className="form-control mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={save}>
        Save
      </button>
    </div>
  );
}