import React from "react";

const MeriseFluxConceptuels = () => {
  return (
    <div>
      <h3>Diagramme de Flux de Données Niveau Conceptuel</h3>
      <p>
        Le Diagramme de Flux de Données Niveau Conceptuel (DFD-N) est un type de diagramme utilisé pour représenter la
        manière dont les données circulent dans un système d'information, en se concentrant sur un niveau élevé de
        conceptualisation. Le DFD-N permet de modéliser les flux de données, les entités externes, les processus et les
        relations entre eux à un niveau global, sans entrer dans les détails techniques. Voici une explication plus
        détaillée des éléments clés d'un Diagramme de Flux de Données Niveau Conceptuel (DFD-N) :
        <li>
          Flux de Données : Les flux de données représentent la manière dont les données circulent entre les différents
          éléments du système, tels que les entités externes, les processus et les bases de données. Les flux de données
          sont généralement représentés par des flèches qui indiquent la direction du mouvement des données. Chaque flux
          de données est identifié par un nom significatif, par exemple, "Commande", "Facture", "Client", etc.
        </li>
        <li>
          Entités Externes : Les entités externes sont des acteurs ou des systèmes externes au système en cours de
          modélisation, mais qui interagissent avec lui en fournissant ou en recevant des données. Les entités externes
          sont représentées par des formes géométriques telles que des rectangles et sont étiquetées pour indiquer leur
          rôle, par exemple, "Client", "Fournisseur", "Système de paiement", etc.
        </li>
        <li>
          Processus : Les processus représentent les étapes ou les opérations qui sont effectuées sur les données à
          l'intérieur du système. Chaque processus est identifié par un numéro ou un nom significatif et est
          généralement représenté par un cercle ou un ovale. Les processus sont responsables de la transformation des
          données, de leur traitement ou de leur validation.
        </li>
        <li>
          Relations : Les relations entre les entités externes, les processus et les flux de données indiquent comment
          ils sont connectés les uns aux autres. Les relations sont généralement illustrées par des lignes qui relient
          ces éléments. Elles montrent comment les données sont échangées entre les acteurs, les processus et les bases
          de données.
        </li>
        <li>
          Bases de Données : Les bases de données, bien qu'elles soient moins détaillées dans un DFD-N, peuvent être
          incluses pour montrer où les données sont stockées de manière persistante. Elles sont généralement
          représentées par des rectangles à coins arrondis. Chaque base de données peut avoir des flux de données
          entrants et sortants qui indiquent comment les données sont lues ou écrites.
        </li>
        <li>
          Contrôles et Mécanismes : Bien que les détails de mise en œuvre ne soient pas inclus dans un DFD-N, vous
          pouvez indiquer de manière conceptuelle des contrôles, des règles de validation ou des mécanismes de sécurité
          qui s'appliquent aux flux de données ou aux processus.
        </li>
        Le DFD-N est utilisé pour capturer une vue globale et simplifiée du système d'information, en montrant comment
        les données circulent entre les entités, les processus et les bases de données. Il est utile pour la
        communication et la compréhension des processus métier au niveau conceptuel, sans entrer dans les détails
        techniques de mise en œuvre. Le DFD-N sert souvent de point de départ pour le développement de modèles plus
        détaillés, tels que les DFD de niveau organisationnel et physique, qui décomposent davantage le système en
        sous-processus et en détails techniques.
      </p>

      <img src="Data_Flow_Diagram_Example.jpg" alt="Merise" />
    </div>
  );
};

export default MeriseFluxConceptuels;
