import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface PrincipleCardProps {
  title: string;
  summary: string;
  details: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const PrincipleCard = ({ title, summary, details, isActive }: PrincipleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg p-6">
      <div>
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-300 text-lg mb-4">{summary}</p>
      </div>

      <Button
        variant="ghost"
        className="w-full justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? "Show Less" : "Learn More"}</span>
        {isExpanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
      </Button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-gray-300 space-y-4">
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrincipleCard;