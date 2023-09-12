import React from "react";
import { Header } from "./components/header";
import { NavBar } from "./components/NavBar";
import { MainView } from "./components/MainView";
import { Products } from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormularioContacto } from "./components/FormularioContacto";
import { MenuProvider } from "./components/MenuContext"; 

function App() {
  return (
    <MenuProvider>
      <>
        <Header />
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainView />}
            />
            <Route
              path="/"
              element={<Products />}
            />
            <Route
              path="/FormularioContacto"
              element={<FormularioContacto />}
            />
            <Route
              path="/Header"
              element={<Header />}
            />
            <Route
              path="/NavBar"
              element={<NavBar />}
            />
            <Route
              path="/Products"
              element={<Products />}
            />
          </Routes>
        </BrowserRouter>
      </>
    </MenuProvider>
  );
}

export default App;