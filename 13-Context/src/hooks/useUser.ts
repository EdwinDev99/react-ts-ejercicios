import userContext from "../contexts/userContext";

export default function useUser() {
  return useContext(userContext);
}
