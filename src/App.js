import { Routes, Route } from 'react-router-dom';

//page import
import APropos from './pages/APropos';
import Error404 from './pages/Error404';
import FicheLogement from './pages/FicheLogement';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
        <Routes>
          {/* Page par default */}
          <Route index element={<Home />} />
          {/* Routage Page */}
          <Route path="/home" element={<Home />} />
          <Route path="/fiche_logement" element={<FicheLogement />} />
          <Route path="/a_propos" element={<APropos />} />
          {/* Erreur URL */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      
    </div>
  );
}

export default App;
