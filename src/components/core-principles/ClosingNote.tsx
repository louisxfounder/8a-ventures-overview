import { motion } from "framer-motion";

const ClosingNote = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1 }}
    className="mt-12 bg-secondary/50 rounded-lg p-6"
  >
    <h2 className="text-lg md:text-xl font-bold mb-3">
      Why These Principles Matter
    </h2>
    <p className="text-sm text-gray-300 leading-relaxed">
      By following these guidelines, we focus on real solutions, honest communication, smart financial steps, and reliable systems. Our aim is always to deliver steady, meaningful results that stand the test of time.
    </p>
  </motion.div>
);

export default ClosingNote;