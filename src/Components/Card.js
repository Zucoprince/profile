import { useState } from "react";
import "../Styles/Card.css";
import eu from "../assets/images/eu.jpg";
import whats from "../assets/images/whatsapp.png";
import linkedin from "../assets/images/linkedin.png";
import git from "../assets/images/github.png";
import cv from "../assets/images/curriculum-vitae.png";

export default function Card() {
  // Caminho para o arquivo PDF que você deseja disponibilizar para download
  const filePath =
    "src/assets/files/Currículo-Pedro-Zucolo-Def.pdf";

  // Manipulador de clique para a imagem
  const handleImageClick = () => {
    // Cria um elemento de âncora temporário
    const link = document.createElement("a");
    link.href = filePath;

    // Define o atributo 'download' para informar ao navegador que é um download
    link.setAttribute("download", "Currículo-Pedro-Zucolo-Def.pdf"); // Especifique o nome do arquivo a ser baixado

    // Simula um clique no link para iniciar o download
    document.body.appendChild(link);
    link.click();

    // Remove o elemento de âncora temporário
    document.body.removeChild(link);
  };

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
            <a href="https://drive.google.com/file/d/1gNRBzhP6eSiu6YZ_tMTwa2mUJKeyx0fM/view?usp=drive_link" target="_blank">
              <img className="icones" src={cv} alt="Curriculum Icon" />
            </a>
          </div>
        </div>
        <div className="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Back-End
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Front-End
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Banco de Dados
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              Outros
            </button>
          </menu>
          <div className="tab-content">
            <ul>
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
