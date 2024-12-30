import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroSection from "../components/core-principles/IntroSection";
import PrincipleCard from "../components/core-principles/PrincipleCard";
import ClosingNote from "../components/core-principles/ClosingNote";

const CorePrinciples = () => {
  const principles = [
    {
      title: "We Fix Real Problems",
      content: "We only start a business if it solves a clear and genuine need. If there's no real need, there's no reason to begin."
    },
    {
      title: "We Start Small",
      content: "We keep teams and plans simple at first. This helps us move quickly, learn fast, and avoid taking on too much too soon."
    },
    {
      title: "We Use Plain Language",
      content: "We explain everything in a way anyone can understand. No fancy words, no hidden details—everyone should know what's going on and why."
    },
    {
      title: "We Build Trust by Doing What We Say",
      content: "We stay honest, stick to our promises, and show real examples of our work. Trust grows when actions match words."
    },
    {
      title: "We Plan Our Money Carefully",
      content: "We keep track of how much we invest, how much we expect to earn, and how quickly this might happen. We also plan for market ups and downs so we're not caught off guard."
    },
    {
      title: "We Treat Each Business as a System",
      content: "We set up each venture like an assembly line—clear steps for sales, product delivery or service, customer support, and administrative tasks. Every part should fit together smoothly so we can deliver consistent results and spot problems quickly."
    },
    {
      title: "We Grow at the Right Pace",
      content: "We expand only when we're sure our system can handle it without lowering our quality. Steady, manageable growth beats rushing and risking chaos."
    },
    {
      title: "We Aim for Long-Lasting Improvements",
      content: "Our goal is to make a positive, lasting difference in people's lives. If our work truly helps, we've done our job well."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <IntroSection />
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={index}
                index={index}
                title={principle.title}
                content={principle.content}
              />
            ))}
          </div>
          <ClosingNote />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CorePrinciples;