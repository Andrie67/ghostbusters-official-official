import { useNavigate } from "react-router-dom";

function Card(props) {
  const nav = useNavigate();
  let category = props.navigate;

  const navigate = () => {
    category === "Guest" ? nav("/guest") : nav("/editor");
  };
  return (
    <div className="card" onClick={navigate}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
