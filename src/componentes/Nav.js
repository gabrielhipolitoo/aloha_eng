import React from "react";
import "../assets/css/nav.css";
import { menu_mobile as Icone } from "../assets/img/icones/menu_mobile.js";
import { Fechar_mobile as Fechar } from "../assets/img/icones/fechar_mobile.js";
import { HashLink } from "react-router-hash-link";
export const Nav = () => {
  // abrindo e fechando o menu mobile

  const toogleMenu = (e) => {
    const group_links = window.document.getElementById("navbar");
    console.log(group_links.classList.toggle("active"));
  };

  // Eventos com scroll
  window.addEventListener("scroll", () => {
    const nav_main = document.querySelector(".nav_main");
    if (window.scrollY >= 220) {
      nav_main.style = `border-radius: 0;
                      box-shadow: #2b313f  1px -11px 8px 9px`;
    } else {
      nav_main.style = "";
    }
  });

  return (
    <nav id="navbar" className="nav_main">
      <div className=""></div>
      <div className="logo"></div>
      <div className="group_nav">
        <button onClick={toogleMenu} id="fecharMobile">
          <Fechar />
        </button>
        <div className="links ">
          <HashLink to="/#inicio">Inicio</HashLink>
          <HashLink to="/quemsomos">Quem somos</HashLink>
          <HashLink to="/#servicos">Servicos</HashLink>
          <HashLink to="#projetos">Projetos Concluidos</HashLink>
        </div>{" "}
        {/*Links*/}
        <div className="nav_right">
          <span>+55 71 9 9213-5500</span>
          <button>Contate-me</button>
        </div>{" "}
        {/*Nav right*/}
      </div>
      <div className="menu_mobile">
        <button
          onClick={() => {
            toogleMenu();
          }}
        >
          <Icone />
        </button>
      </div>{" "}
      {/*Menu mobile*/}
    </nav>
  );
};
