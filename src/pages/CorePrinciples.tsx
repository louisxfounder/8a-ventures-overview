import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import { PrinciplesSidebar } from "@/components/PrinciplesSidebar";
import { principles } from "@/data/principles";
import type { PrincipleContent } from "@/data/principles";

const CorePrinciples = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<PrincipleContent>(principles[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("CorePrinciples component mounted");
    console.log("Initial principle:", principles[0]);
  }, []);

  const handlePrincipleSelect = (principle: PrincipleContent) => {
    console.log("Selecting principle:", principle.title);
    setSelectedPrinciple(principle);
  };

  if (!isMounted) {
    console.log("Component not mounted yet");
    return null;
  }

  console.log("Rendering CorePrinciples with principles:", principles);
  console.log("Current selected principle:", selectedPrinciple);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <SidebarProvider>
          <div className="flex w-full min-h-[calc(100vh-4rem)]">
            <PrinciplesSidebar
              principles={principles}
              selectedPrinciple={selectedPrinciple}
              onPrincipleSelect={handlePrincipleSelect}
            />
            
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPrinciple.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-2xl mx-auto"
                >
                  <h1 className="text-base md:text-lg font-medium mb-4 md:mb-6 tracking-tight">
                    {selectedPrinciple.title}
                  </h1>
                  <div className="prose prose-sm prose-gray max-w-none dark:prose-invert">
                    <div className="space-y-4 text-sm leading-relaxed">
                      {selectedPrinciple.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('•')) {
                          return (
                            <ul key={index} className="list-disc pl-4 space-y-2">
                              {paragraph.split('\n').map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm text-muted-foreground">
                                  {item.replace('•', '').trim()}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        else if (/^\d+\./.test(paragraph)) {
                          return (
                            <ol key={index} className="list-decimal pl-4 space-y-2">
                              {paragraph.split('\n').map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm text-muted-foreground">
                                  {item.replace(/^\d+\.\s*/, '').trim()}
                                </li>
                              ))}
                            </ol>
                          );
                        }
                        else if (paragraph.startsWith('#')) {
                          const level = paragraph.match(/^#+/)[0].length;
                          const text = paragraph.replace(/^#+\s*/, '');
                          const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
                          return (
                            <HeaderTag 
                              key={index} 
                              className="text-base font-medium mt-6 mb-2"
                            >
                              {text}
                            </HeaderTag>
                          );
                        }
                        return (
                          <p key={index} className="text-sm text-muted-foreground">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
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