import { Building2, TrendingUp, Laptop, Megaphone, Shield, Music } from 'lucide-react';

const ventures = [
  {
    title: 'Genesis Capital Technologies',
    description: 'Automated trading systems aimed at generating consistent market returns.',
    icon: TrendingUp,
    category: 'Trading',
  },
  {
    title: 'CoFlips',
    description: 'Professional house and land flipping through a licensed contractor model.',
    icon: Building2,
    category: 'Real Estate',
  },
  {
    title: 'Global Tech Operations',
    description: 'Partnerships and investments in emerging technology ventures.',
    icon: Laptop,
    category: 'Tech Startups',
  },
  {
    title: 'MarketingEdge',
    description: 'In-house digital marketing and paid media expertise.',
    icon: Megaphone,
    category: 'Marketing',
  },
  {
    title: 'PrivateApp',
    description: 'A privacy-first app offering secure messaging, content storage, and advanced access controls.',
    icon: Shield,
    category: 'Privacy & Security',
  },
  {
    title: 'Priam Digital',
    description: 'A forward-thinking music distribution platform offering comprehensive tech-driven solutions.',
    icon: Music,
    category: 'Music Technology',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each venture operates independently with its own management, objectives, and processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div
              key={venture.title}
              className="bg-secondary p-6 rounded-lg border border-border hover:border-gray-700 transition-colors animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <venture.icon className="w-6 h-6 mr-3" />
                <span className="text-sm text-gray-400">{venture.category}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{venture.title}</h3>
              <p className="text-gray-300">{venture.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;