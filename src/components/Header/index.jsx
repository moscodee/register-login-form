import { useEffect, useState } from "react";
import CSS from "../CSS/Header.module.css";
import { useNavigate, useParams } from "react-router-dom";
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const { register } = useParams();
  console.log(register);
  const handleDropDown = () => {
    setIsShow(!isShow);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 650) {
      setIsShow(false);
    }
  });

  return (
    <>
      <div className={CSS.navbar_container}>
        <h1>MosCode</h1>
        <p>| First</p>
        <div className={CSS.navbar}>
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
        <button className={CSS.dropdown} onClick={handleDropDown}>
          =
        </button>
        <div>
          {isShow && (
            <div className={isShow ? CSS.dropdown_active : ""}>
              <button
                className={CSS.dropdown_item}
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <button
                className={CSS.dropdown_item}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className={CSS.dropdown_item}
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
