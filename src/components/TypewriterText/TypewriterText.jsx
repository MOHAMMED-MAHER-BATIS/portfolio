import { motion } from "framer-motion";

const TypewriterText = ({ text, delayOffset = 0 }) => {
  if (!text) return null;

  return (
    <>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1, delay: delayOffset + index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

export default TypewriterText;
