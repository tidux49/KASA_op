import React from 'react'
import img_kasa from './LOGO.png';
import img_fond_index from './fond_index.png';
import tableau from './tableaux';
import { Link } from 'react-router-dom'


function Image_kasa(){
  return <img class="image_kasa" src={img_kasa}></img>
}


function Header(){
  return <header><Image_kasa /></header>
}


function Cadres(){
  const handleClick = (id) => {
    localStorage.setItem("description_number", id);
    console.log('Clic sur le lien !');
  };
    return(
      <div class="back_cadre">
        {tableau.map(({cover, id}) => (
          <Link to="/description" onClick={() => handleClick(id)} class ="cadre" id={id}>
          <img class="img_cadre" src={cover}></img>
      </Link>
         ))}
      </div>
    ) }

function Image_index(){

  const image_index_Style = {
    backgroundImage  : `url(${img_fond_index})`,
    backgroundSize: 'cover',
  };


  return <div class="image_index" style={image_index_Style}>
    <p>Chez vous, partout et ailleur</p>
  </div>
}

function Home(){
  return <div class="body">
    <Header />
    <main>  
    <Image_index />
    <Cadres />
    </main>
    </div>
}


export default Home;
