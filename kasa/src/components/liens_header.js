import { Link } from 'react-router-dom'
import img_kasa from './home/LOGO.png';
import './liens_header_style.css';

function Liens_header(){
  return <div class="liens_header">
    <img class="image_kasa" src={img_kasa}></img>
    <div class="liens">
    <Link to="/home">Accueil</Link>
    <Link to="/a_Propos">A propos</Link>
    </div>
  </div>
}

export default Liens_header