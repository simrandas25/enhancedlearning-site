import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto px-8 text-center">
        {/* Revolutionary badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-8">
          <span className="text-sm font-medium text-purple-300">🚀 Join the Revolution</span>
        </div>

        {/* Main headline */}
        <h2 className="font-black text-5xl lg:text-7xl tracking-tight leading-none mb-8">
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Ready to Transform
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Your University?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
          Join <span className="font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">150+ forward-thinking universities</span> 
          that have already revolutionized their operations with EnhancedLearning's AI platform.
        </p>

        {/* Revolutionary stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              75%
            </div>
            <div className="text-lg text-white font-semibold mb-2">Cost Reduction</div>
            <div className="text-gray-400">Average savings within 6 months</div>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              18%
            </div>
            <div className="text-lg text-white font-semibold mb-2">Retention Boost</div>
            <div className="text-gray-400">Improved student outcomes</div>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-pink-500/20 backdrop-blur-sm">
            <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              24/7
            </div>
            <div className="text-lg text-white font-semibold mb-2">AI Operations</div>
            <div className="text-gray-400">Continuous optimization</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-white text-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-3">
              Start Your Revolution
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-12 py-5 border-2 border-purple-500/50 rounded-2xl font-semibold text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm text-xl">
            Schedule Demo
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span>FERPA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Urgency message */}
        <div className="p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
            <span className="text-orange-300 font-semibold">Limited Time Offer</span>
          </div>
          <p className="text-white text-lg">
            <span className="font-bold">Early adopter universities</span> receive exclusive access to our 
            revolutionary AI modules and <span className="text-orange-400 font-bold">50% off implementation</span> costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
