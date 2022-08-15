import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { QuienesSomos } from "../components/QuienesSomos";
import { Servicios } from "../components/Servicios";
import { Clientes } from "../components/Clientes";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <section class="content">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="/quienessomos" element={<QuienesSomos/>} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/contacto" element={<Contacto/>} />
          </Routes>
        </section>


        {/* FOOTER */}
        <Footer />
    
    </BrowserRouter>
  )
}
