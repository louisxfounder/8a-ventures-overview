import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrincipleCard from "../components/core-principles/PrincipleCard";

const CorePrinciples = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      title: "We Fix Real Problems",
      summary: "We only start a business if it solves a clear and genuine need.",
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
      summary: "We keep teams and plans simple at first to move quickly and learn fast.",
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
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar */}
            <div className="hidden lg:block">
              <nav className="sticky top-24 space-y-2">
                {principles.map((principle, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePrinciple(index)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activePrinciple === index
                        ? "bg-secondary text-white"
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
              {principles.map((principle, index) => (
                <PrincipleCard
                  key={index}
                  title={principle.title}
                  summary={principle.summary}
                  details={principle.details}
                  isActive={activePrinciple === index}
                  onClick={() => setActivePrinciple(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CorePrinciples;