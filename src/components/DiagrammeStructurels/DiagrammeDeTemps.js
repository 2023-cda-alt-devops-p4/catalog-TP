import React from "react";

const DiagrammeDeTemps = () => {
  return (
    <div id="diagrammeDeTemps">
      <h3>Diagramme de temps</h3>
      <p>
        Un diagramme structurel qui représente le changement d’état ou de valeur d’un ou plusieurs objets sur un certain
        temps. Ce type de diagramme se compose principalement d’une ligne de vie, d’une chronologie d’état, d’une
        contrainte de durée, d’une contrainte de temps et d’une occurrence de destruction.{" "}
      </p>
      <p>
        Supposons que nous voulions créer un diagramme de temps pour représenter le cycle de vie d'une réservation de
        vol.
        <li>
          Lignes de vie : Les lignes de vie représentent les entités ou les objets qui participent au scénario dans le
          temps. Dans notre exemple, nous aurions des lignes de vie pour "Client", "Système de Réservation", "Compagnie
          Aérienne", "Agent de Voyage", etc. Chaque ligne de vie est une ligne verticale avec le nom de l'entité en
          haut.
        </li>
        <li>
          Événements : Les événements sont des marqueurs sur les lignes de vie qui indiquent quand des événements se
          produisent. Par exemple, vous pourriez avoir un événement "Demande de Réservation" sur la ligne de vie du
          client au moment où le client décide de réserver un vol.
        </li>
        <li>
          Flèches de synchronisation : Les flèches de synchronisation sont utilisées pour montrer quand plusieurs
          entités se synchronisent ou se coordonnent dans le temps. Par exemple, lorsque le client envoie une demande de
          réservation, il peut y avoir une flèche de synchronisation indiquant que la compagnie aérienne reçoit cette
          demande en même temps.
        </li>
        <li>
          Durées et délais : Vous pouvez utiliser des durées pour indiquer combien de temps s'écoule entre les
          événements. Par exemple, vous pourriez montrer une durée pour indiquer combien de temps il faut pour traiter
          la demande de réservation. Vous pouvez également montrer des délais pour indiquer des délais d'attente.
        </li>
        <li>
          Transitions d'état : Vous pouvez utiliser des transitions d'état pour montrer comment les entités passent d'un
          état à un autre au fil du temps. Par exemple, un client peut passer de l'état "En attente de confirmation" à
          "Réservation confirmée" lorsque la compagnie aérienne accepte la réservation.
        </li>
        <li>
          Conditions : Les conditions peuvent être utilisées pour montrer des conditions ou des événements déclencheurs
          qui provoquent un changement d'état ou une action à un moment donné.
        </li>
        En résumé, un diagramme de temps UML est utilisé pour représenter comment les événements se produisent dans le
        temps et comment les entités interagissent temporellement dans un système. Ces diagrammes sont particulièrement
        utiles pour modéliser des systèmes en temps réel, des processus métier avec des délais ou des systèmes où la
        coordination temporelle est importante.
      </p>
      <img src="Boat_Manufacturing_Timing_Diagram.png" alt="" />
    </div>
  );
};

export default DiagrammeDeTemps;
