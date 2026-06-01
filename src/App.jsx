import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ListaComprasProvider } from "./context/ListaComprasContext";
import { PlanejamentoProvider } from "./context/PlanejamentoContext";
import { DiarioProvider } from "./context/DiarioContext";
import { PlatformProvider } from "./context/PlatformContext";
import Layout from "./components/layout/Layout";

// Eager: páginas críticas do caminho principal
import Landing from "./pages/Landing";
import Login from "./pages/Login";

// Lazy: tudo o mais
const Home = lazy(() => import("./pages/Home"));
const Receitas = lazy(() => import("./pages/Receitas"));
const Cronograma = lazy(() => import("./pages/Cronograma"));
const BlogIndex = lazy(() => import("./pages/blog/index"));
const Post = lazy(() => import("./pages/blog/Post"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Contato = lazy(() => import("./pages/Contato"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Termos = lazy(() => import("./pages/Termos"));
const Guia = lazy(() => import("./pages/Guia"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Planejamento = lazy(() => import("./pages/Planejamento"));
const ListaCompras = lazy(() => import("./pages/ListaCompras"));
const DiarioAlimentar = lazy(() => import("./pages/DiarioAlimentar"));
const AdminPanel = lazy(() => import("./pages/admin/index"));
const PagamentoSucesso = lazy(() => import("./pages/PagamentoSucesso"));
const PagamentoFalha = lazy(() => import("./pages/PagamentoFalha"));
const PagamentoPendente = lazy(() => import("./pages/PagamentoPendente"));

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#FF6B6B] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <PlatformProvider>
    <AuthProvider>
      <ListaComprasProvider>
      <PlanejamentoProvider>
      <DiarioProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/pagamento/sucesso" element={<PagamentoSucesso />} />
            <Route path="/pagamento/falha" element={<PagamentoFalha />} />
            <Route path="/pagamento/pendente" element={<PagamentoPendente />} />
            <Route element={<Layout />}>
              <Route path="/inicio" element={<Home />} />
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
        </Suspense>
      </Router>
      </DiarioProvider>
      </PlanejamentoProvider>
      </ListaComprasProvider>
    </AuthProvider>
    </PlatformProvider>
  );
}

export default App;
