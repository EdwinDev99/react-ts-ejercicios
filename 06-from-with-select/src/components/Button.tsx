import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Button({ children }: Props) {
  return (
    <button type="submit" className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
