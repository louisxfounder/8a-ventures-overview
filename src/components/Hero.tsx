const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforming Ideas into Ventures
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          8a Projects is a holding company that provides transparent insights into multiple independent business ventures across trading, real estate, technology, and marketing.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
        >
          Explore Our Portfolio
        </a>
      </div>
    </div>
  );
};

export default Hero;