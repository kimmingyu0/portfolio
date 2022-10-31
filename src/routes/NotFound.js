import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFoundPage">
      <div>
        <h1>잘못된 경로입니다.</h1>
        <Link to="/">
          <button className="btn">홈으로</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
