import "./App.css";
import { Footer } from "./components/footer/Footer";
import { ArticleDetail } from "./pages/articleDetail/ArticleDetail";
import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/register/RegisterPage";
const App = () => {
  return (
    <div className="App font-jetbrain">
      <Routes>
        <Route index path="/" element={<HomePage />} />{" "}
        <Route path="blog/:id" element={<ArticleDetail />} />
        <Route index path="/register" element={<RegisterPage />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
