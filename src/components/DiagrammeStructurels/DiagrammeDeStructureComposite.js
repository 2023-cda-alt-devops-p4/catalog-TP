import React from "react";

const DiagrammeDeStructureComposite = () => {
  return (
    <div>
      <h3>Diagramme De Structure Composite</h3>
      <p>
        Le prochain exemple UML est le diagramme de déploiement. Ce type de diagramme montre la disposition physique des
        artefacts sur les nœuds. Les diagrammes de déploiement sont considérés comme pertinents dans le cas où votre
        solution logicielle est distribuée sur différentes machines, chacune ayant une configuration distincte.
      </p>
      <p>
        Supposons que nous voulions créer un diagramme de structure composite pour représenter la structure interne d'un
        ordinateur portable.
        <li>
          - Composants : Les composants sont les parties principales de l'objet ou du composant complexe que vous
          souhaitez décomposer. Dans notre exemple, nous aurions des composants tels que "Écran", "Clavier", "Batterie",
          "Carte Mère", "Disque Dur", "Mémoire RAM", et "Processeur". Chaque composant est représenté par une boîte
          rectangulaire avec son nom.
        </li>
        <li>
          - Ports et connecteurs : Les ports et les connecteurs sont utilisés pour montrer comment les composants sont
          connectés les uns aux autres. Par exemple, le composant "Mémoire RAM" peut avoir un port d'entrée/sortie pour
          se connecter à la "Carte Mère". Les ports sont généralement représentés par de petits carrés ou cercles sur
          les bords des composants, et les connecteurs sont des lignes qui relient les ports.
        </li>
        <li>
          - Compositions et agrégations : Les diagrammes de structure composite peuvent montrer les relations entre les
          composants, telles que la composition (quand un composant fait partie intégrante d'un autre) ou l'agrégation
          (quand un composant est un ensemble de plusieurs autres composants). Par exemple, la "Carte Mère" peut être
          composée du "Processeur", de la "Mémoire RAM" et d'autres composants.
        </li>
        <li>
          - Annotations : Vous pouvez ajouter des annotations pour fournir des descriptions ou des informations
          supplémentaires sur les composants ou les relations. Par exemple, vous pourriez ajouter une annotation pour
          indiquer la capacité de stockage du "Disque Dur".
        </li>
        <li>
          - Décompositions : Si un composant est lui-même complexe, vous pouvez le décomposer davantage en utilisant un
          autre diagramme de structure composite pour montrer sa structure interne.
        </li>
        En résumé, un diagramme de structure composite UML est utilisé pour décomposer un objet ou un composant complexe
        en parties plus petites, montrant comment ces parties sont connectées et comment elles forment l'ensemble. Cela
        aide à visualiser la structure interne d'un objet complexe, tel qu'un ordinateur portable, et à comprendre
        comment ses composants sont organisés et connectés. Ces diagrammes sont utiles pour la conception détaillée des
        systèmes complexes.
      </p>
      <img src="UML-composite-structure-diagram@2x.png" alt="" />
    </div>
  );
};

export default DiagrammeDeStructureComposite;
