import { useNavigate, useParams } from "react-router-dom";
import CSS from "../Panel/Panel.module.css";
const Panel = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className={CSS.top_navbar}>
        <h1>{username}</h1>
      </div>
      <div className={CSS.offcanvas}>
        <button>click</button>
        <button>click</button>
        <button className={CSS.exitBtn} onClick={() => navigate("/")}>
          exit
        </button>
      </div>
    </>
  );
};
export default Panel;
