import keyConceptsImage from '../assets/images/zuko.png';
import "../Styles/Header.css"

export default function Header() {
  return (
    <header>
      <div>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Pedro Zucolo</h1>
        <p>Explorando o Mundo Digital com Desenvolvimento Web</p>
      </div>
    </header>
  )
}