import React from "react";

interface AISectionProps {
    imageSrc: string;
    title: string;
    points: string[];
}

const AISection: React.FC<AISectionProps> = ({ imageSrc, title, points }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen px-8 py-16 gap-24">

            {/*First level*/}
            <div className="grid grid-cols-2 w-full max-w-6xl gap-12 items-center">
                {/* Left - Image */}
                <div className="flex items-center justify-center rounded-2xl p-8 shadow-lg">
                    <img
                        src={imageSrc}
                        alt="AI Visual"
                        className="object-cover w-full h-auto"
                    />
                </div>

                <div className="flex flex-col justify-center p-10 rounded-lg shadow-lg h-full text-left">
                    <div className="h-1/2 flex items-center">
                        <h2 className="text-6xl font-semibold leading-tight">{title}</h2>
                    </div>
                    <div className="h-1/2 flex items-center">
                        <ul className="list-disc list-inside text-2xl leading-relaxed">
                            {points.map(( point, index ) => (
                                <li key={index} className="font-normal">{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/*Second level*/}
            <div className="flex justify-evenly grid-cols-2 mt-[48px] w-full max-w-6xl gap-8 items-stretch">
                {/*Left - Before*/}
                <div className="flex flex-col items-center">
                    <span className="text-[38px] font-semibold border border-[#303133] rounded-[11px] px-[18px] py-[4px]">ДО</span>
                    <img
                        src="https://starmake.ai/static/img/before.png"
                        alt="Before"
                        className="object-cover w-full h-auto"
                    />
                </div>
                {/*Right - After*/}
                <div className="flex flex-col items-center shadow-lg p-4">
                    <span className="border text-[38px] font-semibold text-white rounded-[11px] px-[18px] py-[4px] bg-[#E8275C]">ПОСЛЕ</span>
                    <img
                        src="https://starmake.ai/static/img/after.png"
                        alt="After"
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>

            {/*Third level*/}
            <div className="text-center mt-8">
                <p className="text-5xl font-semibold">Благодаря этим 4 сервисам, нам удалось
                набрать 100 000 подписчиков. Так сможет каждый, кто будет использовать:</p>
            </div>

        </div>
    );
};

export default AISection;