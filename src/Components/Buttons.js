import { useState } from "react";
import "../Styles/Buttons.css";

export default function Buttons() {
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
    <>
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
    </>
  );
}
