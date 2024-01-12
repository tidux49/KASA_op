import React from 'react'
import img_fond_propos from './fond_propos.png';

const liste = [

    {
     title : "Fiable",
     text : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    }, 
     {
     title : "Respect",
     text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
      {
     title : "Service",
     text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
     {
     title : "Sécurité",
     text : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    } 
 
 ]


function Image_kasa(){
    return <img class="image_kasa" src={img_fond_propos}></img>
  }


function Paragraphe_s(){
    
    return(
<div class="paragraphes">
        {liste.map(({title, text}) => (
    <section class ="paragraphe" key={`${title}`}>
        
        <div class = "barre_paragraphe">
            <h2>{title}</h2>
            <p>logo flèche</p>
        </div>

        <div class="texte_paragraphe">
            <p>{text}</p>
        </div>

    </section>
            ))}
</div>)
}

function A_propos(){
    return(
        <div class = "body">
            <Image_kasa />
            <Paragraphe_s />
        </div>
    )
}

export default A_propos;