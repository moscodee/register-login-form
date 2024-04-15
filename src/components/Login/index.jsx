import Header from "../Header";
import CSS from "../CSS/Form.module.css";
import loginImg from "../../assets/Login.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  //state input value
  //START
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //END

  //get localStorage
  //START
  const getDB = JSON.parse(localStorage.getItem("users"));
  //end
  console.log(getDB);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getDB.map((item) => {
      item.username === username && item.password === password
        ? navigate(`/panel/${username}`)
        : console.log("Not Match");
    });
  };
  return (
    <>
      <Header />
      <div className={CSS.main}>
        <img src={loginImg} />
        <form className={CSS.form}>
          <h1>Login</h1>
          <input type="text" placeholder="username" onChange={handleUsername} />
          <input type="tel" placeholder="password" onChange={handlePassword} />
          <button type="submit" className={CSS.submit} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <p className={CSS.footer_tag}>Create by MosCode</p>
      <p className={CSS.footer_tag}>1403/01/19</p>
    </>
  );
};
export default Login;
