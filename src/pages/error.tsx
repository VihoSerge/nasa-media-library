import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2" id="error-page">
      <h1 className="text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
