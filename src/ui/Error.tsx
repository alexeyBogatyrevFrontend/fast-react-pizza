import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

type RouteError = {
  data?: string;
  message: string;
  stack: string;
  status: number;
  statusText: string;
};

function Error() {
  const navigate = useNavigate();
  const error: RouteError = useRouteError() as RouteError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
