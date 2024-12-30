import { motion } from "framer-motion";

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
      title: "We Learn About the People We Serve",
      content: "We take the time to understand what our customers (or investors) truly want. This helps us build solutions that work in real life."
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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Core Principles
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to Our Core Principles. This page outlines the basic guidelines we follow in every business we build. Each principle keeps us focused on delivering real value, running a well-organized system, and growing at the right pace.
          </p>
        </motion.div>

        {/* Principles Section */}
        <div className="space-y-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-lg p-6 hover:bg-secondary/80 transition-colors"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {principle.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 bg-secondary/50 rounded-lg p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why These Principles Matter
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            By following these guidelines, we focus on real solutions, honest communication, smart financial steps, and reliable systems. Our aim is always to deliver steady, meaningful results that stand the test of time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CorePrinciples;