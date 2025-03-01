import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AISuggestion.css';
import aiImage from '../assets/ai-image.png';

const AISuggestion: React.FC = () => {
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseVisible, setResponseVisible] = useState(false);
  const [idea, setIdea] = useState('');
  const [scriptText, setScriptText] = useState('');
  const [tags, setTags] = useState('');

  const handleAIRequest = async () => {
    setLoading(true);
    const backendUrl = process.env.REACT_APP_BACK_URL;
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${backendUrl}/sandbox/generate-response/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ user_message: userMessage })
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке запроса');
      }

      const data = await response.json();
      // Ожидается, что ответ имеет вид:
      // {
      //    "variants": [
      //         [ idea, scriptText, tags ]
      //    ]
      // }
      if (data.variants && data.variants.length > 0 && Array.isArray(data.variants[0])) {
        const [receivedIdea, receivedScriptText, receivedTags] = data.variants[0];
        setIdea(receivedIdea);
        setScriptText(receivedScriptText);
        setTags(receivedTags);
      } else {
        console.error('Неверный формат ответа', data);
      }
      setResponseVisible(true);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-suggestion">
      {/* Исходный блок для ввода запроса (скрывается после получения ответа) */}
      {!responseVisible && (
        <>
          <h2 className="ai-title">Нет идей?</h2>
          <p className="ai-subtitle">Спросите у AI сценариста</p>
          <img src={aiImage} alt="AI помощник" className="ai-image" />
          <textarea
            className="ai-box"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="История про работу автосервиса во время карантина...."
          />
          {loading && <p>Подождите, пожалуйста...</p>}
          {!loading && (
            <button className="ai-button main-button" onClick={handleAIRequest}>
              СПРОСИТЬ STARMAKE AI
            </button>
          )}
        </>
      )}

      {/* Блок с ответом от AI (показывается после получения ответа) */}
      {responseVisible && (
        <div className="bot_response">
          <div className="bot__content">
            <input
              type="text"
              className="ai-input"
              value={`Идея: ${idea}`}
              readOnly
            />
            <textarea
              className="ai-input textarea"
              value={`Текст озвучки: ${scriptText}`}
              readOnly
            />
            <input
              type="text"
              className="ai-input"
              value={`Теги: ${tags}`}
              readOnly
            />
            <div className="ai-buttons">
              <button className="ai-button">ПЕРЕДЕЛАТЬ</button>
              <button className="ai-button">НАПИСАТЬ ДРУГОЙ ЗАПРОС</button>
            </div>
          </div>
        </div>
      )}

      {/* Нижний блок с прогресс-баром и кнопкой "ДАЛЕЕ" */}
      <div className="bottom-bar">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <button className="next-button" onClick={() => navigate('/next')}>
          ДАЛЕЕ
        </button>
      </div>
    </div>
  );
};

export default AISuggestion;
