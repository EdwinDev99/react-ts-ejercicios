import { createContext } from "react";

type userContextType = {
  user: { name: string };
  toggleLogin: () => void;
};

export default createContext<userContextType>({} as userContextType);
