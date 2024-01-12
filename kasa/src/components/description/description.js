import React from 'react'
import tableau from './tableaux';




function Etoiles(){
    return(
        <div classe="etoiles">
            <i class="" id="e_1"></i>
            <i class="" id="e_2"></i>
            <i class="" id="e_3"></i>
            <i class="" id="e_4"></i>
            <i class="" id="e_5"></i>
        </div>
    )
}

function Tags(){
    const id_description = localStorage.getItem("description_number");
        const index = tableau.findIndex(({id}) => id === id_description);
        console.log(tableau[index].id);
          
            if(index !== -1){
                console.log("c'est bon");
                return(
                    <div class="tags">
                        {tableau[index].tags.map((tag, index) => (
                        <div className="tag" key={`${tag}-${index}`}>
                         <p>{tag}</p>    
                    </div>
                            ))}                 
                    </div>)}
            else{
                console.log("errer");
                }
}

function Tags_etoiles(){
    return(
        <div class="tages-etoiles">
            <Tags />
            <Etoiles />
        </div>
    )
}
function Paragraphe_description() {
    const id_description = localStorage.getItem("description_number");
    const index_description = tableau.findIndex(({ id }) => id === id_description);
  
    if (index_description !== -1) {
      console.log("C'est bon");
      return (
        <section className="paragraphe" key={`description-${index_description}`}>
          <div className="barre_paragraphe">
            <h2>Description</h2>
            <p>logo flèche</p>
          </div>
  
          <div className="texte_paragraphe">
            <p>{tableau[index_description].description}</p>
          </div>
        </section>
      );
    } else {
      console.log("Erreur");
      return null; // ou un message d'erreur à afficher dans le composant parent
    }
  }

function Equipments (){
    const id_description = localStorage.getItem("description_number");
    const index_equipement = tableau.findIndex(({ id }) => id === id_description);
  
    if (index_equipement !== -1) {
      console.log("C'est bon");
      return (
        <section className="paragraphe" key={`description-${index_equipement}`}>
          <div className="barre_paragraphe">
            <h2>Description</h2>
            <p>logo flèche</p>
          </div>
  
          <div className="texte_paragraphe">
            <p>{tableau[index_equipement].equipments}</p>
          </div>
        </section>
      );
    } else {
      console.log("Erreur");
      return null; // ou un message d'erreur à afficher dans le composant parent
    }
}

function Titre (){
    const id_description = localStorage.getItem("description_number");
    const index_titre = tableau.findIndex(({ id }) => id === id_description);
  
    if (index_titre !== -1) {
      console.log("C'est bon");
      return (
        <div className="titre" key={`description-${index_titre}`}>
            <h1>{tableau[index_titre].title}</h1>
        </div>
      );
    } else {
      console.log("Erreur");
      return null; // ou un message d'erreur à afficher dans le composant parent
    }
}

function Lieu (){
    const id_description = localStorage.getItem("description_number");
    const index_lieu = tableau.findIndex(({ id }) => id === id_description);
  
    if (index_lieu !== -1) {
      console.log("C'est bon");
      return (
        <div className="location" key={`description-${index_lieu}`}>
            <h3>{tableau[index_lieu].location}</h3>
        </div>
      );
    } else {
      console.log("Erreur");
      return null; // ou un message d'erreur à afficher dans le composant parent
    }
}

function Paragraphe_s(){
    return(
    <div>
    <Paragraphe_description />
    <Equipments />
    </div>    
)
}

function Description(){
    return(
    <div>
        <Titre />
        <Lieu />
        <Tags_etoiles />
        <Paragraphe_s />
    </div>)
}

export default Description;