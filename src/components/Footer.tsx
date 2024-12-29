const Footer = () => {
  return (
    <footer className="bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">8a Projects</h2>
          <p className="text-gray-300 mb-12 max-w-md mx-auto text-lg">
            A holding company presenting transparent insights into multiple independent business ventures.
          </p>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} 8a Projects. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;