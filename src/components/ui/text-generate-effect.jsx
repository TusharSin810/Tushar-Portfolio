import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  // Split paragraphs first, then split each paragraph into words
  let paragraphsArray = words.split("\n\n").map(paragraph => paragraph.split(" "));

  useEffect(() => {
    // Animate the words of each paragraph one by one
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {paragraphsArray.map((wordsArray, paraIdx) => (
          <div key={paraIdx} className="mb-4">
            {wordsArray.map((word, wordIdx) => (
              <motion.span
                key={word + wordIdx}
                className="dark:text-white text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}>
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
