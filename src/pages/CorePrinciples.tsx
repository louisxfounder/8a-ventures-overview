import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarProvider
} from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";

interface PrincipleContent {
  id: string;
  title: string;
  content: string;
}

const principles: PrincipleContent[] = [
  {
    id: "overview",
    title: "Principles Overview",
    content: "Welcome to Our Core Principles. This page outlines the basic guidelines we follow in every business we build."
  },
  {
    id: "fix-problems",
    title: "Fix Problems",
    content: "We only start a business if it solves a clear and genuine need. If there's no real need, there's no reason to begin."
  },
  {
    id: "start-small",
    title: "Start Small",
    content: "We keep teams and plans simple at first. This helps us move quickly, learn fast, and avoid taking on too much too soon."
  },
  {
    id: "plain-language",
    title: "Plain Language",
    content: "We explain everything in a way anyone can understand. No fancy words, no hidden details—everyone should know what's going on and why."
  },
  {
    id: "do-what-you-say",
    title: "Do What You Say",
    content: "We stay honest, stick to our promises, and show real examples of our work. Trust grows when actions match words."
  },
  {
    id: "take-care-of-capital",
    title: "Take Care of Capital",
    content: "We keep track of how much we invest, how much we expect to earn, and how quickly this might happen."
  },
  {
    id: "business-as-system",
    title: "Business as a System",
    content: "We set up each venture like an assembly line—clear steps for sales, product delivery or service, customer support, and administrative tasks."
  },
  {
    id: "grow-right-pace",
    title: "Grow at the Right Pace",
    content: "We expand only when we're sure our system can handle it without lowering our quality. Steady, manageable growth beats rushing and risking chaos."
  },
  {
    id: "timeless-relationships",
    title: "Timeless Relationships",
    content: "We value people over short-term gains. Respect and direct communication guide our approach to partnerships and teams."
  }
];

const CorePrinciples = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<PrincipleContent>(principles[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <SidebarProvider defaultOpen={true}>
          <div className="flex w-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {principles.map((principle) => (
                        <SidebarMenuItem key={principle.id}>
                          <SidebarMenuButton
                            onClick={() => setSelectedPrinciple(principle)}
                            isActive={selectedPrinciple.id === principle.id}
                          >
                            <span>{principle.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            
            <main className="flex-1 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPrinciple.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-3xl mx-auto"
                >
                  <h1 className="text-3xl font-bold mb-6">{selectedPrinciple.title}</h1>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {selectedPrinciple.content}
                  </p>
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