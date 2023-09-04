import { useState } from "react";
import "../Styles/Card.css";
import keyConceptsImage from '../assets/images/zuko.png';

export default function Card() {
    const content = [
        [
            "Minha experiência predominante recai no domínio do PHP, com foco especial no desenvolvimento utilizando o framework Laravel. Esta linguagem é aquela na qual possuo uma sólida intimidade e fluência no momento."
        ],
        [
            "estou em um contínuo processo de aprimoramento e aprendizado, especialmente no âmbito do React, uma biblioteca JavaScript que venho estudando diariamente. Meu objetivo é, posteriormente, expandir meus conhecimentos para o Next.js, empregando a linguagem TypeScript."
        ],
        [
            "Acumulei considerável proficiência em gerenciamento de bancos de dados MySQL, e meu profundo entendimento de sistemas de gerenciamento de bancos de dados SQL de forma geral é evidente."
        ],
        [
            "Outra área na qual demonstro proficiência é a administração de ambientes Docker. Minha competência se estende desde a configuração até a resolução de desafios relacionados a containers e imagens. Estou bem à vontade ao lidar com essas tecnologias essenciais para o desenvolvimento e implantação de aplicações modernas."
        ]
    ];

    const [activeContentIndex, setActiveContentIndex] = useState(0);
    return (
        <ul id="concepts">
            <li className="concept">
                <img src={keyConceptsImage} alt="TODO: TITLE" />
                <div id="tabs">
                    <menu>
                        <button
                            className={activeContentIndex === 0 ? "active" : ""}
                            onClick={() => setActiveContentIndex(0)}
                        >
                            Linguagem API
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
                    <div id="tab-content">
                        <ul>
                            {content[activeContentIndex].map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    )
}

