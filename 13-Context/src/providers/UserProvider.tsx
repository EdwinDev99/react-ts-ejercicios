import { useState, type ReactNode } from "react";
import UserContext from "../contexts/userContext";

type Props = {
  children: ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<{ name: string }>({ name: "Chanchito" });

  const toggleLogin = () => {
    setUser({ name: user.name === "Chanchito" ? "anonymous" : "Chanchito" });
  };

  return (
    <UserContext.Provider value={{ user, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}
