import React, { useState } from 'react';
import './AIResponseScreen.css';
import { useNavigate } from 'react-router-dom';

const AIResponseScreen: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [responseVisible, setResponseVisible] = useState(false);

  const [idea, setIdea] = useState('');
  const [scriptText, setScriptText] = useState('');
  const [tags, setTags] = useState('');

  // Функция обработки запроса AI
  const handleAIRequest = () => {
    setLoading(true);
    setResponseVisible(false);
    
    setTimeout(() => {
      setLoading(false);
      setResponseVisible(true);
      setIdea('Загадки прошлого: Неизвестные страницы истории');
      setScriptText(
        'Давайте погрузимся в загадочный мир истории! Сегодня мы расскажем о событиях, о которых мало кто знает. ' +
        'Например, вы слышали о загадочной жизни Эва Розан? Или о том, как один маленький инцидент изменил ход войны? ' +
        'В этом видео мы раскроем факты, которые заставят вас задуматься… ' +
        'Откройте для себя неизведанные страницы истории вместе с нами!'
      );
      setTags('история, загадки, факты, древние цивилизации, обзор');
    }, 2000); // Имитация загрузки 2 секунды
  };

  return (
    <div className="scriptcontainer">
      <div className="left-section scenario__area">
        <h1 className="script-title">Шаг 1. Сценарий</h1>
        <p className="script-subtitle">Напишите текст озвучки</p>
        <textarea className="script-textarea" placeholder="Введите текст здесь..."></textarea>
      </div>

      <div className="right-section bot">
        {/* Сообщение "Идет обработка запроса..." */}
        {loading && (
          <div className="waiting-message">
            Подождите, идет обработка запроса...
          </div>
        )}

        {/* Ответ AI (появляется после загрузки) */}
        {responseVisible && (
          <div className="bot_response">
            <div className="bot__content">
              <input type="text" className="ai-input" value={`Идея: ${idea}`} readOnly />
              <textarea className="ai-input textarea" value={`Текст озвучки: ${scriptText}`} readOnly />
              <input type="text" className="ai-input" value={`Теги: ${tags}`} readOnly />
              <div className="ai-buttons">
                <button className="ai-button">ПЕРЕДЕЛАТЬ</button>
                <button className="ai-button">НАПИСАТЬ ДРУГОЙ ЗАПРОС</button>
              </div>
            </div>
          </div>
        )}

        {/* Кнопка "СПРОСИТЬ STARMAKE AI" (показывается до запроса) */}
        {!loading && !responseVisible && (
          <button className="ai-button main-button" onClick={handleAIRequest}>
            СПРОСИТЬ STARMAKE AI
          </button>
        )}
      </div>

      {/* Нижний прогресс-бар и кнопка "ДАЛЕЕ" */}
      <div className="bottom-bar">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <button className="next-button" onClick={() => navigate('/next')}>ДАЛЕЕ</button>
      </div>
    </div>
  );
};

export default AIResponseScreen;
