import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplatesScreen.css';
import AISuggestion from '../components/AISuggestion';

const TemplatesScreen: React.FC = () => {
  const [intro, setIntro] = useState('');
  const [amplifier, setAmplifier] = useState('');
  const [mainText, setMainText] = useState('');
  const [cta, setCta] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const backendUrl = process.env.REACT_APP_BACK_URL;
    const token = localStorage.getItem('token');

    // Собираем все тексты в один большой с переводами строк
    const combinedText = [intro, amplifier, mainText, cta].join('\n');

    try {
      const response = await fetch(`${backendUrl}/sandbox/scenarios/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ text: combinedText })
      });

      if (response.ok) {
        console.log('Запрос успешно отправлен');
        // После успешной отправки — переходим на следующую страницу
        navigate('/next');
      } else {
        console.error('Ошибка при отправке запроса');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="templates-container">
      <div className="script-section">
        <h1 className="script-title">Шаг 1. Сценарий</h1>
        <p className="script-subtitle">Напишите текст озвучки</p>

        {/* Громкое начало */}
        <label className="form-label">Выберите громкое начало</label>
        <select className="form-select" value={intro} onChange={(e) => setIntro(e.target.value)}>
          <option value="">Выберите громкое начало</option>
          <option value="Нам на это потребовалось 2 года, а ты узнаешь это за 30 секунд">
            Нам на это потребовалось 2 года, а ты узнаешь это за 30 секунд
          </option>
          <option value="90% людей допускают эту ошибку">90% людей допускают эту ошибку</option>
          <option value="Было ли у тебя такое, когда (ситуация из жизни). Что с этим делать?">
            Было ли у тебя такое, когда (ситуация из жизни). Что с этим делать?
          </option>
          <option value="Мы потратили на это более _____ денег за последний год, чтобы ты смог...">
            Мы потратили на это более _____ денег за последний год, чтобы ты смог...
          </option>
          <option value="Для всех у кого есть проблемы в _____ вот что нужно делать">
            Для всех у кого есть проблемы в _____ вот что нужно делать
          </option>
          <option value="Благодаря этой вещи, у меня наконец-то _______">
            Благодаря этой вещи, у меня наконец-то _______
          </option>
          <option value="ТОП-5 причин, почему вам нужно ______">
            ТОП-5 причин, почему вам нужно ______
          </option>
          <option value="Мы раньше такого никогда не делали...">
            Мы раньше такого никогда не делали...
          </option>
          <option value="Об этом секрете никто кто говорит, если вы…">
            Об этом секрете никто кто говорит, если вы…
          </option>
          <option value="Вот что вам стоит знать, если вы _____">
            Вот что вам стоит знать, если вы _____
          </option>
          <option value="Подготовьтесь к потрясающему событию (дата)">
            Подготовьтесь к потрясающему событию (дата)
          </option>
          <option value="Не надо делать так _______">
            Не надо делать так _______
          </option>
          <option value="Сравниваем _____ (товар) с этим (товаром)">
            Сравниваем _____ (товар) с этим (товаром)
          </option>
          <option value="Проверь себя на эту ошибку…)">
            Проверь себя на эту ошибку…
          </option>
          <option value="Неприятный факт о …">Неприятный факт о …</option>
          <option value="У меня не получалось …., пока я …">
            У меня не получалось …., пока я …
          </option>
          <option value="План из 3 шагов для …">
            План из 3 шагов для …_
          </option>
          <option value="Главный признак, что …">
            Главный признак, что …
          </option>
          <option value="Вот что будет, если…">
            Вот что будет, если…
          </option>
          <option value="Не все ещё это поняли, но…">
            Не все ещё это поняли, но…
          </option>
          <option value="Самая частая причина …">
            Самая частая причина …
          </option>
          <option value="Главный инсайт за/после …">
            Главный инсайт за/после …
          </option>
          <option value="Сейчас я тебе докажу, что …">
            Сейчас я тебе докажу, что …
          </option>
          <option value="После этого у тебя будет …/ после этого ты сможешь …">
            После этого у тебя будет …/ после этого ты сможешь …
          </option>
          <option value="Вот что изменится, когда ты…">
            Вот что изменится, когда ты…
          </option>
          <option value="Это действие помогло мне…">
            Это действие помогло мне…
          </option>
          <option value="Если бы я сейчас начинал(а)….">
            Если бы я сейчас начинал(а)….
          </option>
          <option value="Я не знаю, как это работает, но …">
            Я не знаю, как это работает, но …
          </option>
          <option value="Никогда не говори …/ никогда не делай…">
            Никогда не говори …/ никогда не делай…
          </option>
          <option value="У меня ушло … лет, чтобы понять: …">
            У меня ушло … лет, чтобы понять: ……
          </option>
          <option value="Общая черта людей, которые ...">
            Общая черта людей, которые ...
          </option>
          <option value="С чего начать ….">
            С чего начать ….
          </option>
          <option value="Я знаю, почему ты …">
            Я знаю, почему ты …
          </option>
          <option value="Если ты правда хочешь …">
            Если ты правда хочешь …
          </option>
        </select>
        <textarea
          className="form-textarea"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          placeholder="Введите текст..."
        />

        
        {/* Усилитель текста */}
        <label className="form-label">Выберите усилитель для текста</label>
        <select className="form-select" value={amplifier} onChange={(e) => setAmplifier(e.target.value)}>
          <option value="">Выберите усилитель для текста</option>
          <option value="Хватит это терпеть___">Хватит это терпеть___</option>
          <option value="Мы готовились к этому два года___">Мы готовились к этому два года___</option>
          <option value="Теперь расскажу как это исправить___">Теперь расскажу как это исправить___</option>
          <option value="Хватит это терпеть___">Хватит это терпеть___</option>
          <option value="Чтобы решить эти проблемы, смотрите видео до конца___">
            Чтобы решить эти проблемы, смотрите видео до конца___
          </option>
        </select>
        <textarea
          className="form-textarea"
          value={amplifier}
          onChange={(e) => setAmplifier(e.target.value)}
          placeholder="Введите текст..."
        />

        <label className="form-label">Расскажите ваш основной текст</label>
        <textarea
          className="form-textarea"
          value={mainText}
          onChange={(e) => setMainText(e.target.value)}
          placeholder="Введите основной текст..."
        />

        <label className="form-label">Призыв к действию</label>
        <textarea
          className="form-textarea"
          value={cta}
          onChange={(e) => setCta(e.target.value)}
          placeholder="Пример: Ставь лайк, подписывайся в инстаграм."
        />
      </div>

      <AISuggestion />

      <div className="bottom-bar">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <button onClick={handleSubmit} className="next-button">
          ДАЛЕЕ
        </button>
      </div>
    </div>
  );
};

export default TemplatesScreen;