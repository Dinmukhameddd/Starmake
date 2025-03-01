import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            { /* Background video */ }
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://starmake.ai/static/video/back-vid.mp4"
                autoPlay
                loop
                muted
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Стань звездой Instagram, Tik-Tok, YouTube: повторяй тренды, генерируй видео и привлекай подписчиков с помощью AI
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Примеры лучших видео от блогеров и наших сервисов по набору аудитории
                </p>
                <Link
                    to="/catalog"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl md:text-2xl py-4 px-8 md:py-5 md:px-12 rounded shadow-lg transition duration-300 flex items-center justify-center w-fit"
                >
                    Открыть каталог
                </Link>
      </div>
    </div>
    );
};

export default Hero;