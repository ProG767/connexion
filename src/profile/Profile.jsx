import { useState } from "react";
import { useParams } from "react-router-dom";
import POSTS from "../Post";
import Input from "../components/Inputs";
import Button from "../components/Button";
import Category from "./Category";
import { getUserByIdApi } from "../api/server";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { currentUser } = useUser();

  if (!currentUser) {
    return <p>Profil introuvable</p>;
  }

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow-sm">
        <div className="text-center mb-4">
          <img
            src={currentUser.profilePhoto}
            alt={`${currentUser.firstName} ${currentUser.lastname}`}
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />

          <h2>
            {currentUser.firstName} {currentUser.lastname}
          </h2>

          <p className="text-muted">{currentUser.profession}</p>
        </div>

        <p>
          <strong>Email :</strong> {currentUser.email}
        </p>

        <p>
          <strong>Téléphone :</strong> {currentUser.phone}
        </p>

        <p>
          <strong>Âge :</strong> {currentUser.age} ans
        </p>

        <p>
          <strong>Statut :</strong> {currentUser.status}
        </p>

        <p>
          <strong>Salaire :</strong> {currentUser.salaire} €
        </p>
      </div>
    </div>
  );
}
