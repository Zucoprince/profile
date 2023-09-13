import "../Styles/Card.css";
import eu from "../assets/images/eu.jpg";
import Icons from "../Components/Icons";
import Buttons from "../Components/Buttons";

export default function Card() {
  return (
    <ul id="concepts">
      <div className="concept">
        <div className="avatar-div">
          <img className="avatar" src={eu} alt="Avatar Zucolo" />
        </div>
        <Icons />
        <Buttons />
      </div>
    </ul>
  );
}
