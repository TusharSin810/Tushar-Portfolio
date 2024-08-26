import React, { useEffect, useState } from 'react';

const LoadingContainer = ({ isActive }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [rollingStarted, setRollingStarted] = useState(false);
  const words = [
    'स्वागत हे',
    'Bonjour',
    'Hola',
    'Ciao',
    'Olá',
    'おい',
    'Hallå',
    'Guten tag',
    'Hallo',
    'Hello'
  ];

  useEffect(() => {
    if (!isActive) return;

    const initialTimeout = setTimeout(() => {
      setRollingStarted(true);
    }, 600);

    return () => clearTimeout(initialTimeout);
  }, [isActive]);

  useEffect(() => {
    if (!rollingStarted || !isActive) return;

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 180);

    return () => clearInterval(wordInterval);
  }, [rollingStarted, isActive, words.length]);

  return (
    <div className={"fixed inset-0 flex items-center justify-center bg-black"}>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          &#8226; {words[currentWord]}
        </h2>
      </div>
    </div>
  );
};

export default LoadingContainer;
