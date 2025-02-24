import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectionScreen.css';
import templateImage from '../assets/template-image.png'; // Картинка для синего блока
import plusIcon from '../assets/plus-icon.png'; // Картинка плюса

const SelectionScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="selection-container">
      <h1 className="selection-title">Выберите свой вариант развития</h1>
      <div className="selection-options">
        
        {/* Белый блок */}
        <div className="option-box white-box" onClick={() => navigate('/next')}>
          <img src={plusIcon} alt="Плюс" className="plus-icon" />
          <h2>СОЗДАТЬ СЦЕНАРИЙ С ПУСТОГО ЛИСТА</h2>
          <p>Напишите текст озвучки вручную</p>
        </div>

        {/* Синий блок */}
        <div className="option-box blue-box" onClick={() => navigate('/templates')}>
          <img src={templateImage} alt="Шаблоны" className="template-image" />
          <h2>ИСПОЛЬЗОВАТЬ ШАБЛОНЫ</h2>
          <p>Собрать сценарий с помощью готового конструктора</p>
        </div>

      </div>
    </div>
  );
};

export default SelectionScreen;
