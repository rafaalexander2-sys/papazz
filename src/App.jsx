import Planejamento from "./pages/Planejamento";
import ListaCompras from "./pages/ListaCompras";
import DiarioAlimentar from "./pages/DiarioAlimentar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ListaComprasProvider } from "./context/ListaComprasContext";
import { PlanejamentoProvider } from "./context/PlanejamentoContext";
import { DiarioProvider } from "./context/DiarioContext";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import Receitas from "./pages/Receitas";
import Cronograma from "./pages/Cronograma";
import BlogIndex from "./pages/blog/index";
import Post from "./pages/blog/Post";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Login from "./pages/Login";
import Guia from "./pages/Guia";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <AuthProvider>
      <ListaComprasProvider>
      <PlanejamentoProvider>
      <DiarioProvider>
      <Router>
        <Routes>
          {/* Rota de login SEM Layout */}
          <Route path="/login" element={<Login />} />

          {/* Rotas COM Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/receitas" element={<Receitas />} />
            <Route path="/cronograma" element={<Cronograma />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/planejamento" element={<Planejamento />} />
            <Route path="/lista-compras" element={<ListaCompras />} />
            <Route path="/diario" element={<DiarioAlimentar />} />
          </Route>
        </Routes>
      </Router>
      </DiarioProvider>
      </PlanejamentoProvider>
      </ListaComprasProvider>
    </AuthProvider>
  );
}

export default App;
