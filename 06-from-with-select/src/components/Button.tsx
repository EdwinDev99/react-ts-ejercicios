import type { ReactNode } from "react";

type buttontype = "button" | "submit";

type Props = {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: buttontype;
};

function Button({ children, onClick, type = "submit" }: Props) {
  return (
    <button onClick={onClick} type={type} className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
