import CSS from "../Header/Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={CSS.navbar}>
        <h1>MosCode</h1>
        <p>| First</p>
        <div className={CSS.main_right}>
          <button className={CSS.home} onClick={() => navigate("/")}>
            Home
          </button>
          <button className={CSS.btn} onClick={() => navigate("/login")}>
            Login
          </button>
          <button className={CSS.btn} onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
