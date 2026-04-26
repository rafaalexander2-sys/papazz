import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
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

function App() {
  return (
    <AuthProvider>
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
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
