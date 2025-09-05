import useTodosStore from "../todos/store";

type Props = {};

function Header({}: Props) {
  const total = useTodosStore((state) => state.total);
  console.log("header");
  return <div>{total}</div>;
}

export default Header;
