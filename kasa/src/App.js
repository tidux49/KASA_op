import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import Description from './components/description/description';
import A_propos from './components/a_propos/a_propos';
import Liens_header from './components/liens_header';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Router>
          <nav>
              <Liens_header />
          </nav>
          <Routes>
            <Route path="/description" element={<Description />}/>
            <Route path="/a_propos" element={<A_propos />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
      </Router> 
      <Footer />
    </div>
  );
}

export default App;
