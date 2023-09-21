import React from "react";
import DiagrammeStructurels from "./DiagrammeStructurels/DiagrammeStructurels";
const Main = () => {
  return (
    <div className="main">
      <h1>UML</h1>
      <p>
        Pour commencer UML (Unified Modeling Language) est une collection de diagrammes utilisée pour visualiser les
        logiciels.
      </p>
      <p>
        Il existe deux catégories principales de diagrammes UML, les diagrammes de structure qui montrent les différents
        objets trouvés dans un système. Alors que les diagrammes comportementaux concentrent sur la façon dont les
        objets du système interagissent les uns avec les autres. Pour en savoir plus sur les types de diagrammes UML,
        veuillez consulter le reste du contenu ci-dessous.
      </p>
      <h2 className="sommaire">Sommaire</h2>
      <h2>Diagrammes structurels</h2>
      <ul>
        <li>Diagramme de classes</li>
        <li>Diagramme de composants</li>
        <li>Diagramme de déploiement</li>
        <li>Diagramme de structure composite</li>
        <li>Diagramme d'objets</li>
        <li>Diagramme de paquetages</li>
      </ul>
      <h2>Diagramme de profil</h2>
      <h2>Diagrammes UML comportementaux</h2>
      <ul>
        <li>Diagramme de temps</li>
        <li>Diagramme d'aperçu des interactions</li>
        <li>Diagramme de communication</li>
        <li>Modèle de diagramme états-transitions</li>
        <li>Diagramme de cas d'utilisation</li>
        <li>Diagramme de séquence</li>
        <li>Diagramme d'activités</li>
      </ul>
      <DiagrammeStructurels />
    </div>
  );
};

export default Main;
