import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Cronograma from './pages/Cronograma';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/cronograma" element={<Cronograma />} />
      </Routes>
    </BrowserRouter>
  );
}