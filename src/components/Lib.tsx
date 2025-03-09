import React from "react";

const Lib: React.FC = () => {
  return (
    <section className="bg-[#0B1B2A] py-[100px] text-#212529">
      <div className="max-w-[1300px] mx-auto flex justify-between box-border p-0 border-0 align-baseline text-left text-[#212529]">
        <div className="w-full flex justify-between items-center gap-[26px] box-border m-0 p-0 border-0 align-baseline text-left text-[#212529]">
          {/* Left Side - Text Content */}
          <div className="max-w-[567px] w-full box-border m-0 p-0 border-0 align-baseline text-left text-[#212529]">
            <h3 className="text-left box-border p-0 m-0 border-0 align-baseline text-white text-[55px] font-semibold leading-[58px]">
              Библиотека <span className="text-[#C3F500]">лучших трендов REELS</span> в Instagram
            </h3>
            <p className="mt-7 text-white opacity-80 text-[24px] font-light leading-[33px] font-[Urbanist,sans-serif]">
              Мы собрали 10 000 видео для вашего вдохновения, благодаря которым авторы стали звездами. Выбирайте нишу: бизнес, одежда, товары, красота, услуги, спорт, недвижимость, рестораны и развлечения и другие.
            </p>
          </div>

          {/* Right Side - Image Grid */}
          <div className="text-left box-border m-0 p-0 border-0 grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-[14px] relative text-[#212529]">
            <div className="absolute top-0 left-0 w-full h-full bg-[#3988D5] rounded-full blur-[90px] z-[1] text-left box-border m-0 p-0 border-0"></div>

            <div className="z-[2] box-border m-0 p-0 border-0 align-baseline text-left">
              <img src="https://starmake.ai/static/img/lib/lib1.png" alt="Пример популярного Reels видео" />
            </div>
            <div className="z-[2] box-border m-0 p-0 border-0 align-baseline text-left col-span-2 row-span-2">
              <img src="https://starmake.ai/static/img/lib/lib3.png" alt="Библиотека лучших рилсов инстаграм" />
            </div>
            <div className="z-[2] box-border m-0 p-0 border-0 align-baseline text-left">
              <img src="https://starmake.ai/static/img/lib/lib2.png" alt="Библиотека лучших видео" />
            </div>
            <div className="z-[2] box-border m-0 p-0 border-0 align-baseline text-left">
              <img src="https://starmake.ai/static/img/lib/lib4.png" alt="Тренды видео для инстаграм" />
            </div>
            <div className="z-[2] box-border m-0 p-0 border-0 align-baseline text-left">
              <img src="https://starmake.ai/static/img/lib/lib5.png" alt="Как стать известным" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lib;