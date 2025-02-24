import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AISuggestion.css';
import aiImage from '../assets/ai-image.png';

const AISuggestion: React.FC = () => {
  const navigate = useNavigate();
  const [aiText, setAiText] = useState('');

  return (
    <div className="ai-suggestion">
      <h2 className="ai-title">Нет идей?</h2>
      <p className="ai-subtitle">Спросите у AI сценариста</p>
      <img src={aiImage} alt="AI помощник" className="ai-image" />
      <textarea
        className="ai-box"
        value={aiText}
        onChange={(e) => setAiText(e.target.value)}
        placeholder="История про работу автосервиса во время карантина...."
      />
      <button className="ai-button" onClick={() => navigate('/ai-response')}>
        СПРОСИТЬ STARMAKE AI
      </button>
    </div>
  );
};

export default AISuggestion;


// import React, { useState } from 'react';
// import './AISuggestion.css';
// import aiImage from '../assets/ai-image.png'; // Картинка для AI

// const AISuggestion: React.FC = () => {
//   const [aiText, setAiText] = useState('');

//   return (
//     <div className="ai-suggestion">
//       <h2 className="ai-title">Нет идей?</h2>
//       <p className="ai-subtitle">Спросите у AI сценариста</p>
//       <img src={aiImage} alt="AI помощник" className="ai-image" />
//       <textarea
//         className="ai-box"
//         value={aiText}
//         onChange={(e) => setAiText(e.target.value)}
//         placeholder="История про работу автосервиса во время карантина...."
//       />
//       <button className="ai-button">СПРОСИТЬ STARMAKE AI</button>
//     </div>
//   );
// };

// export default AISuggestion;
