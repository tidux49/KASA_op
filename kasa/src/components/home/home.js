import React from 'react'
import img_fond_index from './fond_index.png';
import tableau from './tableaux';
import Cadre from './C_cadre/Cadre';
import './home_style.css';

function Image_index(){



  return (
  <div class="img_index_container">
    <img class="image_index" src={img_fond_index}></img>
    <p class="text_img_index">Chez vous, partout et ailleur</p>
  </div>)

}

function Home(){
  return <div class="body_home">
    <Image_index />
    <section class="back_cadre">
    <div class="grille_cadre">
    <Cadre tableau={tableau} />
    </div>
    </section>
    </div>
}


export default Home;
