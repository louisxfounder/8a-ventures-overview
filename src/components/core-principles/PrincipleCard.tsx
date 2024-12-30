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

const PrincipleCard = ({ title, summary, details, isActive, onClick }: PrincipleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-secondary rounded-lg p-6 transition-colors ${
        isActive ? 'ring-2 ring-primary' : ''
      }`}
    >
      <div 
        className="flex justify-between items-start gap-4 cursor-pointer"
        onClick={onClick}
      >
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-300">{summary}</p>
        </div>
      </div>

      {isActive && (
        <div className="mt-4">
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
      )}
    </div>
  );
};

export default PrincipleCard;