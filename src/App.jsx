import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Features } from "./Contacts";
import { Contacts } from "./Feature";
import { Home } from "./Home";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="hat">
          <div className="Cover">Cover</div>
          <div className="links">
            <Link to="/" >Home</Link>
            <Link to="/posts">Feauters</Link>
            <Link to="/about">Contact</Link>
          </div>
        </div>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Features />} />
          <Route path="/posts" element={<Contacts />} />
        </Routes>
      </body>
      <footer className='footer'>Cover template for Bootstrap, by @mdo</footer>
    </>
  );
};

export default App;
