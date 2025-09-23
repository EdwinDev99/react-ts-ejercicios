import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type Props = {};

function ErrorDetail({}: Props) {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error)
        ? "la pagina no existe"
        : `ha ocurrido un errror${(error as Error).message}`}
    </div>
  );
}

export default ErrorDetail;
