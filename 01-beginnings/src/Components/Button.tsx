import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading: boolean;
};

function Button({ children, onClick, loading }: Props) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      type="button"
      className={`btn btn-${!loading ? "primary" : "secondary"}`}
    >
      {loading ? "continue..." : children}
    </button>
  );
}

export default Button;
