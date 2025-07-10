import type { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
};

function Button({ onClick, children }: Props) {
  return (
    <button onClick={onClick} type="button" className={`btn btn-primary`}>
      {children}
    </button>
  );
}

export default Button;
