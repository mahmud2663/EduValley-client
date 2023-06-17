import React, { useState } from 'react';

const languages = [
  { name: 'JavaScript', code: 'js' },
  { name: 'Python', code: 'py' },
  { name: 'Java', code: 'java' },
  { name: 'C++', code: 'cpp' },
  { name: 'Ruby', code: 'rb' },
  { name: 'Go', code: 'go' },
  { name: 'Swift', code: 'swift' },
  { name: 'TypeScript', code: 'ts' },
  { name: 'Rust', code: 'rs' },
];

const frameworksAndLibraries = [
  { name: 'React', code: 'react' },
  { name: 'Angular', code: 'angular' },
  { name: 'Vue.js', code: 'vue' },
  { name: 'Express.js', code: 'express' },
  { name: 'Django', code: 'django' },
  { name: 'Flask', code: 'flask' },
  { name: 'Spring Boot', code: 'spring' },
  { name: 'Ruby on Rails', code: 'rails' },
  { name: 'Laravel', code: 'laravel' },
  { name: 'jQuery', code: 'jquery' },
];

const Lang = () => {
  const [hoveredLanguage, setHoveredLanguage] = useState('');

  const handleLanguageHover = (language) => {
    setHoveredLanguage(language);
  };

  return (
    <div className="marquee bg-amber text-gray-800 p-4 font-semibold">
      <marquee>
        {languages.map((language) => (
          <span
            key={language.code}
            className={`mr-4 ${hoveredLanguage === language.name ? 'text-lg' : 'bg-slate-700 rounded py-10 px-10 text-xl border-b-4 border-r-4 border-amber-500 text-slate-50'}`}
            onMouseEnter={() => handleLanguageHover(language.name)}
            onMouseLeave={() => handleLanguageHover('')}
          >
            {language.name}
          </span>
        ))}
        {frameworksAndLibraries.map((framework) => (
          <span
            key={framework.code}
            className={`mr-4 ${hoveredLanguage === framework.name ? 'text-lg' : 'bg-slate-700 rounded py-10 px-10 text-xl border-b-4 border-r-4 border-amber-500 text-slate-50'}`}
            onMouseEnter={() => handleLanguageHover(framework.name)}
            onMouseLeave={() => handleLanguageHover('')}
          >
            {framework.name}
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default Lang;




