import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-[150px] w-[150px] bg-neutral-200 dark:bg-slate-800/[0.8] rounded-xl border-8 border-white"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card isHovered={hoveredIndex === idx} item={item} />
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children, isHovered, item }) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-[#4D0011] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700",
        "h-[150px] w-[130px] sm:w-[150px]",
        className
      )}
    >
      <div className="relative z-50 flex items-center justify-center h-full">
        {isHovered ? (
          <p className="text-black font-semibold text-center">{item?.name || "Default Text"}</p>
        ) : (
          <img
            src={item.images}
            className="object-scale-down rounded-md h-[120px] w-full"
            alt="Item"
          />
        )}
      </div>
    </div>
  );
};
