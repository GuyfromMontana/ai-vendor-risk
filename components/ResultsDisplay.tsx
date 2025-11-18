'use client';

interface ResultsDisplayProps {
  assessment: any;
}

export default function ResultsDisplay({ assessment }: ResultsDisplayProps) {
  const getRiskColor = (rating: string) => {
    switch (rating?.toUpperCase()) {
      case 'LOW':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'HIGH':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'CRITICAL':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    if (recommendation?.toLowerCase().includes('do not approve') || recommendation?.toLowerCase().includes('reject')) {
      return 'bg-red-50 border-red-300 text-red-900';
    }
    if (recommendation?.toLowerCase().includes('pilot') || recommendation?.toLowerCase().includes('approve with controls')) {
      return 'bg-yellow-50 border-yellow-300 text-yellow-900';
    }
    if (recommendation?.toLowerCase().includes('approve')) {
      return 'bg-green-50 border-green-300 text-green-900';
    }
    return 'bg-slate-50 border-slate-300 text-slate-900';
  };

  return (
    <div className="space-y-6">
      {/* Executive Briefing */}
      {assessment.executiveBriefing && (
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">📊</span>
            Executive Briefing
          </h2>
          
          {/* Risk Rating Badge */}
          <div className="mb-6">
            <div className={`inline-block px-6 py-3 rounded-lg border-2 font-bold text-lg ${getRiskColor(assessment.executiveBriefing.overallRating)}`}>
              Risk Level: {assessment.executiveBriefing.overallRating}
            </div>
          </div>

          {/* What This Tool Does */}
          {assessment.executiveBriefing.whatItDoes && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">What This Tool Does With Your Data</h3>
              <div className="prose prose-slate max-w-none">
                {assessment.executiveBriefing.whatItDoes}
              </div>
            </div>
          )}

          {/* Key Risks */}
          {assessment.executiveBriefing.keyRisks && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Risks You Should Know</h3>
              <div className="prose prose-slate max-w-none">
                {assessment.executiveBriefing.keyRisks}
              </div>
            </div>
          )}

          {/* Recommended Action */}
          {assessment.executiveBriefing.recommendedAction && (
            <div className={`p-4 rounded-lg border-2 ${getRecommendationColor(assessment.executiveBriefing.recommendedAction)}`}>
              <h3 className="text-lg font-semibold mb-2">Recommended Executive Action</h3>
              <div className="prose prose-slate max-w-none">
                {assessment.executiveBriefing.recommendedAction}
              </div>
            </div>
          )}

          {/* Organization Guidance */}
          {assessment.executiveBriefing.organizationGuidance && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Guidance for All Employees</h3>
              <div className="prose prose-slate max-w-none">
                {assessment.executiveBriefing.organizationGuidance}
              </div>
            </div>
          )}

          {/* Board Note */}
          {assessment.executiveBriefing.boardNote && (
            <div className="mt-6 p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Note for Board Members</h3>
              <div className="prose prose-slate max-w-none text-purple-900">
                {assessment.executiveBriefing.boardNote}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Technical Report */}
      {assessment.technicalReport && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">🔬</span>
            Technical Risk Assessment
          </h2>

          {/* Risk Score */}
          {assessment.technicalReport.riskScore !== undefined && (
            <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Overall Risk Score</h3>
              <div className="text-4xl font-bold text-slate-900">
                {assessment.technicalReport.riskScore}/100
              </div>
              {assessment.technicalReport.riskRating && (
                <div className={`inline-block mt-2 px-4 py-2 rounded-lg border-2 font-bold ${getRiskColor(assessment.technicalReport.riskRating)}`}>
                  {assessment.technicalReport.riskRating}
                </div>
              )}
            </div>
          )}

          {/* Executive Summary */}
          {assessment.technicalReport.executiveSummary && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Executive Summary</h3>
              <div className="prose prose-slate max-w-none whitespace-pre-wrap">
                {assessment.technicalReport.executiveSummary}
              </div>
            </div>
          )}

          {/* Detailed Risk Breakdown */}
          {assessment.technicalReport.detailedBreakdown && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Detailed Risk Breakdown</h3>
              <div className="prose prose-slate max-w-none whitespace-pre-wrap">
                {assessment.technicalReport.detailedBreakdown}
              </div>
            </div>
          )}

          {/* Recommended Controls */}
          {assessment.technicalReport.recommendedControls && (
            <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Recommended Security Controls</h3>
              <div className="prose prose-slate max-w-none text-blue-900 whitespace-pre-wrap">
                {assessment.technicalReport.recommendedControls}
              </div>
            </div>
          )}

          {/* Vendor Questions */}
          {assessment.technicalReport.vendorQuestions && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Questions to Ask the Vendor</h3>
              <div className="prose prose-slate max-w-none whitespace-pre-wrap">
                {assessment.technicalReport.vendorQuestions}
              </div>
            </div>
          )}

          {/* Go/No-Go Recommendation */}
          {assessment.technicalReport.recommendation && (
            <div className={`p-4 rounded-lg border-2 ${getRecommendationColor(assessment.technicalReport.recommendation)}`}>
              <h3 className="text-lg font-semibold mb-2">Final Recommendation</h3>
              <div className="prose prose-slate max-w-none whitespace-pre-wrap">
                {assessment.technicalReport.recommendation}
              </div>
            </div>
          )}

          {/* Compliance Notes */}
          {assessment.technicalReport.complianceNotes && (
            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Compliance & Framework Notes</h3>
              <div className="prose prose-slate max-w-none text-sm whitespace-pre-wrap">
                {assessment.technicalReport.complianceNotes}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            const element = document.createElement('a');
            const file = new Blob([JSON.stringify(assessment, null, 2)], { type: 'application/json' });
            element.href = URL.createObjectURL(file);
            element.download = `risk-assessment-${Date.now()}.json`;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }}
          className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
        >
          Download Full Report (JSON)
        </button>
      </div>
    </div>
  );
}
