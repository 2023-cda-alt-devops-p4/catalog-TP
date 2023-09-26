import React from "react";
import DiagrammeDeClasses from "./DiagrammeDeClasses";
import DiagrammeDesComposants from "./DiagrammeDesComposants";
import DiagrammeDeDeploiement from "./DiagrammeDeDeploiement";
import DiagrammeDObjets from "./DigrammeDObjets";
import DiagrammeDePaquetage from "./DiagrammeDePaquetage";
import DiagrammeDActivite from "./DiagrammeDActivite";
import DiagrammeDeCasDUtilisation from "./DiagrammeDeCasDUtilisation";
import DiagrammeDeCommunication from "./DiagrammeDeCommunication";
import DiagrammeDePresentationDesInteractions from "./DiagrammeDePresentationDesInterations";
import DiagrammeDeProfil from "./DiagrammeDeProfil";
import DiagrammeDeSequence from "./DiagrammeDeSequence";
import DiagrammeDeStructureComposite from "./DiagrammeDeStructureComposite";
import DiagrammeDEtat from "./DiagrammeDEtat";
import DiagrammeDeTemps from "./DiagrammeDeTemps";

const DiagrammeStructurels = () => {
  return (
    <div>
      <section className="diagrammeMerise">
        <div>
          <h1 className="titreUML">UML</h1>
          <p>
            Pour commencer UML (Unified Modeling Language) est une collection de diagrammes utilisée pour visualiser les
            logiciels.
          </p>
          <p>
            Il existe deux catégories principales de diagrammes UML, les diagrammes de structure qui montrent les
            différents objets trouvés dans un système. Alors que les diagrammes comportementaux concentrent sur la façon
            dont les objets du système interagissent les uns avec les autres. Pour en savoir plus sur les types de
            diagrammes UML, veuillez consulter le reste du contenu ci-dessous.
          </p>
        </div>
      </section>
      <div>
        <DiagrammeDeClasses />
        <DiagrammeDesComposants />
        <DiagrammeDeDeploiement />
        <DiagrammeDObjets />
        <DiagrammeDePaquetage />
        <DiagrammeDActivite />
        <DiagrammeDeCasDUtilisation />
        <DiagrammeDeCommunication />
        <DiagrammeDeDeploiement />
        <DiagrammeDePaquetage />
        <DiagrammeDePresentationDesInteractions />
        <DiagrammeDeProfil />
        <DiagrammeDeSequence />
        <DiagrammeDeStructureComposite />
        <DiagrammeDEtat />
        <DiagrammeDeTemps />
      </div>
    </div>
  );
};

export default DiagrammeStructurels;
