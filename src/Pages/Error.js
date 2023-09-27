import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Oups, la page que vous demandez n'existe pas</h1>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </>
  );
};

export default Error;
