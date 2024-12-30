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
    content: `Welcome to Our Core Principles. This page outlines the basic guidelines we follow in every business we build. Each principle keeps us focused on delivering real value, running a well-organized system, and growing at the right pace.

We only start a business if it solves a clear and genuine need. If there's no real need, there's no reason to begin.

Why These Principles Matter
By following these guidelines, we focus on real solutions, honest communication, smart financial steps, and reliable systems. Our aim is always to deliver steady, meaningful results that stand the test of time.`
  },
  {
    id: "fix-problems",
    title: "Fix Problems",
    content: `We only start a business if it solves a clear and genuine need. If there's no real need, there's no reason to begin.

Understanding External vs. Internal Problems

When people seek out a product or service, they usually start with an external problem—something obvious and surface-level, like:
• "My photos aren't safely stored."
• "I'm not losing weight despite my efforts."
• "I can't find a good daycare."

But the real trigger that makes them actually buy comes from their internal problem—the feeling behind that external need. It might be anxiety ("What if someone sees my private photos?"), shame ("I feel embarrassed about my weight"), or worry ("Am I failing my child by not finding good daycare?").

Why This Matters:
• People's buying decisions often hinge on their emotions, not just the facts.
• Speaking to the internal problem (the fear, anxiety, frustration, or longing) makes your solution resonate more deeply.
• When you acknowledge both the external issue and the internal struggle, customers are more likely to trust you, because you're addressing what they truly feel.

Goal:
• Present a product that fixes the external issue (e.g., an app for secure photo storage).
• Communicate how it eases the internal worry or frustration ("Feel at peace knowing your personal pictures stay private").

1. Why People Buy: The Basics

People Have Problems or Desires
• They might feel a specific pain (e.g., data loss stress, being overweight) or want to reach a goal (e.g., stronger body, safer photos).
• Example: A busy parent is frustrated that all their personal photos are scattered and unprotected online, and they're worried about leaks.

They Pay for Solutions
• If a product/service clearly solves a real, pressing issue, people see it as valuable.
• Example: This busy parent is willing to pay for a secure photo storage app if it truly keeps their pictures private.

Motivation: Pain Relief or Goal Fulfillment
• Pain Relief: "I'm tired of worrying about X; I need relief now."
• Goal Fulfillment: "I want to reach Y, and I need help getting there."
• Example: Pain relief = fear of embarrassing photo leaks; goal fulfillment = the confidence of knowing precious memories are safe.

Value = Problem Solved
• The bigger or more urgent the problem, the higher the perceived value in fixing it.
• Example: If losing or leaking photos would cause major anxiety, then a reliable privacy solution is seen as extremely valuable.

2. The Hero's Journey (StoryBrand Approach)

In StoryBrand, we position the customer as the hero of the story. You (as the business) act as the guide who helps them on their journey. The framework often looks like this:

A Hero Has a Problem
• The customer (hero) is facing a challenge or gap.
• Example Hero Problem: "I'm worried someone will see my private photos" or "I can't lose weight despite trying so many diets."

They Meet a Guide
• The business (guide) appears with empathy (understanding the problem) and authority (offering a proven solution).
• Example: "Our secure app ensures your photos remain private, using top-level encryption."

The Guide Gives Them a Plan
• Present a simple path for the hero to follow.
• Example Steps:
1. Download the secure photo app.
2. Sync your photo library.
3. Rest easy knowing your pictures are safe.

Call to Action
• The hero is prompted to use or buy the solution.
• Example CTA: "Start your free trial and protect your memories today!"

Success or Failure
• Success: The hero solves their problem and feels relief, pride, or excitement.
• Failure: Without the solution, the hero remains stuck, anxious, or at risk.
• Example: Success = no more stress or fear of leaks; Failure = embarrassing data breach, or losing important pictures forever.

3. Tying It All Together: Examples

A. Weight-Loss Journey
• Hero's Problem (External): "I'm overweight and it hurts my self-confidence."
• Hero's Problem (Internal): "I feel ashamed and out of control."
• Guide's Plan: Provide a simple diet/exercise roadmap + a supportive community.
• Call to Action: "Join our 30-day program and see real progress."
• Success: "Lose weight, feel confident, and gain energy," or Failure: stay stuck in low self-esteem.

B. Secure Photo Storage
• Hero's Problem (External): "My personal images aren't safe—someone could hack or leak them."
• Hero's Problem (Internal): "I'm anxious about being humiliated or invaded."
• Guide's Plan: "Download our private app, sync your photos, and safeguard them with encryption."
• Call to Action: "Get the premium version for total peace of mind."
• Success: "My memories are protected, and I feel relieved;" or Failure: "I stay worried about leaks."

4. Why This Matters for Your Business

• Emotional Connection: Recognizing the internal struggle (fear, anxiety, frustration) fosters deeper trust.
• Clear, Simple Plan: When customers see an easy path forward, they're more likely to act.
• Sense of Urgency: By highlighting what they might lose or miss out on, you help them realize the cost of not solving the problem.
• Lasting Customer Loyalty: Guiding someone from problem to solution builds a strong relationship, often leading to repeat business or referrals.

5. Practical Tips

1. Speak to the Internal Problem: Whether it's fear, shame, or frustration, show you understand how they feel.
2. Offer a Straightforward Plan: Present just a few steps so they're not overwhelmed.
3. Use Before/After Visions: Paint a clear picture of the hero's life if they do (or don't) take action.
4. Stay Honest: Promise only what your solution truly delivers—avoid hype that sets unrealistic expectations.

Final Thoughts

When you combine the idea that people buy to solve both practical and emotional needs with a StoryBrand-style narrative, you create a powerful message that resonates. Customers see themselves as the hero, facing a real challenge, guided by a trustworthy mentor (your business) who provides a clear plan and outcome. This aligns why people buy with the hero's journey—turning everyday transactions into meaningful solutions.`
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
      <div className="pt-16">
        <SidebarProvider defaultOpen={true}>
          <div className="flex w-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup className="h-[calc(100vh-4rem)] flex items-center">
                  <SidebarGroupContent className="w-full py-24">
                    <SidebarMenu className="max-h-full overflow-y-auto px-2 flex flex-col">
                      {principles.map((principle) => (
                        <SidebarMenuItem key={principle.id}>
                          <SidebarMenuButton
                            onClick={() => setSelectedPrinciple(principle)}
                            isActive={selectedPrinciple.id === principle.id}
                            className="text-sm py-2 w-full hover:bg-accent"
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
                  <p className="text-base leading-relaxed text-muted-foreground font-light whitespace-pre-line">
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