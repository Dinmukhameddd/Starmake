import React from "react";

const Create: React.FC = () => {
  return (
    <section className="mt-[71px] mb-[94px] text-[#212529] text-left">
      <div className="max-w-[1300px] mx-auto flex justify-between">
        <div className="flex flex-col gap-[50px] overflow-hidden">
          {/* Heading Section */}
          <div>
            <h2 className="font-semibold text-[55px] leading-[58px] text-center max-w-[648px] mx-auto">
              Как создать AI клона для популярных видео в Instagram и TikTok
            </h2>
            <p className="font-['Urbanist',sans-serif] font-medium text-[24px] leading-[33px] text-center text-[#212121] opacity-80 max-w-[950px] mt-4 mx-auto">
              Не нужно самому сниматься, если у вас экспертный контент. Один раз создайте себе AI клона, и ваш аватар будет появляться на ваших видео вместо вас.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center gap-[50px]">
            {/* Left Image Block */}
            <div className="w-[334px] mt-[100px] relative">
              {/* Overlay Images */}
              <div className="absolute w-[500px] h-[107px] left-[-115px] top-[-60px]">
                <img 
                  src="https://starmake.ai/static/img/create/1000-people.png" 
                  alt="Аналитика видео для TikTok и Instagram" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="absolute w-[180px] top-1/2 left-[-60px] -translate-y-1/2">
                <img 
                  src="https://starmake.ai/static/img/create/photo.png" 
                  alt="ИИ для создания видео" 
                  className="w-full h-auto" 
                />
              </div>
              <img 
                src="https://starmake.ai/static/img/create/reel1.png" 
                alt="генерация видео с ИИ" 
                className="w-full h-auto" 
              />
            </div>

            {/* Right Image Block */}
            <div className="relative w-[388px]">
              <div className="absolute w-[190px] top-[20%] right-[-40px]">
                <img 
                  src="https://starmake.ai/static/img/create/instagram.png" 
                  alt="идеи для популярных видео в Instagram" 
                  className="w-full h-auto" 
                />
              </div>
              <img 
                src="https://starmake.ai/static/img/create/reel2.png" 
                alt="Как сделать рилс — создание вирусных видео для Instagram" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;