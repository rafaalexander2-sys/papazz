import { Link } from "react-router-dom";

export default function Cronograma() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFB347] to-[#FFCC7A] text-white p-5">
        <Link to="/" className="text-2xl">←</Link>
        <h1 className="text-2xl font-bold text-center mt-2">Cronograma</h1>
      </div>

      <div className="p-5 text-center mt-20">
        <div className="text-6xl mb-4">⏰</div>
        <h2 className="text-2xl font-bold text-[#333] mb-2">
          Em breve!
        </h2>
        <p className="text-[#636E72]">
          Estamos preparando os cronogramas personalizados por idade.
        </p>
      </div>
    </div>
  );
}