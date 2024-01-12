import { Link } from 'react-router-dom'

function Liens_header(){
  return <div class="liens_header">
    <Link to="/">Accueil</Link>
    <Link to="/a_Propos">A propos</Link>
  </div>
}

export default Liens_header