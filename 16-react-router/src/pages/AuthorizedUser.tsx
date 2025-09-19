import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const useUser = () => undefined;

function AuthorizedUser({}: Props) {
  const user = useUser();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default AuthorizedUser;
