import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reels from "./components/Reels"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Constructor from "./pages/Constructor";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Third from "./components/Third";

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
      <Third />
    </div>
  );
};

export default App;