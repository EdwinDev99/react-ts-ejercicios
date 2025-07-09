import type { ReactNode } from "react";

type Props = {
  title: string;
  text: string;
  children: ReactNode;
};

function Card({ title, text, children }: Props) {
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>

        {children}
      </div>
    </div>
  );
}

export default Card;
