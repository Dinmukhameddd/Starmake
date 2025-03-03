import React, { useEffect, useState } from 'react';
import './LastScriptScreen.css'; // Импортируем стили
// ↑ Убедитесь, что путь к CSS корректен относительно местоположения файла

const LastScriptScreen: React.FC = () => {
  const [scriptText, setScriptText] = useState('');

  useEffect(() => {
    fetchLastScript();
  }, []);

  const fetchLastScript = async () => {
    const backendUrl = process.env.REACT_APP_BACK_URL;
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${backendUrl}/sandbox/get_last_script/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Ошибка при запросе последнего сценария');
      }

      const data = await response.json();
      setScriptText(data.text);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="last-script-container">
      <h1 className="last-script-title">Ваш сценарий</h1>
      <div className="last-script-box">
        <p>{scriptText}</p>
      </div>
    </div>
  );
};

export default LastScriptScreen;
