import { MouseEventHandler } from "react";

interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  className?: unknown;
  style?: Object;
}

function Button({
  label,
  onClick,
  color = "primary",
  className = "",
  style = {},

  ...props
}: Props) {
  return (
    <button
      test-id="button-test"
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
