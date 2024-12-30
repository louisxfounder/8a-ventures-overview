import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import { PrinciplesSidebar } from "@/components/PrinciplesSidebar";
import { principles } from "@/data/principles";
import type { PrincipleContent } from "@/data/principles";

const CorePrinciples = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<PrincipleContent>(principles[0]);

  const handlePrincipleSelect = (principle: PrincipleContent) => {
    console.log('Selected principle:', principle); // Debug log
    setSelectedPrinciple(principle);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <SidebarProvider defaultOpen={true}>
          <div className="flex w-full">
            <PrinciplesSidebar
              principles={principles}
              selectedPrinciple={selectedPrinciple}
              onPrincipleSelect={handlePrincipleSelect}
            />
            
            <main className="flex-1 p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPrinciple.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-2xl mx-auto"
                >
                  <h1 className="text-2xl font-medium mb-8 tracking-tight">
                    {selectedPrinciple.title}
                  </h1>
                  <div className="text-base leading-relaxed text-muted-foreground font-light whitespace-pre-line">
                    {selectedPrinciple.content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default CorePrinciples;