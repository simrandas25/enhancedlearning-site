import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-20 lg:py-32">
        <div className="flex flex-col gap-8 lg:gap-12 items-center justify-center text-center lg:text-left lg:items-start z-10">
          {/* Revolutionary badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">🚀 Next-Gen AI Platform</span>
          </div>

          <h1 className="font-black text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Revolutionize
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Higher Education
            </span>
            <br />
            <span className="text-white">
              with AI
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
            <span className="font-semibold text-purple-300">EnhancedLearning</span> unleashes the future of academic operations. 
            Our revolutionary AI platform doesn't just improve efficiency—it 
            <span className="font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text"> transforms entire universities</span> into 
            intelligent, adaptive ecosystems.
          </p>

          {/* Revolutionary stats */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-md">
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">75%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">18%</div>
              <div className="text-sm text-gray-400">Retention Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">150+</div>
              <div className="text-sm text-gray-400">Universities</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Start Revolution</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span className="text-green-400">●</span>
              <span>FERPA Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-400">●</span>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-purple-400">●</span>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>

        {/* Revolutionary visual */}
        <div className="lg:w-full relative">
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative bg-gray-900 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-300"></div>
                <div className="h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse delay-700"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-green-400 font-mono text-sm">AI Systems Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping delay-500"></div>
                  <span className="text-blue-400 font-mono text-sm">Processing 10,847 Students</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping delay-1000"></div>
                  <span className="text-purple-400 font-mono text-sm">Optimizing Operations</span>
                </div>
              </div>

              {/* Animated chart visualization */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xs text-gray-400 mb-2">Real-time Efficiency Metrics</div>
                <div className="flex items-end gap-2 h-20">
                  <div className="w-4 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t animate-bounce" style={{height: '60%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t animate-bounce delay-200" style={{height: '80%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t animate-bounce delay-400" style={{height: '100%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-green-600 to-green-400 rounded-t animate-bounce delay-600" style={{height: '75%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t animate-bounce delay-800" style={{height: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
