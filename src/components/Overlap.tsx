import React from "react";

interface OverlapProps {
  icon: React.ReactNode;
  text: string;
}

const IconBullet: React.FC<OverlapProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4 text-white">
      <div className="bg-green-500 text-white p-3 rounded-lg text-lg">{icon}</div>
      <span className="text-lg">{text}</span>
    </div>
  );
};

export default IconBullet;