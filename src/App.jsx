import { useState } from 'react';
import './App.css';
import Home from "./components/home/Home.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
function App() {

  return (
    <main>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </main>
  )
}

export default App
