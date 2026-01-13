import React from "react";
import { Routes, Route } from "react-router-dom";
import { Film, Home as HomeIcon, Heart } from "lucide-react";
import Navbar from "./layouts/NavBar";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  const navConfig = {
    logoIcon: Film,
    links: [
      { name: "Home", path: "/", Icon: HomeIcon },
      { name: "Favoritos", path: "/favorites", Icon: Heart },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <Navbar {...navConfig} />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<div className="py-20 text-center text-2xl font-bold">Página de Favoritos (En construcción)</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
