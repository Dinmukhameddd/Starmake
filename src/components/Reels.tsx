import React from "react";
import Overlap from "./Overlap";
import { FaChartBar, FaFileAlt, FaTools } from "react-icons/fa";

const Reels: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 w-full min-h-[390px] flex flex-col justify-center items-center text-white px-6">

            <div className="md:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    Секреты создания успешных Reels для Instagram
                </h2>

                <div className="space-y-4">
                    <Overlap icon={<FaChartBar />} text="Получите аналитику" />
                    <Overlap icon={<FaFileAlt />} text="Схему для создания подобного видео" />
                    <Overlap icon={<FaTools />} text="Используйте инструменты" />
                </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:absolute md:-top-16 md:right-10 bottom-0 scale-[1.2] origin-bottom translate-x-[-20px]">
                <img
                    src="https://starmake.ai/static/img/secret/hand.png"
                    alt="Instagram Reels analytics"
                    className="max-w-xs md:max-w-md drop-shadow-lg"
                />
            </div>

        </section>
    );
};

export default Reels;