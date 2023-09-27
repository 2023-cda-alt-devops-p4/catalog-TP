import React from "react";

const DiagrammeDeCasDUtilisation = () => {
  return (
    <div>
      <h3>Diagramme De Cas D'Utilisation</h3>
      <p>
        Le diagramme de cas d’utilisation dans UML est une sorte de diagramme qui utilise des acteurs et des cas
        d’utilisation pour décrire les fonctionnalités du système. Les actions, services et fonctions que le système
        doit exécuter sont ce que vous avez appelé les «cas d’utilisation». Alors que les entités qui opèrent sous des
        rôles spécifiques trouvés dans le système sont les «acteurs». Et le «système» est celui qui est en cours de
        développement.
      </p>
      <p>
        Supposons que nous voulions créer un diagramme de cas d'utilisation pour représenter un système de réservation
        en ligne pour un cinéma.
        <li>
          - Acteurs : Les acteurs sont comme les utilisateurs ou les entités externes qui interagissent avec le système.
          Dans ce cas, nous pourrions avoir des acteurs tels que "Client" (les personnes qui réservent des billets) et
          "Gestionnaire de Cinéma" (les employés qui gèrent les informations sur les films et les salles). Les acteurs
          sont généralement représentés par des silhouettes d'humains ou des icônes.
        </li>
        <li>
          - Cas d'utilisation : Les cas d'utilisation sont comme les fonctionnalités ou les actions que les acteurs
          peuvent effectuer dans le système. Par exemple, nous pourrions avoir des cas d'utilisation tels que "Réserver
          un billet", "Consulter les horaires des films", "Annuler une réservation", "Ajouter un nouveau film au
          catalogue", etc. Chaque cas d'utilisation est représenté par une ellipse avec un nom.
        </li>
        <li>
          - Relations acteur-cas d'utilisation : Les lignes solides ou les flèches connectent les acteurs aux cas
          d'utilisation pour montrer quel acteur peut effectuer quelles actions. Par exemple, le cas d'utilisation
          "Réserver un billet" serait relié à l'acteur "Client" pour montrer que les clients peuvent effectuer cette
          action.
        </li>
        <li>
          - Inclusion et extension (séquences) : Les diagrammes de cas d'utilisation peuvent également montrer comment
          les cas d'utilisation sont liés les uns aux autres. L'inclusion indique qu'un cas d'utilisation peut inclure
          un autre cas d'utilisation. Par exemple, le cas d'utilisation "Réserver un billet" pourrait inclure le cas
          d'utilisation "Sélectionner des sièges". L'extension indique que certaines actions peuvent être étendues par
          d'autres actions en fonction de conditions. Par exemple, l'action "Annuler une réservation" peut être étendue
          par "Rembourser le paiement" si le client le demande.
        </li>
        <li>
          - Acteur étendu : Parfois, un acteur peut être étendu pour inclure plusieurs sous-acteurs. Par exemple, le
          "Client" peut être étendu pour inclure des sous-acteurs tels que "Client enregistré" et "Client invité",
          chacun ayant ses propres capacités.{" "}
        </li>
        En résumé, un diagramme de cas d'utilisation UML est utilisé pour modéliser les interactions entre les acteurs
        et les fonctionnalités d'un système. Il montre qui fait quoi dans le système et comment les acteurs
        interagissent avec les différentes fonctionnalités. Cela aide à comprendre les besoins des utilisateurs et à
        concevoir le système en fonction de ces besoins.
      </p>
      <img src="UML_use_case_example-800x707.png" alt="" />
    </div>
  );
};

export default DiagrammeDeCasDUtilisation;
