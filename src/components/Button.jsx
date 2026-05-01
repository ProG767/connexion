function Button({ label, onClick, color = "primary", className = "",style = {},

  ...props}) {
  return (
    <button 
    className={`btn btn-${color} w-100 ${className}`}  
    style={style}
    onClick={onClick}
    {...props} 
    >

    {label}
    </button>
  );
}

export default Button;
