import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reels from "./components/Reels"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Constructor from "./pages/Constructor";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AISection from "./components/AISection";
import Lib from "./components/Lib";
import Create from "./components/Create";
import Construct from "./components/Construct";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div className='App w-full h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Hero />
      <Reels />
      <AISection
        imageSrc="https://starmake.ai/static/img/ai/ai.png"
        title="Используйте AI для создания вирусных видео"
        points={[
          "Создайте своего AI видео клона",
          "Привяжите чат-бот, который автоматически даст лид-магнит",
          "Напишите сценарий для вирусных видео с помощью конструктора",
        ]}
      />
      <Lib />
      <Create />
      <Construct />
      <Bot />
    </div>
  );
};

export default App;