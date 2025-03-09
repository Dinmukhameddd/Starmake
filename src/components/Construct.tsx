import React from "react";

const Construct: React.FC = () => {
  return (
    <section className="construct text-[100%] tab-[4] touch-none text-[#212529] text-left box-border m-0 p-0 border-0 font-inherit align-baseline block bg-[#0B1B2A]">
      <div className="max-w-[1300px] mx-auto flex justify-between text-[#212529] box-border p-0 border-0 align-baseline">
        <div className="flex justify-center text-[#212529] box-border m-0 p-0 border-0 align-baseline">
          {/* Left Section with Image */}
          <div className="relative z-[2] w-[700px] mt-[-30px] mb-[-50px] text-[#212529]">
            <div className="absolute top-[20%] left-0 w-full h-[60%] bg-[#3988D5] rounded-full blur-[80px] z-[-1]"></div>
            <img
              src="https://starmake.ai/static/img/construct/phone.png"
              alt="Идеи для видео — трендовые рилс для привлечения подписчиков"
              className="block w-full h-auto max-w-full align-middle border-none z-[2]"
            />
          </div>

          {/* Right Section with Content */}
          <div className="text-white z-[2] self-center">
            <h2 className="text-white text-[55px] leading-[58px] font-semibold max-w-[614px]">
              Используйте <span className="text-[#C3F500]">конструктор сценария</span>
            </h2>
            <p className="text-white text-left opacity-80 text-[24px] leading-[33px] max-w-[567px] mt-[30px] font-[Urbanist,sans-serif]">
              Мы протестировали более 100 заголовков, 20 структур текста, и создали идеальный конструктор сценария, который наберет вашим видео миллионы просмотров, а вы принесете пользу и станете звездой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construct;