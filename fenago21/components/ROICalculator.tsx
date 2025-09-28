"use client";

import React, { useState, useEffect } from 'react';

interface ROIInputs {
  facultyCount: number;
  avgFacultySalary: number;
  adminTimePercentage: number;
  adminStaffCount: number;
  avgAdminSalary: number;
  currentITSpend: number;
  studentEnrollment: number;
}

interface ROIResults {
  annualAdminSavings: number;
  facultyTimeSaved: number;
  facultyTimeSavedHours: number;
  operationalEfficiencyGain: number;
  threeYearROI: number;
}

const ROICalculator = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    facultyCount: 150,
    avgFacultySalary: 75000,
    adminTimePercentage: 30,
    adminStaffCount: 25,
    avgAdminSalary: 55000,
    currentITSpend: 200000,
    studentEnrollment: 8000,
  });

  const [results, setResults] = useState<ROIResults>({
    annualAdminSavings: 0,
    facultyTimeSaved: 0,
    facultyTimeSavedHours: 0,
    operationalEfficiencyGain: 25,
    threeYearROI: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = (inputData: ROIInputs): ROIResults => {
    // Faculty time savings calculation (30% of admin time, 40% reduction)
    const facultyAdminHours = inputData.facultyCount * (inputData.adminTimePercentage / 100) * 40 * 52; // 40 hours/week, 52 weeks
    const facultyTimeSavedHours = facultyAdminHours * 0.4; // 40% reduction
    const facultyHourlyRate = inputData.avgFacultySalary / (40 * 52); // Annual salary to hourly
    const facultyTimeSavedValue = facultyTimeSavedHours * facultyHourlyRate;

    // Administrative cost savings (25% efficiency gain)
    const adminSavings = inputData.adminStaffCount * inputData.avgAdminSalary * 0.25;

    // IT cost optimization (15% reduction in maintenance)
    const itSavings = inputData.currentITSpend * 0.15;

    // Total annual savings
    const totalAnnualSavings = facultyTimeSavedValue + adminSavings + itSavings;

    // Assuming average solution cost of $175,000 for ROI calculation
    const solutionCost = 175000;
    const threeYearROI = ((totalAnnualSavings * 3 - solutionCost * 3) / (solutionCost * 3)) * 100;

    return {
      annualAdminSavings: adminSavings + itSavings,
      facultyTimeSaved: facultyTimeSavedValue,
      facultyTimeSavedHours: facultyTimeSavedHours,
      operationalEfficiencyGain: 25,
      threeYearROI: Math.max(threeYearROI, 0),
    };
  };

  const handleInputChange = (field: keyof ROIInputs, value: string) => {
    const numericValue = parseFloat(value) || 0;
    setInputs(prev => ({
      ...prev,
      [field]: numericValue
    }));
  };

  const handleCalculate = () => {
    const newResults = calculateROI(inputs);
    setResults(newResults);
    setShowResults(true);
  };

  useEffect(() => {
    if (showResults) {
      const newResults = calculateROI(inputs);
      setResults(newResults);
    }
  }, [inputs, showResults]);

  const inputFields = [
    {
      label: "Number of full-time faculty",
      key: "facultyCount" as keyof ROIInputs,
      type: "number",
      placeholder: "150",
      min: 1,
    },
    {
      label: "Average faculty salary (annual)",
      key: "avgFacultySalary" as keyof ROIInputs,
      type: "number",
      placeholder: "75000",
      min: 0,
      prefix: "$",
    },
    {
      label: "Estimated percentage of faculty time spent on administrative tasks",
      key: "adminTimePercentage" as keyof ROIInputs,
      type: "number",
      placeholder: "30",
      min: 0,
      max: 100,
      suffix: "%",
    },
    {
      label: "Number of administrative staff",
      key: "adminStaffCount" as keyof ROIInputs,
      type: "number",
      placeholder: "25",
      min: 1,
    },
    {
      label: "Average administrative staff salary (annual)",
      key: "avgAdminSalary" as keyof ROIInputs,
      type: "number",
      placeholder: "55000",
      min: 0,
      prefix: "$",
    },
    {
      label: "Current annual IT spend on legacy system maintenance",
      key: "currentITSpend" as keyof ROIInputs,
      type: "number",
      placeholder: "200000",
      min: 0,
      prefix: "$",
    },
    {
      label: "Average student enrollment",
      key: "studentEnrollment" as keyof ROIInputs,
      type: "number",
      placeholder: "8000",
      min: 1,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl lg:text-4xl tracking-tight mb-6 text-[#007B80]">
            Calculate Your University's AI Advantage: See Your Potential ROI.
          </h2>
          <p className="text-base lg:text-lg text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
            Discover how our intelligent AI platform can transform your operational efficiency, reduce administrative costs, and free up valuable resources. Input a few key metrics to get an instant estimate of your potential savings and benefits.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-[#003366] mb-6">
                Your University Metrics
              </h3>
              
              {inputFields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="block text-sm font-medium text-[#6C757D]">
                    {field.label}
                  </label>
                  <div className="relative">
                    {field.prefix && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6C757D]">
                        {field.prefix}
                      </span>
                    )}
                    <input
                      type={field.type}
                      value={inputs[field.key]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      min={field.min}
                      max={field.max}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B80] focus:border-transparent outline-none transition-colors ${
                        field.prefix ? 'pl-8' : ''
                      } ${field.suffix ? 'pr-8' : ''}`}
                    />
                    {field.suffix && (
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6C757D]">
                        {field.suffix}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={handleCalculate}
                className="w-full bg-[#28A745] hover:bg-[#218838] text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 mt-8"
              >
                Generate My ROI Report
              </button>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-[#003366] mb-6">
                Your Potential ROI
              </h3>

              {showResults ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#007B80] to-[#28A745] p-6 rounded-xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">
                        ${Math.round(results.annualAdminSavings + results.facultyTimeSaved).toLocaleString()}
                      </div>
                      <div className="text-sm opacity-90">
                        Total Annual Savings
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6C757D]">Estimated Annual Administrative Cost Savings:</span>
                        <span className="text-lg font-semibold text-[#FFC107]">
                          ${Math.round(results.annualAdminSavings).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#6C757D]">Estimated Annual Faculty Time Saved:</span>
                        <span className="text-lg font-semibold text-[#FFC107]">
                          ${Math.round(results.facultyTimeSaved).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-xs text-[#6C757D]">
                        ({Math.round(results.facultyTimeSavedHours).toLocaleString()} hours equivalent to {Math.round(results.facultyTimeSavedHours / (40 * 52))} full-time positions)
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6C757D]">Projected Increase in Operational Efficiency:</span>
                        <span className="text-lg font-semibold text-[#FFC107]">
                          {results.operationalEfficiencyGain}%
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6C757D]">Potential ROI in 3 Years:</span>
                        <span className="text-lg font-semibold text-[#FFC107]">
                          {Math.round(results.threeYearROI)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-blue-800">
                          Personalized Consultation Available
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          These calculations are estimates based on industry averages. Contact us for a detailed analysis specific to your institution's unique needs and current systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">
                      Enter your university metrics and click "Generate My ROI Report" to see your potential savings.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
