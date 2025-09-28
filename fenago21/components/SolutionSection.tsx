"use client";

import React from 'react';

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-6 text-[#003366]">
            Imagine Your University Transformed: A Vision of AI-Powered Excellence
          </h2>
          <p className="text-lg lg:text-xl text-[#6C757D] leading-relaxed max-w-4xl mx-auto">
            Picture a campus where data flows seamlessly, decisions are made with confidence, 
            and every stakeholder—from faculty to students to administrators—operates at peak efficiency. 
            This isn't a distant dream; it's the reality our AI platform creates.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-16 mb-16">
          {/* Central AI Core */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#007B80] to-[#28A745] rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="font-bold text-2xl text-[#003366] text-center mb-4">
                  Central AI Intelligence Hub
                </h3>
                <p className="text-[#6C757D] text-center leading-relaxed">
                  Your university's nerve center that connects, analyzes, and optimizes every aspect 
                  of campus operations through intelligent automation.
                </p>
              </div>

              {/* Connected Departments */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#007B80] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-[#003366]">Academic Affairs</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#28A745] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-[#003366]">Student Services</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#007B80] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-[#003366]">IT Operations</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#28A745] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-[#003366]">Finance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#007B80] to-[#28A745] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#003366] mb-2">
                        Unified Data Intelligence
                      </h4>
                      <p className="text-[#6C757D] text-sm leading-relaxed">
                        All your systems speak the same language. No more data silos, 
                        no more manual reconciliation, no more guesswork.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#007B80] to-[#28A745] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#003366] mb-2">
                        Faculty Empowerment
                      </h4>
                      <p className="text-[#6C757D] text-sm leading-relaxed">
                        Professors focus on teaching and research while AI handles 
                        administrative tasks, scheduling, and student analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#007B80] to-[#28A745] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4-2H1m6 16a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#003366] mb-2">
                        Strategic Agility
                      </h4>
                      <p className="text-[#6C757D] text-sm leading-relaxed">
                        Make data-driven decisions in real-time. Adapt quickly to 
                        changing needs and opportunities with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#003366] to-[#007B80] rounded-2xl p-8 text-white">
            <h3 className="font-bold text-2xl lg:text-3xl mb-4">
              Ready to Transform Your University?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join the growing number of forward-thinking institutions that have already 
              embraced AI-powered transformation. The future of higher education starts today.
            </p>
            <button className="bg-[#28A745] hover:bg-[#218838] text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Schedule Your Transformation Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
