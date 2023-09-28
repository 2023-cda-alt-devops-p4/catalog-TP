import React from "react";

const DiagrammeDesComposants = () => {
  return (
    <div>
      <h3>Diagramme des Composants</h3>
      <p>
        Le diagramme des composants illustre la manière dont les composants sont combinés pour créer des composants plus
        volumineux. Ces types de diagrammes sont utiles pour travailler sur des systèmes complexes comportant de
        nombreux composants. Les composants se relaient les uns aux autres grâce à l’utilisation d’interfaces, qui sont
        ensuite reliées à l’aide de connecteurs.
      </p>
      <p>
        Imaginez que vous construisez une voiture, et vous voulez utiliser un diagramme de composants pour représenter
        les différentes parties de cette voiture et comment elles interagissent. <br />
        <li>
          - Les Composants : dans ce cas seraient les différentes pièces de la voiture, telles que le moteur, les pneus,
          le système de freinage, le tableau de bord, etc. Chaque composant représente une partie de la voiture et est
          représenté par un rectangle avec son nom.
        </li>
        <li>
          - Interfaces : Les interfaces dans ce contexte seraient les connexions entre les composants. Par exemple, le
          moteur a une interface pour recevoir de l'essence et une interface pour transmettre la puissance aux roues.
          Les interfaces sont représentées par des lignes pointillées qui montrent comment les composants se connectent
          les uns aux autres.
        </li>
        <li>
          - Dépendances : Les dépendances montrent comment certains composants dépendent d'autres pour fonctionner. Par
          exemple, le moteur dépend du réservoir de carburant pour obtenir de l'essence. Les dépendances sont indiquées
          par des flèches qui montrent la direction de la dépendance.
        </li>
        <li>
          - Assemblages : Les assemblages représentent comment les composants sont regroupés pour former des systèmes
          plus grands. Par exemple, les pneus, le système de freinage et les roues sont assemblés pour former le système
          de roues de la voiture. Les assemblages sont généralement représentés par des boîtes ou des contours qui
          entourent plusieurs composants liés.
        </li>
        <li>
          - Annotations : Les annotations permettent d'ajouter des informations supplémentaires. Par exemple, vous
          pourriez ajouter une annotation pour expliquer la spécification du carburant nécessaire pour le moteur ou pour
          indiquer la capacité du réservoir de carburant.{" "}
        </li>
        En résumé, un diagramme de composants UML est un outil de modélisation qui permet de représenter comment les
        différentes parties d'un système, dans cet exemple une voiture, sont organisées, comment elles interagissent,
        comment elles dépendent les unes des autres, comment elles sont assemblées pour former des systèmes plus larges,
        et comment des informations supplémentaires peuvent être ajoutées pour faciliter la compréhension. Cela aide à
        visualiser la structure et les interactions d'un système complexe comme une voiture ou un système logiciel.
      </p>
      <img src="New-Component-Diagram-for-Library-Management-System.png" alt="" />
    </div>
  );
};

export default DiagrammeDesComposants;
