import React from "react";

const Bot: React.FC = () => {
  return (
    <section className="my-[100px] text-gray-900 text-left">
      <div className="max-w-[1300px] mx-auto flex justify-between">
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <h2 className="text-left text-[#212529] text-[55px] font-semibold leading-[58px] max-w-[536px]">Бот для увеличения подписчиков</h2>
            <p className="mt-[30px] text-left text-[#212529] text-[24px] leading-[33px] max-w-[464px] font-[Urbanist,sans-serif]">
              Привяжите ассистента к вашему инстаграмму, который будет выдавать подарки, видео, инструкции после подписки на вас.
            </p>
          </div>
          <div className="w-[588px]">
            <img 
                src="https://starmake.ai/static/img/bot.png" 
                alt="Bot assistant"
                className="block align-middle max-w-full h-auto w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bot;