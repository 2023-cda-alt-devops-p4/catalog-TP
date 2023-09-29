import React from "react";
import MeriseFluxDeDonnees from "./MeriseFluxDeDonnees";
import MeriseEntiteRelation from "./MeriseEntiteRelation";
import MeriseSpecificationDesTraitements from "./MeriseSpecificactionDesTraitements";
import MeriseGestionDesDonnees from "./MeriseGestionDesDonnees";
import MeriseFluxDEvenements from "./MeriseFluxDEvenements";
import MeriseCycleDeVie from "./MeriseCycleDeVie";
import MeriseOrganisationnel from "./MeriseOrganisationnel";

const DiagrammeMerise = () => {
  return (
    <div>
      <div>
        <h1 className="titreUML">MERISE</h1>
        <p className="headCorpus">
          Les diagrammes MERISE font référence à un ensemble de techniques de modélisation de données et de processus
          largement utilisées en ingénierie logicielle et en gestion de projet. Ils sont principalement utilisés pour
          concevoir des systèmes d'information et des bases de données. L'approche MERISE est souvent utilisée en
          conjonction avec la méthode d'analyse MERISE, qui est une méthodologie de développement logiciel. Voici
          quelques-uns des principaux diagrammes MERISE couramment utilisés :
        </p>
        <p className="headCorpus"></p>
      </div>

      <div className="corpus">
        <MeriseFluxDeDonnees />
        <MeriseEntiteRelation />
        <MeriseSpecificationDesTraitements />
        <MeriseGestionDesDonnees />
        <MeriseFluxDEvenements />
        <MeriseCycleDeVie />
        <MeriseOrganisationnel />
      </div>
    </div>
  );
};

export default DiagrammeMerise;
