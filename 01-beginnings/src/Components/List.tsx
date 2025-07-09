import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleclick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {data.map((elemento, i) => (
          <li
            onClick={() => handleclick(i, elemento)}
            key={elemento}
            className={`list-group-item ${index === i ? "active" : ""}`}
          >
            {elemento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
