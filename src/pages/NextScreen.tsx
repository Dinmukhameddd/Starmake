import React, { useState } from 'react';
import './NextScreen.css';
import AISuggestion from '../components/AISuggestion';

const NextScreen: React.FC = () => {
  const [scriptText, setScriptText] = useState('');

  const handleSubmit = async () => {
    const backendUrl = process.env.REACT_APP_BACK_URL;
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${backendUrl}/sandbox/scenarios/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ text: scriptText })
      });
      if (response.ok) {
        console.log('Запрос успешно отправлен');
      } else {
        console.error('Ошибка при отправке запроса');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="next-container">
      <div className="script-section">
        <h1 className="script-title">Шаг 1. Сценарий</h1>
        <p className="script-subtitle">Напишите текст озвучки</p>
        <textarea
          className="script-textarea"
          value={scriptText}
          onChange={(e) => setScriptText(e.target.value)}
          placeholder="Введите текст здесь..."
        />
      </div>

      <AISuggestion />
      <div className="bottom-bar">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <button onClick={handleSubmit} className="next-button">ДАЛЕЕ</button>
      </div>
    </div>
  );
};

export default NextScreen;