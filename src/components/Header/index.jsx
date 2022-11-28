import React from "react";
import "./index.css";
import logo from "./img/logo.jpeg";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="Logo com nome" style={{ width: "90px", height: "90px" }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="home">Home</a>
              <a className="nav-link" href="destinos">Destinos</a>
              <a className="nav-link" href="pacotes">Pacotes</a>
              <a className="nav-link " href="todosDestinos">Todos os Destinos</a>
              <a className="nav-link " href="cadastro">Cadastre-se</a>
              <a className="nav-link " href="ajuda">Ajuda</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}