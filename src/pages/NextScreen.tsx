import React, { useState } from 'react';
import './NextScreen.css';
import AISuggestion from '../components/AISuggestion';

const NextScreen: React.FC = () => {
  const [scriptText, setScriptText] = useState('');

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
    </div>
  );
};

export default NextScreen;
