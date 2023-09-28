import React from "react";

const DiagrammeDeDeploiement = () => {
  return (
    <div>
      <h3>Diagramme de Deploiement</h3>
      <p>
        Le prochain exemple UML est le diagramme de déploiement. Ce type de diagramme montre la disposition physique des
        artefacts sur les nœuds. Les diagrammes de déploiement sont considérés comme pertinents dans le cas où votre
        solution logicielle est distribuée sur différentes machines, chacune ayant une configuration distincte.{" "}
      </p>
      <p>
        Imaginons que vous construisez une maison. Le diagramme de déploiement serait comme un plan qui vous montre où
        sont situées les différentes pièces de la maison et comment elles sont connectées aux systèmes tels que
        l'électricité et la plomberie. <br />
        Dans un système informatique, le diagramme de déploiement montre :{" "}
        <li>
          - Les ordinateurs ou les serveurs (nœuds) : Ce sont comme les pièces de la maison. Chaque ordinateur ou
          serveur est représenté par une boîte ou un rectangle sur le diagramme.
        </li>
        <li>
          - Les logiciels ou les applications (composants) : Ce sont les programmes informatiques qui s'exécutent sur
          les ordinateurs. Ils sont représentés par des rectangles avec leur nom.
        </li>
        <li>
          - Les connexions entre les ordinateurs (liaisons) : Cela montre comment les ordinateurs communiquent entre
          eux, comme des câbles ou des réseaux Wi-Fi.
        </li>
        <li>
          - Les données ou les fichiers (artéfacts) : Ce sont les informations stockées ou échangées par les logiciels.
          Ils sont souvent représentés par des icônes comme des disques durs.
        </li>
        Ensemble, le diagramme de déploiement aide à comprendre comment tous ces éléments fonctionnent ensemble dans un
        système informatique. C'est utile pour les concepteurs et les développeurs qui planifient et mettent en place
        des systèmes pour s'assurer que tout fonctionne correctement, comme dans une maison où il faut s'assurer que
        l'électricité, la plomberie et les différentes pièces sont bien connectées.
      </p>
      <img src="diagramme_deploiemeny.png" alt="" />
    </div>
  );
};

export default DiagrammeDeDeploiement;
