import React from "react";

const DiagrammeDeCommunication = () => {
  return (
    <div>
      <h3>Diagramme de communication</h3>
      <p>
        Ce diagramme s’appelait auparavant le diagramme de collaboration, mais il est ensuite devenu un diagramme de
        communication. Le diagramme de communication est en quelque sorte similaire au diagramme de séquence, mais il se
        concentre davantage sur la relation des objets. Montrer comment ils se rapportent et se connectent via des
        messages dans une scène plutôt que des interactions.
      </p>
      <p>
        Supposons que nous voulions créer un diagramme de communication pour représenter la communication entre
        différents composants logiciels dans un système de messagerie en ligne.
        <li>
          - Objets ou acteurs : Les objets ou acteurs dans un diagramme de communication représentent les composants
          logiciels ou les parties du système qui communiquent entre eux. Dans notre exemple, nous pouvons avoir des
          objets tels que "Client Web", "Serveur de Messagerie", "Base de Données", et "Client Mobile". Chaque objet est
          représenté par une boîte avec son nom.
        </li>
        <li>
          - Lignes de vie (lifelines) : Les lignes de vie sont des lignes verticales qui partent de chaque objet ou
          acteur et montrent la durée de vie de cet objet pendant la communication. Elles ressemblent à des barres
          verticales en pointillés ou en continu.
        </li>
        <li>
          - Messages : Les messages dans un diagramme de communication représentent les communications entre les objets
          ou les acteurs. Ils sont généralement représentés par des flèches qui partent d'une ligne de vie et se
          dirigent vers une autre. Par exemple, un message "Envoyer Message" peut être envoyé du "Client Web" au
          "Serveur de Messagerie" pour envoyer un message.
        </li>
        <li>
          - Appel de méthode : Les messages peuvent être des appels de méthode pour indiquer l'exécution d'une opération
          spécifique dans un objet. Par exemple, un message "Rechercher Utilisateur" peut être un appel de méthode pour
          rechercher un utilisateur dans la base de données.
        </li>
        <li>
          - Retours de messages : Les flèches en pointillés représentent les retours de messages, montrant la réponse ou
          la réaction à un message précédent. Par exemple, après avoir envoyé un message, le serveur peut renvoyer un
          message de confirmation au client.
        </li>
        <li>
          - Synchronisation : Vous pouvez utiliser des barres verticales pointillées pour montrer la synchronisation
          entre les objets, indiquant quand ils attendent une réponse avant de poursuivre.
        </li>
        En résumé, un diagramme de communication UML est utilisé pour représenter visuellement la communication entre
        les composants logiciels ou les acteurs dans un système. Il montre comment les objets interagissent les uns avec
        les autres, les messages qu'ils s'envoient, les appels de méthode, et comment la communication se déroule dans
        le temps. Ces diagrammes sont utiles pour comprendre et documenter la séquence des interactions dans un système
        logiciel.
      </p>
      <img src="communication.png" alt="" />
    </div>
  );
};

export default DiagrammeDeCommunication;
