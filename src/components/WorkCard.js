import "./WorkCardStyles.css";
// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <h4>최적화 : {props.type}</h4>
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} target="_blank" className="btn">
            View
          </a>
          <a href={props.source} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
