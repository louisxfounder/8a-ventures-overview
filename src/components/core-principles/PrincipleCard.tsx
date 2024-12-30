import { motion } from "framer-motion";

interface PrincipleCardProps {
  title: string;
  content: string;
  index: number;
}

const PrincipleCard = ({ title, content, index }: PrincipleCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-secondary rounded-lg p-4 hover:bg-secondary/80 transition-colors"
  >
    <h2 className="text-base md:text-lg font-semibold mb-2">
      {title}
    </h2>
    <p className="text-sm text-gray-300 leading-relaxed">
      {content}
    </p>
  </motion.div>
);

export default PrincipleCard;