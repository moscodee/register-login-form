import CSS from "../CSS/Home.module.css";
import imageDev from "../../assets/032db574a23b523b79481d8d222a41ca.jpg";
import Header from "../Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className={CSS.main}>
        <h1 className={CSS.description}>
          Welcome! This is my first site with React. If you have account Login
          or Register if you have't.
        </h1>
        <div className={CSS.img_container}>
          <img src={imageDev} />
        </div>
      </div>
    </div>
  );
};
export default Home;
