import config from "@/config";

// FEATURES OF YOUR PRODUCT
// Each feature should be explained in a few words. Try to keep it short.
const features = [
  {
    name: "AI-Powered Academic Operations",
    description: "Revolutionary neural networks optimize course scheduling, resource allocation, and administrative workflows in real-time.",
    icon: "🧠",
    gradient: "from-purple-400 to-blue-600"
  },
  {
    name: "Predictive Student Analytics",
    description: "Advanced machine learning algorithms predict student outcomes and automatically trigger intervention protocols.",
    icon: "📊",
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    name: "Intelligent Faculty Management",
    description: "AI-driven workload distribution and performance optimization reduces faculty burnout by 60%.",
    icon: "👥",
    gradient: "from-cyan-400 to-teal-600"
  },
  {
    name: "Automated Compliance Monitoring",
    description: "Continuous FERPA, ADA, and accreditation compliance tracking with real-time violation prevention.",
    icon: "🛡️",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    name: "Dynamic Resource Optimization",
    description: "Smart allocation of facilities, equipment, and personnel based on predictive demand modeling.",
    icon: "⚡",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    name: "Unified Data Intelligence",
    description: "Break down data silos with our quantum-inspired integration engine connecting all university systems.",
    icon: "🔗",
    gradient: "from-pink-400 to-purple-600"
  },
];

const Features = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-blue-300">⚡ Revolutionary Features</span>
          </div>
          
          <h2 className="font-black text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Next-Generation AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              University Platform
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Experience the future of higher education with our cutting-edge AI platform designed specifically for 
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> academic excellence</span>.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.name}
              className="group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Feature icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 text-2xl shadow-2xl`}>
                {feature.icon}
              </div>
              
              {/* Feature content */}
              <h3 className="font-bold text-xl text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.name}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-3xl border border-purple-500/20 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="font-bold text-3xl text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution transforming higher education worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500/50 rounded-2xl font-semibold text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
