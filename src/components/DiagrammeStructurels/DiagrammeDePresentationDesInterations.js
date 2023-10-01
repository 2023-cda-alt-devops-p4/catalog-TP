import React from "react";

const DiagrammeDePresentationDesInteractions = () => {
  return (
    <div>
      <h3>Diagramme de présentation des interactions</h3>
      <p>
        Ce type de diagramme comportemental détaille l’image globale du flux de contrôle de l’interaction spécifique. Le
        diagramme de vue d’ensemble des interactions est considéré comme une variante du diagramme d’activités puisque
        les sujets sont les occurrences d’interaction.
      </p>
      <p>
        Supposons que nous voulions créer un diagramme de séquence pour représenter le processus de commande d'un repas
        dans un restaurant.
        <li>
          - Objets ou acteurs : Les objets ou les acteurs sont les participants du scénario. Dans notre exemple, nous
          aurions des objets tels que "Client", "Serveur", "Cuisinier", "Table", et "Système de Commande". Chaque objet
          est représenté par une boîte verticale, appelée ligne de vie, avec son nom en haut.
        </li>
        <li>
          - Messages : Les messages sont utilisés pour montrer les interactions entre les objets. Par exemple, le client
          envoie un message "Commander" au serveur pour passer une commande. Les messages sont représentés par des
          flèches qui vont de la ligne de vie de l'expéditeur à celle du destinataire.{" "}
        </li>
        <li>
          - Activations et délais : Vous pouvez utiliser des rectangles sur la ligne de vie pour montrer quand un objet
          est actif ou occupé dans un certain processus. Par exemple, lorsque le serveur prend la commande du client,
          vous pourriez dessiner un rectangle pour montrer que le serveur est occupé pendant cette période.
        </li>
        <li>
          - Boucles et alternatives : Les diagrammes de séquence permettent de représenter des boucles (répétitions) et
          des alternatives (choix) dans le scénario. Par exemple, si le plat demandé n'est pas disponible, le serveur
          peut envoyer un message de retour au client pour lui demander de choisir un autre plat. Cela peut être
          représenté par une boucle ou une flèche alternative.{" "}
        </li>
        <li>
          - Temps : Les diagrammes de séquence montrent la séquence chronologique des actions, de haut en bas. Le temps
          s'écoule de haut en bas, montrant l'ordre dans lequel les interactions se produisent.{" "}
        </li>
        En résumé, un diagramme de séquence d'interaction est utilisé pour représenter visuellement la séquence
        temporelle des interactions entre les objets ou les acteurs dans un système. Il montre comment les objets
        collaborent pour réaliser un scénario spécifique. Ces diagrammes sont couramment utilisés pour la modélisation
        et la documentation des processus dans les systèmes logiciels et d'information, ainsi que pour la communication
        des interactions entre les parties prenantes d'un système.
      </p>
      <img src="Noeud_de_contrôle.webp" alt="" />
    </div>
  );
};

export default DiagrammeDePresentationDesInteractions;
