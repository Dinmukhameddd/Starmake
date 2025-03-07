import React from "react";

const ImageGrid: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="grid grid-cols-7 gap-4 max-w-3xl w-full">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col justify-between">
          <img 
            src="https://starmake.ai/static/img/lib/lib1.png" 
            alt="Reel 1" 
            className="w-full h-auto aspect-[9/16] object-cover rounded-xl"
          />
          <img 
            src="https://starmake.ai/static/img/lib/lib2.png" 
            alt="Reel 2" 
            className="w-full h-auto aspect-[9/16] object-cover rounded-xl mt-4"
          />
        </div>

        {/* Center Column - Larger Image */}
        <div className="col-span-3">
          <img 
            src="https://starmake.ai/static/img/lib/lib3.png" 
            alt="Reel 3" 
            className="w-full h-auto aspect-[9/16] object-cover rounded-xl"
          />
        </div>

        {/* Right Column (Same as Left) */}
        <div className="col-span-2 flex flex-col justify-between">
          <img 
            src="https://starmake.ai/static/img/lib/lib4.png" 
            alt="Reel 4" 
            className="w-full h-auto aspect-[9/16] object-cover rounded-xl"
          />
          <img 
            src="https://starmake.ai/static/img/lib/lib5.png" 
            alt="Reel 5" 
            className="w-full h-auto aspect-[9/16] object-cover rounded-xl mt-4"
          />
        </div>
      </div>
    </div>
  );
};

const Lib: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-blue-900 text-white p-10 items-center">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-4xl font-bold">
          Библиотека <span className="text-lime-400">лучших трендов REELS</span> в Instagram
        </h3>
        <p className="mt-4 text-lg text-gray-300">
          Мы собрали 10 000 видео для вашего вдохновения, благодаря которым авторы стали звездами. 
          Выбирайте нишу: бизнес, одежда, товары, красота, услуги, спорт, недвижимость, рестораны, развлечения и другие.
        </p>
      </div>
      
      {/* Right Side - Updated Image Grid */}
      <div className="md:w-1/2">
        <ImageGrid />
      </div>
    </div>
  );
};

export default Lib;