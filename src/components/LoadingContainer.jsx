import React, { useEffect, useState } from 'react';

const LoadingContainer = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    'Hello',
    'Bonjour',
    'स्वागत हे',
    'Ciao',
    'Olá',
    'おい',
    'Hallå',
    'Guten tag',
    'Hallo'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded();
    }, 2000); // Adjust this timeout to control the overall loading duration

    return () => clearTimeout(timer);
  }, [onLoaded]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 250); // Adjust this to control the speed of the word change

    return () => clearInterval(wordInterval);
  }, [words.length]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          {words[currentWord]}
          <div className="dot inline-block"></div>
        </h2>
      </div>
    </div>
  );
};

export default LoadingContainer;
