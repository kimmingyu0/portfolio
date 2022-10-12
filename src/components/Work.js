import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCradData";
const Work = (props) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">register</h1>
      <div className="project-container">
        {WorkCardData.map((val,idx)=>{
          return (
            <WorkCard 
              key={idx}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Work;
