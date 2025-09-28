import ButtonCheckout from "./ButtonCheckout";

// Simple checkmark icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// PRICING DATA
const pricing = [
  {
    name: "Academic Starter",
    description: "Perfect for small colleges and community institutions",
    price: 2499,
    priceAnchor: 4999,
    features: [
      "Up to 5,000 students",
      "Basic AI scheduling optimization",
      "Student analytics dashboard",
      "Email support",
      "FERPA compliance tools",
      "Mobile app access"
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
    borderGradient: "from-blue-500/50 to-cyan-500/50"
  },
  {
    name: "University Pro",
    description: "Comprehensive AI platform for mid-sized universities",
    price: 7499,
    priceAnchor: 12999,
    features: [
      "Up to 25,000 students",
      "Advanced predictive analytics",
      "Faculty workload optimization",
      "Automated compliance monitoring",
      "Custom integrations",
      "24/7 priority support",
      "AI-powered resource allocation",
      "Real-time performance insights"
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-500",
    borderGradient: "from-purple-500/50 to-pink-500/50"
  },
  {
    name: "Enterprise Elite",
    description: "Revolutionary AI transformation for large institutions",
    price: 19999,
    priceAnchor: 35999,
    features: [
      "Unlimited students & faculty",
      "Full AI ecosystem deployment",
      "Quantum-inspired data processing",
      "Dedicated success manager",
      "Custom AI model training",
      "White-label solutions",
      "Advanced security protocols",
      "Multi-campus orchestration",
      "Predictive financial modeling",
      "Research collaboration AI"
    ],
    popular: false,
    gradient: "from-yellow-500 to-orange-500",
    borderGradient: "from-yellow-500/50 to-orange-500/50"
  },
];

const Pricing = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gray-800 opacity-5"></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-purple-300">💎 Revolutionary Pricing</span>
          </div>
          
          <h2 className="font-black text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              University Today
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Choose the perfect AI transformation package for your institution. 
            <span className="font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text"> Save up to 75% on operational costs</span> 
            while revolutionizing student outcomes.
          </p>

          {/* Savings banner */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-300 font-semibold">🎯 Early Adopter Pricing - Limited Time</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricing.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative group ${plan.popular ? 'lg:scale-110 lg:z-10' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-sm shadow-2xl">
                    🚀 Most Popular
                  </div>
                </div>
              )}

              <div className={`relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl border-2 ${plan.popular ? 'border-purple-500/50' : 'border-gray-700/50'} backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105`}>
                
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className={`font-bold text-2xl mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl text-gray-500 line-through">${plan.priceAnchor.toLocaleString()}</span>
                      <div className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full">
                        <span className="text-red-300 text-sm font-semibold">
                          {Math.round(((plan.priceAnchor - plan.price) / plan.priceAnchor) * 100)}% OFF
                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="text-center">
                  <ButtonCheckout 
                    priceId={`price_${plan.name.toLowerCase().replace(' ', '_')}`}
                    className={`w-full px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105' 
                        : `bg-gradient-to-r ${plan.gradient} hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105`
                    }`}
                  >
                    {plan.popular ? 'Start Revolution' : 'Get Started'}
                  </ButtonCheckout>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom guarantee section */}
        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-3xl border border-blue-500/20 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-white">
                100% Satisfaction Guarantee
              </h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Not seeing transformational results within 90 days? Get a full refund, no questions asked.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>90-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span>Free Migration Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                <span>Dedicated Success Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
