function Button({ label, onClick }) {
  return (
    <button className="btn btn-primary w-100" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
