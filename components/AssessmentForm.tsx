'use client';

import { useState } from 'react';

interface AssessmentFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export default function AssessmentForm({ onSubmit, isLoading }: AssessmentFormProps) {
  const [formData, setFormData] = useState({
    vendorName: '',
    dataSensitivity: '',
    regulatoryContext: '',
    operationalContext: '',
    adminControl: '',
    userScope: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (Object.values(formData).some(value => !value.trim())) {
      alert('Please fill out all fields');
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Risk Assessment Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vendor Name */}
        <div>
          <label htmlFor="vendorName" className="block text-sm font-semibold text-slate-700 mb-2">
            Vendor/App Name *
          </label>
          <input
            type="text"
            id="vendorName"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            placeholder="e.g., Fireflies.ai, Otter.ai, Microsoft Copilot"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        {/* Question 1: Data Sensitivity */}
        <div>
          <label htmlFor="dataSensitivity" className="block text-sm font-semibold text-slate-700 mb-2">
            1. Data Sensitivity *
          </label>
          <p className="text-xs text-slate-600 mb-2">
            Will this tool interact with confidential meetings (board, HR, legal, underwriting, claims, M&A, strategy, financial reviews)?
          </p>
          <textarea
            id="dataSensitivity"
            name="dataSensitivity"
            value={formData.dataSensitivity}
            onChange={handleChange}
            placeholder="Describe what types of sensitive data or meetings this tool will access..."
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        {/* Question 2: Regulatory Context */}
        <div>
          <label htmlFor="regulatoryContext" className="block text-sm font-semibold text-slate-700 mb-2">
            2. Regulatory Context *
          </label>
          <p className="text-xs text-slate-600 mb-2">
            Are you subject to HIPAA, FERPA, GLBA, PCI, state privacy laws, or insurance regulations?
          </p>
          <textarea
            id="regulatoryContext"
            name="regulatoryContext"
            value={formData.regulatoryContext}
            onChange={handleChange}
            placeholder="List applicable regulations or enter 'None' if not applicable..."
            rows={2}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        {/* Question 3: Operational Context */}
        <div>
          <label htmlFor="operationalContext" className="block text-sm font-semibold text-slate-700 mb-2">
            3. Operational Context *
          </label>
          <p className="text-xs text-slate-600 mb-2">
            Which systems will this tool interact with (Teams, Zoom, CRM, email, calendars, databases, etc.)?
          </p>
          <textarea
            id="operationalContext"
            name="operationalContext"
            value={formData.operationalContext}
            onChange={handleChange}
            placeholder="List systems and integrations..."
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        {/* Question 4: Administrative Control */}
        <div>
          <label htmlFor="adminControl" className="block text-sm font-semibold text-slate-700 mb-2">
            4. Administrative Control *
          </label>
          <p className="text-xs text-slate-600 mb-2">
            Do you have centralized IT control over installations, permissions, integrations, and tenant settings?
          </p>
          <textarea
            id="adminControl"
            name="adminControl"
            value={formData.adminControl}
            onChange={handleChange}
            placeholder="Describe your IT control capabilities..."
            rows={2}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        {/* Question 5: User Scope */}
        <div>
          <label htmlFor="userScope" className="block text-sm font-semibold text-slate-700 mb-2">
            5. User Scope *
          </label>
          <p className="text-xs text-slate-600 mb-2">
            Is this for a small group, specific teams, or organization-wide deployment?
          </p>
          <textarea
            id="userScope"
            name="userScope"
            value={formData.userScope}
            onChange={handleChange}
            placeholder="Describe the intended user scope..."
            rows={2}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Vendor Risk'}
        </button>
      </form>

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-900">
          <strong>Note:</strong> This analysis will search Reddit, forums, social media, and news sources 
          for real-world user experiences and incidents, not just vendor marketing materials.
        </p>
      </div>
    </div>
  );
}
