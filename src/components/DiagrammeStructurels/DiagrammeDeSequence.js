import React from "react";

const DiagrammeDeSequence = () => {
  return (
    <div>
      <h3>Diagramme de Sequence</h3>
      <p>
        Un diagramme de séquence est un type de diagramme UML qui montre comment une opération. Ce diagramme se
        concentre sur le temps car il affiche l’ordre d’interaction graphiquement via l’axe vertical pour représenter le
        temps.
      </p>
      <p>
        Supposons que nous voulions créer un diagramme de séquence pour représenter le processus de commande d'un
        produit en ligne.
        <li>
          Objets ou acteurs : Les objets ou acteurs sont les participants du scénario. Dans notre exemple, nous aurions
          des objets tels que "Client", "Système de Commande", "Panier", "Base de Données", "Produit", et "Service de
          Paiement". Chaque objet est représenté par une ligne de vie verticale avec son nom en haut.
        </li>
        <li>
          Messages : Les messages sont utilisés pour montrer les interactions entre les objets ou les acteurs. Par
          exemple, le client envoie un message "Ajouter au panier" au système de commande pour ajouter un produit à son
          panier. Les messages sont représentés par des flèches qui vont de la ligne de vie de l'expéditeur à celle du
          destinataire.
        </li>
        <li>
          Activations et délais : Vous pouvez utiliser des rectangles sur la ligne de vie pour montrer quand un objet
          est actif ou occupé dans un certain processus. Par exemple, lorsque le système de commande traite une
          commande, vous pourriez dessiner un rectangle pour montrer que le système est occupé pendant cette période.
        </li>
        <li>
          Boucles et alternatives : Les diagrammes de séquence permettent de représenter des boucles (répétitions) et
          des alternatives (choix) dans le scénario. Par exemple, si le paiement échoue, le système peut renvoyer un
          message d'erreur au client, qui peut choisir de réessayer ou d'annuler la commande. Cela peut être représenté
          par une boucle ou une flèche alternative.
        </li>
        <li>
          Temps : Les diagrammes de séquence montrent la séquence chronologique des actions, de haut en bas. Le temps
          s'écoule de haut en bas, montrant l'ordre dans lequel les interactions se produisent.
        </li>
        En résumé, un diagramme de séquence est utilisé pour représenter visuellement la séquence temporelle des
        interactions entre les objets ou les acteurs dans un système. Il montre comment les objets collaborent pour
        réaliser un scénario spécifique. Ces diagrammes sont couramment utilisés pour la modélisation et la
        documentation des processus dans les systèmes logiciels et d'information, ainsi que pour la communication des
        interactions entre les parties prenantes d'un système.
      </p>
      <img src="diagramme_de_sequence.png" alt="" />
    </div>
  );
};

export default DiagrammeDeSequence;
