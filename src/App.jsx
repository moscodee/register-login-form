//welcome
//color site => https://colorhunt.co/palette/b3c8cfbed7dcf1eedce5ddc5
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Panel from "./components/Panel";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/panel/:username?" element={<Panel />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
