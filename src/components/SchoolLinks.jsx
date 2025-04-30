import React from 'react';
import fileLinks from '../data/school_links.json'; // Adjust path if needed

const SchoolLinks = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">📁 File Downloads</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {fileLinks.map((file, index) => (
          <a
            key={index}
            href={file.link}
            download
            className="block bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:bg-blue-50 transition"
          >
            <p className="text-gray-800 font-medium">{file.name}</p>
            <p className="text-sm text-blue-600 mt-1">Download</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SchoolLinks;
