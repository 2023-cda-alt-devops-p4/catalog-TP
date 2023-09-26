import React from "react";
import DiagrammeDeClasses from "./DiagrammeDeClasses";

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
      <DiagrammeDeClasses />
    </div>
  );
};

export default DiagrammeStructurels;
