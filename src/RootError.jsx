import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function RootError() {
  const error = useRouteError(); // ← hook qui récupère l'erreur

  // Erreur HTTP (404, 500...) 
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status} — {error.statusText}</h1>
        <p>{error.data}</p>
      </div>
    );
  }

  // Erreur JS classique
  if (error instanceof Error) {
    return (
      <div>
        <h1>Erreur</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return <h1>Erreur inconnue</h1>;
}