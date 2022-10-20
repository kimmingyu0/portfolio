import pro1 from "../assets/COSVIEW.png";
import pro2 from "../assets/ChromeApp.png";
import pro3 from "../assets/MovieInfo.png";
import pro4 from "../assets/PortFolio.png";
const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Cosview (팀)",
    type:"PC",
    text: "HTML,CSS를 통한 첫 마크업 작업을 팀원과 했던 프로젝트입니다. 시멘틱 태그의 중요성과 협업의 중요성을 알 수 있는 좋은 기회였습니다.",
    view: "https://kimmingyu0.github.io/COSVIEW/",
    source: "https://github.com/kimmingyu0/COSVIEW"
  },
  {
    imgsrc: pro2,
    title: "ToDo List (개인)",
    type:"PC, MOBILE",
    text: "바닐라 자바스크립트를 이용한 기본 웹페이지 앱으로 이벤트 처리와 구동 원리에 대한 공부에 큰 도움이 되었습니다.",
    view: "https://kimmingyu0.github.io/ToDoList/",
    source: "https://github.com/kimmingyu0/ToDoList"
  },
  {
    imgsrc: pro3,
    type:"PC, MOBILE",
    title: "MovieInformation (개인)",
    text: "처음 접하는 리액트 프로젝트로 RestAPI를 활용하여 영화 정보를 확인 할 수 있는 웹페이지 입니다. 현재 CSS 수정 작업중입니다.",
    view: "https://kimmingyu0.github.io/MovieRanking/",
    source: "https://github.com/kimmingyu0/MovieRanking/"
  },
  {
    imgsrc: pro4,
    type:"PC, MOBILE",
    title: "KMG's PortFolio (개인)",
    text: "리액트를 활용하여 만든 포트폴리오 사이트 입니다. 다양한 React hooks를 활용하였으며, 리액트를 한층 더 이해할 수 있는 기회였습니다.",
    source: "https://github.com/kimmingyu0/PORTFOLIO"
  },
];

export default ProjectCardData;