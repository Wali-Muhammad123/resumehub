'use client';

import html2pdf from 'html2pdf.js'; // Import html2pdf.js
import Mustache from 'mustache'; // Import Mustache templating engine
import { useState } from 'react';

import { Textarea } from '@/components/ui/textarea'; // Assuming you have ShadCN's Textarea component installed
import { htmlTemplate } from '@/resume_templates/v1';

export const JsonToHtmlPreviewer = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');

  // Predefined HTML template with placeholders
  const updateHtmlOutput = (json) => {
    try {
      const jsonObject = JSON.parse(json);
      const output = Mustache.render(htmlTemplate, jsonObject); // Use Mustache to render template
      setHtmlOutput(output);
    } catch (error) {
      setHtmlOutput('<p class="text-red-500">Invalid JSON</p>');
    }
  };

  // Handle JSON input change
  const handleJsonChange = (e) => {
    const json = e.target.value;
    setJsonInput(json);
    updateHtmlOutput(json);
  };

  // Function to replace placeholders in HTML with JSON values using Mustache
  const handleDownloadPDF = () => {
    const element = document.createElement('div');
    element.innerHTML = htmlOutput;

    const options = {
      margin: 1,
      filename: 'downloaded_content.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="flex flex-row gap-6 p-4">
      {/* Column for JSON input */}
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold">JSON Input</h3>
        <Textarea
          rows={10}
          className="w-full rounded-md border border-gray-300 p-2 shadow-sm"
          placeholder="Enter JSON here..."
          value={jsonInput}
          onChange={handleJsonChange}
        />
      </div>

      {/* Column for HTML preview */}
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold">HTML Preview</h3>
        <div
          className="min-h-[300px] rounded-md border border-gray-300 p-4 shadow-sm"
          dangerouslySetInnerHTML={{ __html: htmlOutput }}
        />
      </div>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleDownloadPDF}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default JsonToHtmlPreviewer;
