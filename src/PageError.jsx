
import { useRouteError } from "react-router-dom";

export default function PageError() {
  const error = useRouteError();

  return (
    <div>
      <h2>Quelque chose s'est mal passé</h2>
      <p>{error?.message || "Erreur inconnue"}</p>
      <a href="/accueil">Retour à l'accueil</a>
    </div>
  );
}