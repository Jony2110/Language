import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState("uz");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="uz">O'zbekcha</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
      <h1>
        {language === "uz"
          ? "Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer galleyni olib, kitob namunasini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o'zgarishsiz qoldi. U 1960-yillarda Lorem Ipsum parchalarini oʻz ichiga olgan Letraset varaqlarining chiqarilishi va yaqinda Aldus PageMaker kabi ish stoli nashriyot dasturlari, shu jumladan Lorem Ipsum versiyalari bilan ommalashgan."
          : language === "en"
          ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          : "Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным текстом-пустышкой в ​​отрасли с 1500-х годов, когда неизвестный типограф взял гранку шрифтов и переделал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронную верстку, оставшись по существу неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки из Lorem Ipsum, а в последнее время - с программным обеспечением для настольных издательских систем, таким как Aldus PageMaker, включая версии Lorem Ipsum."}
      </h1>
    </div>
  );
}

export default App;
