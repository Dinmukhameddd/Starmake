import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav className="w-full flex justify-between items-center border-b px-6 md:px-12 py-3" style={{ padding: "50px" }}>
      <div className="logo px-4">
        <img src="https://starmake.ai/static/img/logo-star.png" alt="Logo" className="w-58 h-auto"/>
      </div>

      <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-900">
        <Link to={"/"}><li>Главная</li></Link>
        <Link to={"/library"}><li>Библиотека рилсов</li></Link>
        <Link to={"/constructor"}><li>Конструктор сценария</li></Link>
        <Link to={"/profile"}><li>Профиль</li></Link>
        <Link to={"/login"}><li>Войти</li></Link>
      </ul>

      {/* Hamburger or Close menu */}
      <div className="md:hidden z-10" onClick={handleClick}>
        { nav ? <FaTimes size={25} /> : <RxHamburgerMenu size={25} /> }
      </div>

      {/* Mobile menu */}
      <ul className={`${
        nav
        ? "opacity-100 transform translate-x-0"
        : "opacity-0 transform -translate-y-full"} 
        transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl
      }`}>
        <Link to={"/"}><li className="p-2">Главная</li></Link>
        <Link to={"/library"}><li className="p-2">Библиотека рилсов</li></Link>
        <Link to={"/constructor"}><li className="p-2">Конструктор сценария</li></Link>
        <Link to={"/profile"}><li className="p-2">Профиль</li></Link>
        <Link to={"/login"}><li className="p-2">Войти</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;