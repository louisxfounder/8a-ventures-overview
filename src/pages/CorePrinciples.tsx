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
    console.log('Selected principle:', principle);
    setSelectedPrinciple(principle);
  };

  console.log('Current selected principle:', selectedPrinciple);
  console.log('All principles:', principles);

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
            
            <main className="flex-1 p-4 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPrinciple.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-2xl mx-auto"
                >
                  <h1 className="text-xl font-medium mb-6 tracking-tight">
                    {selectedPrinciple.title}
                  </h1>
                  <div className="prose prose-sm prose-gray max-w-none dark:prose-invert">
                    <div className="space-y-6 text-sm leading-relaxed">
                      {selectedPrinciple.content.split('\n\n').map((paragraph, index) => {
                        // Handle bullet points
                        if (paragraph.startsWith('•')) {
                          return (
                            <ul key={index} className="list-disc pl-4 space-y-2">
                              {paragraph.split('\n').map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm">
                                  {item.replace('•', '').trim()}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        // Handle numbered lists
                        else if (/^\d+\./.test(paragraph)) {
                          return (
                            <ol key={index} className="list-decimal pl-4 space-y-2">
                              {paragraph.split('\n').map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm">
                                  {item.replace(/^\d+\.\s*/, '').trim()}
                                </li>
                              ))}
                            </ol>
                          );
                        }
                        // Handle headers
                        else if (paragraph.startsWith('#')) {
                          const level = paragraph.match(/^#+/)[0].length;
                          const text = paragraph.replace(/^#+\s*/, '');
                          const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
                          return (
                            <HeaderTag key={index} className={`text-${level === 1 ? 'lg' : 'base'} font-medium mt-6 mb-3`}>
                              {text}
                            </HeaderTag>
                          );
                        }
                        // Regular paragraphs
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