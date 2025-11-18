'use client';

import { useState } from 'react';
import AssessmentForm from '@/components/AssessmentForm';
import ResultsDisplay from '@/components/ResultsDisplay';

export default function Home() {
  const [assessment, setAssessment] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);
    setAssessment(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();
      setAssessment(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            AI Vendor Risk Analyst
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Independent risk assessment for AI tools, meeting bots, and SaaS applications.
            We dig into real user experiences, not just vendor claims.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <AssessmentForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          {/* Right Column - Results */}
          <div>
            {isLoading && (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Analyzing Vendor...
                </h3>
                <p className="text-slate-600">
                  Researching documentation, social media, forums, and real-world incidents...
                </p>
                <p className="text-sm text-slate-500 mt-4">
                  This may take 2-3 minutes for a thorough analysis
                </p>
              </div>
            )}

            {assessment && !isLoading && (
              <ResultsDisplay assessment={assessment} />
            )}

            {!assessment && !isLoading && (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Ready to Analyze
                </h3>
                <p className="text-slate-600">
                  Fill out the assessment form to get started. We'll search Reddit, forums, news,
                  and social media for real-world experiences with the tool.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          <p>
            Independent risk analysis tool. Not legal advice. Results based on publicly available information.
          </p>
        </footer>
      </div>
    </main>
  );
}
