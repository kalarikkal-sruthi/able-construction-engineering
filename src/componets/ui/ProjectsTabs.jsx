"use client"
import { useState } from 'react';

export default function ProjectsTabs() { // Changed to uppercase P
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'UAE', content: 'UAE Projects...' },
    { name: 'Qatar', content: 'Qatar Projects...' },
    { name: 'Oman', content: 'Oman Projects...' },
    { name: 'India', content: 'India Projects...' },
  ];

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex space-x-1 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-6 font-medium text-sm rounded-t-lg transition-all duration-200 ${
              activeTab === index
                ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white rounded-b-lg shadow">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}