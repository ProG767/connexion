function Button({ label, onClick, color = "primary" }) {
  return (
    <button className={`btn btn-${color} w-100`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
