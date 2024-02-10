import React from 'react'
import tableau from './tableaux';
import Animation_depliant from '../animation_dépliant';
import {useParams } from 'react-router-dom';
import './description_style.css';

import Banner from './C_banner/Banner';
import Tags from './C_tags/Tags';
import Titre from './C_titre/Titre';
import Lieu from './C_lieu/Lieu';
import Host from './C_host/Host';
import Etoiles from './C_etoiles/Etoiles';





function Description(){
    const {id} = useParams();
    console.log("c'est id de la page"+id);
    const id_tableau = id;
    const index_global = tableau.findIndex(({id}) => id === id_tableau);
    const tab_equipements = [];
    let equipements ="";
    for( let tab of tableau[index_global].equipments ){
        tab_equipements.push(tab);
        tab_equipements.push('\n');
    };
    for( let a of tab_equipements){
    equipements = equipements + a;}
    console.log(equipements);
    
    
    return(
    <div class="main_description">
        <Banner tableau={tableau} id_selected={id}/>

        <section class="information">

        <section class="title_tags_section">
        <section class="titre_lieu_section">
        <Titre tableau={tableau} id_selected={id} />
        <Lieu tableau={tableau} id_selected={id} />
        </section>
        
        <Tags tableau={tableau} id_selected={id} />
        </section>



        <section class="host_etoiles_section">
        <Host tableau={tableau} id_selected={id} />
        <Etoiles tableau={tableau} id_selected={id} />
        </section>

        </section>

        <section class="descriptif">
        <Animation_depliant anim_title="description" anim_text={tableau[index_global].description} />
        <Animation_depliant anim_title="equipements" anim_text={equipements} />
        </section>

    </div>)
}

export default Description;