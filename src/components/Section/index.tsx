import { motion } from "framer-motion";

import "./styles.scss";

interface SectionProps {
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, delay = 0.8 }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.section
      transition={{ duration: delay, type: "easeInOut" }}
      initial="initial"
      whileInView="in"
      viewport={{ once: true }}
      variants={pageVariants}
      className="section-container"
    >
      <div className="section-content">{children}</div>
    </motion.section>
  );
};
