import React from "react";

const MeriseFluxOrganisationnel = () => {
  return (
    <div>
      <h3>Diagramme de Flux de Données Niveau Conceptuel</h3>
      <p>
        Le Diagramme de Flux de Données Niveau Organisationnel (DFD-O) est un type de diagramme utilisé dans la méthode
        MERISE pour modéliser la manière dont les données circulent au sein d'un système d'information à un niveau
        intermédiaire entre le niveau conceptuel (DFD-N) et le niveau physique (DFD-P). Le DFD-O permet de décomposer
        davantage les processus en sous-processus et de représenter plus en détail les opérations et les flux de données
        au sein d'une organisation. Voici une explication plus détaillée des éléments clés d'un Diagramme de Flux de
        Données Niveau Organisationnel (DFD-O) :
        <li>
          - Flux de Données : Les flux de données représentent la manière dont les données circulent entre les
          différents éléments du système, y compris les entités externes, les processus, les bases de données et les
          fichiers. Chaque flux de données est identifié par un nom significatif, par exemple, "Commande", "Facture",
          "Client", etc. Les flux de données sont généralement représentés par des flèches avec une étiquette.
        </li>
        <li>
          - Entités Externes : Les entités externes représentent les acteurs ou les systèmes externes au système en
          cours de modélisation, qui interagissent avec lui en fournissant ou en recevant des données. Les entités
          externes sont généralement représentées par des formes géométriques telles que des rectangles et sont
          étiquetées pour indiquer leur rôle, par exemple, "Client", "Fournisseur", "Système de paiement", etc.
        </li>
        <li>
          - Processus : Les processus représentent les étapes ou les opérations qui sont effectuées sur les données à
          l'intérieur du système. Chaque processus est identifié par un numéro ou un nom significatif et est
          généralement représenté par un cercle ou un ovale. Dans un DFD-O, les processus sont décomposés en
          sous-processus pour représenter plus en détail les étapes du traitement des données.
        </li>
        <li>
          - Sous-Processus : Les sous-processus sont des processus plus détaillés qui décomposent les opérations en
          étapes spécifiques. Ils sont généralement représentés par des rectangles internes aux processus principaux.
          Les sous-processus peuvent également avoir leurs propres flux de données, entrées, sorties et règles de
          traitement.
        </li>
        <li>
          - Relations : Les relations entre les entités externes, les processus, les sous-processus et les flux de
          données montrent comment ils sont connectés les uns aux autres. Les relations sont généralement illustrées par
          des lignes qui relient ces éléments. Elles indiquent comment les données sont échangées et traitées à un
          niveau plus détaillé.
        </li>
        <li>
          - Bases de Données et Fichiers : Les bases de données et les fichiers sont utilisés pour stocker de manière
          persistante les données au sein du système. Ils sont généralement représentés par des rectangles à coins
          arrondis. Chaque base de données ou fichier peut avoir des flux de données entrants et sortants qui indiquent
          comment les données sont lues ou écrites.
        </li>
        <li>
          - Contrôles et Mécanismes : Les DFD-O peuvent également indiquer de manière conceptuelle les contrôles, les
          règles de validation ou les mécanismes de sécurité qui s'appliquent aux flux de données ou aux processus.
        </li>
        Le DFD-O est utilisé pour détailler davantage les processus métier au sein d'une organisation et pour
        représenter comment les données sont traitées et échangées entre les différentes parties du système. Il permet
        de capturer une vue plus précise du système par rapport au DFD-N (niveau conceptuel), tout en restant abstrait
        par rapport au DFD-P (niveau physique). Les DFD-O sont utiles pour la communication, la documentation et la
        conception détaillée des systèmes d'information.
      </p>

      <img src="bank-account-data-flow-diagram.png" alt="Merise" />
    </div>
  );
};

export default MeriseFluxOrganisationnel;
