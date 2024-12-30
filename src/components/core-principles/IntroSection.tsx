import { motion } from "framer-motion";

const IntroSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h1 className="text-2xl md:text-3xl font-bold mb-4">
      Core Principles
    </h1>
    <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
      Welcome to Our Core Principles. This page outlines the basic guidelines we follow in every business we build. Each principle keeps us focused on delivering real value, running a well-organized system, and growing at the right pace.
    </p>
  </motion.div>
);

export default IntroSection;