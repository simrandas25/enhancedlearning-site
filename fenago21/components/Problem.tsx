import Image from "next/image";

const Problem = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-gray-900 py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gray-800 opacity-5"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-red-300">⚠️ Critical System Failures</span>
          </div>
          
          <h2 className="font-black text-4xl lg:text-6xl tracking-tight mb-6">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Universities Are
            </span>
            <br />
            <span className="text-white">
              Drowning in Chaos
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            While technology advances at light speed, higher education institutions remain trapped in 
            <span className="font-bold text-red-400"> antiquated systems</span> that are bleeding resources, 
            frustrating faculty, and failing students.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-red-500/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300">
            <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">System Fragmentation Crisis</h3>
              <p className="text-gray-300 leading-relaxed">
                Universities juggle <span className="text-red-400 font-semibold">15+ disconnected systems</span> for 
                student records, finance, HR, and operations. Data silos create chaos, duplicate work, and 
                critical information gaps.
              </p>
            </div>
            <div className="flex items-center text-sm text-red-400 font-mono">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
              Critical Priority
            </div>
          </div>

          {/* Problem 2 */}
          <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-400/40 transition-all duration-300">
            <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-ping delay-300"></div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Faculty Burnout Epidemic</h3>
              <p className="text-gray-300 leading-relaxed">
                Professors spend <span className="text-orange-400 font-semibold">40% of their time</span> on 
                administrative tasks instead of teaching and research. Manual processes drain talent and 
                stifle innovation.
              </p>
            </div>
            <div className="flex items-center text-sm text-orange-400 font-mono">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              High Priority
            </div>
          </div>

          {/* Problem 3 */}
          <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-700"></div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Financial Hemorrhaging</h3>
              <p className="text-gray-300 leading-relaxed">
                Inefficient operations cost universities <span className="text-yellow-400 font-semibold">millions annually</span>. 
                Budget constraints force difficult choices between technology upgrades and educational quality.
              </p>
            </div>
            <div className="flex items-center text-sm text-yellow-400 font-mono">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Medium Priority
            </div>
          </div>
        </div>

        {/* Impact visualization */}
        <div className="mt-20 p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">The Devastating Impact</h3>
            <p className="text-gray-300">Real consequences of outdated university systems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                $2.3M
              </div>
              <div className="text-sm text-gray-400">Annual waste per university</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                40%
              </div>
              <div className="text-sm text-gray-400">Faculty time on admin</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm text-gray-400">Disconnected systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-2">
                72%
              </div>
              <div className="text-sm text-gray-400">Student frustration rate</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-300 mb-8">
            <span className="font-bold text-red-400">The status quo is unsustainable.</span>
            <br />
            Universities need a revolutionary solution—now.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
            <span className="text-purple-300 font-medium">⚡ The solution is here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
