import Navbarprin from './layout/Navbarprin';
import Home from './pages/Home';
import Pokemones from './pages/Pokemones'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerDetalle from './components/VerDetalle';


function App() {

  return (
    <>
     <div className="App">
      <BrowserRouter>
      <Navbarprin />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemon/:id" element={<VerDetalle/>} />
      </Routes>
      </BrowserRouter>
    </div>
      
    </>
  );
}

export default App;
