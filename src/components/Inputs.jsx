function Input({ label, value, onChange, type = "text" , placeholder}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder = {placeholder}
      />
    </div>
  );
}

export default Input;
