import APropos from "./pages/APropos";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <FicheLogement/>
      <APropos/>
      <Error404/>
    </div>
  );
}

export default App;
