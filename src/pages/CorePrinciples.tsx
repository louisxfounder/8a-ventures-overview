import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroSection from "../components/core-principles/IntroSection";
import PrincipleCard from "../components/core-principles/PrincipleCard";
import ClosingNote from "../components/core-principles/ClosingNote";

const CorePrinciples = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      title: "We Fix Real Problems",
      summary: "We only start a business if it solves a clear and genuine need. If there's no real need, there's no reason to begin.",
      details: (
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-3">Why People Buy: A Basic Theory</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. People Have Problems or Desires</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Most of the time, people buy something because it fixes a problem or meets a specific need.</li>
                  <li>This could be a practical need (e.g., "I need a more secure way to store photos") or an emotional need (e.g., "I don't want to feel stressed about losing data").</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">2. They Pay for Solutions</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>When a product or service promises to solve a real issue, people are willing to spend money on it.</li>
                  <li>The better or clearer the solution, the more likely it is they'll pay for it—especially if the problem causes discomfort or worry.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">3. Motivation: Pain Relief or Goal Fulfillment</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pain Relief: Some problems cause pain (physical, emotional, or mental). If a solution removes or reduces that pain, people feel motivated to buy.</li>
                  <li>Goal Fulfillment: Other problems are "gaps" between where a person is and where they want to be.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">4. Value = Problem Solved</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>People see value in something if it fixes their situation or closes the gap between their current state and a better outcome.</li>
                  <li>The bigger the problem (or the more relief someone expects), the more valuable the solution becomes in their eyes.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      title: "We Start Small",
      summary: "We keep teams and plans simple at first. This helps us move quickly, learn fast, and avoid taking on too much too soon.",
      details: (
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-3">1. The Theory: Why Start Small?</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Fast Learning & Flexibility</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Small teams can adapt to new information quickly. When fewer people are involved, decisions happen faster and there's less internal "red tape."</li>
                  <li>This lets you test ideas, gather feedback, and make pivots without wasting time or resources.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Lower Upfront Costs</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Keeping the initial team small reduces payroll and overhead.</li>
                  <li>You're spending fewer resources in the early stages, which minimizes risk.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">2. Essential Mechanisms</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clear Roles & Responsibilities</li>
              <li>Basic Operating System (Processes & SOPs)</li>
              <li>Financial Tracking</li>
              <li>Product or Service Delivery</li>
              <li>Feedback Loop</li>
            </ul>
          </section>
        </div>
      )
    },
    {
      title: "We Use Plain Language",
      summary: "We explain everything in a way anyone can understand. No fancy words, no hidden details—everyone should know what's going on and why.",
      details: (
        <div className="space-y-4">
          <p>We believe in clear, straightforward communication that everyone can understand.</p>
        </div>
      )
    },
    {
      title: "We Build Trust by Doing What We Say",
      summary: "We stay honest, stick to our promises, and show real examples of our work. Trust grows when actions match words.",
      details: (
        <div className="space-y-4">
          <p>Our actions consistently align with our words to build lasting trust.</p>
        </div>
      )
    },
    {
      title: "We Plan Our Money Carefully",
      summary: "We keep track of how much we invest, how much we expect to earn, and how quickly this might happen.",
      details: (
        <div className="space-y-4">
          <p>Financial planning and careful tracking are essential parts of our business approach.</p>
        </div>
      )
    },
    {
      title: "We Treat Each Business as a System",
      summary: "We set up each venture like an assembly line—clear steps for sales, product delivery or service, customer support, and administrative tasks.",
      details: (
        <div className="space-y-4">
          <p>Every business is structured as a well-organized system with clear processes.</p>
        </div>
      )
    },
    {
      title: "We Grow at the Right Pace",
      summary: "We expand only when we're sure our system can handle it without lowering our quality.",
      details: (
        <div className="space-y-4">
          <p>Sustainable growth is prioritized over rapid expansion to maintain quality.</p>
        </div>
      )
    },
    {
      title: "We Aim for Long-Lasting Improvements",
      summary: "Our goal is to make a positive, lasting difference in people's lives.",
      details: (
        <div className="space-y-4">
          <p>We focus on creating sustainable, meaningful impact through our work.</p>
        </div>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <IntroSection />
          
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar - Now always visible on mobile as well */}
            <div className="mb-6 lg:mb-0">
              <nav className="sticky top-24 space-y-1 bg-card rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4 px-4">Core Principles</h2>
                {principles.map((principle, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePrinciple(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activePrinciple === index
                        ? "bg-secondary text-white font-medium"
                        : "text-gray-400 hover:text-white hover:bg-secondary/50"
                    }`}
                  >
                    {principle.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <PrincipleCard
                title={principles[activePrinciple].title}
                summary={principles[activePrinciple].summary}
                details={principles[activePrinciple].details}
                isActive={true}
                onClick={() => {}}
              />
              <ClosingNote />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CorePrinciples;