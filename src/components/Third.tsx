import React from "react";

const Third =() => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 md:px-10 lg:px-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch w-full max-w-5xl">
                { /* Left side - Image */ }
                <div className="flex justify-center items-center h-full mt-4 md:mt-8">
                    <img src="https://starmake.ai/static/img/ai/ai.png" alt="AI Growth" className="max-w-full h-auto" />
                </div>

                { /* Right side - Text */ }
                <div className="flex flex-col justify-center h-full flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Используйте AI для создания вирусных видео
                    </h2>

                    <ul className="mt-4 space-y-2 text-lg">
                        <li>• Создайте своего <b>AI видео клона</b></li>
                        <li>• <b>Привяжите чат бот</b>, который автоматом даст лид-магнит, и наберёте подписчиков</li>
                        <li>• <b>Напишите сценарий</b> для ваших вирусных видео, с помощью конструктора</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Third;