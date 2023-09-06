import { useState } from "react";
import "../Styles/Card.css";
import eu from "../assets/images/eu.jpg";
import whats from "../assets/images/whatsapp.png";
import linkedin from "../assets/images/linkedin.png";
import git from "../assets/images/github.png";
import cv from "../assets/images/curriculum-vitae.png";

export default function Card() {
  const content = [
    [
      "Minha experiência predominante recai no domínio do PHP, com foco especial no desenvolvimento utilizando o framework Laravel. Esta linguagem é aquela na qual possuo uma sólida intimidade e fluência no momento.",
    ],
    [
      "estou em um contínuo processo de aprimoramento e aprendizado, especialmente no âmbito do React, uma biblioteca JavaScript que venho estudando diariamente. Meu objetivo é, posteriormente, expandir meus conhecimentos para o Next.js, empregando a linguagem TypeScript.",
    ],
    [
      "Acumulei considerável proficiência em gerenciamento de bancos de dados MySQL, e meu profundo entendimento de sistemas de gerenciamento de bancos de dados SQL de forma geral é evidente.",
    ],
    [
      "Outra área na qual demonstro proficiência é a administração de ambientes Docker. Minha competência se estende desde a configuração até a resolução de desafios relacionados a containers e imagens. Estou bem à vontade ao lidar com essas tecnologias essenciais para o desenvolvimento e implantação de aplicações modernas.",
    ],
  ];

  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [botaoAtivo, setBotaoAtivo] = useState(false);
  const [ulKey, setUlKey] = useState(0); // Adicione o estado para a chave única do <ul>

  const alternarBotao = () => {
    setBotaoAtivo(!botaoAtivo);
    setUlKey(ulKey + 1); // Atualize a chave única do <ul> para reiniciar
  };
  return (
    <ul id="concepts">
      <div className="concept">
        <div></div>
        <div className="avatar-div">
          <img className="avatar" src={eu} alt="Avatar Zucolo" />
        </div>
        <div className="icones-div">
          <div className="icones-esq">
            <a href="https://wa.me/5519996162312" target="_blank">
              <img className="icones" src={whats} alt="WhatsApp Icon" />
            </a>
            <a href="https://www.linkedin.com/in/pedrozucolo/" target="_blank">
              <img className="icones" src={linkedin} alt="Linkedin Icon" />
            </a>
          </div>
          <div className="icones-dir">
            <a href="https://github.com/Zucoprince/" target="_blank">
              <img className="icones" src={git} alt="GitHub Icon" />
            </a>
            <a
              href="https://drive.google.com/file/d/1gNRBzhP6eSiu6YZ_tMTwa2mUJKeyx0fM/view?usp=drive_link"
              target="_blank"
            >
              <img className="icones" src={cv} alt="Curriculum Icon" />
            </a>
          </div>
        </div>
        <div className="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => {
                setActiveContentIndex(0);
                alternarBotao();
              }}
            >
              Back-End
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => {
                setActiveContentIndex(1);
                alternarBotao();
              }}
            >
              Front-End
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => {
                setActiveContentIndex(2);
                alternarBotao();
              }}
            >
              Banco de Dados
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => {
                setActiveContentIndex(3);
                alternarBotao();
              }}
            >
              Outros
            </button>
          </menu>
          <div className="tab-content">
            <ul key={ulKey} id="content">
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ul>
  );
}
