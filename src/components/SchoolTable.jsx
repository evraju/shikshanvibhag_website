import React from 'react';
import data from '../data/school_data.json';

const SchoolTable = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">📚 School Data</h2>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Centered table in 8 columns on medium screens and above */}
        <div className="md:col-start-3 md:col-span-8">
          <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-300">
            <table className="min-w-full table-auto text-sm text-left text-gray-700 bg-white">
              <thead className="bg-blue-600 text-white uppercase">
                <tr>
                  <th className="px-4 py-2 border border-blue-500">No</th>
                  <th className="px-4 py-2 border border-blue-500">Block</th>
                  <th className="px-4 py-2 border border-blue-500">CRC</th>
                  <th className="px-4 py-2 border border-blue-500">UDISE Code</th>
                  <th className="px-4 py-2 border border-blue-500">Z. P. School</th>
                  <th className="px-4 py-2 border border-blue-500">MGT</th>
                </tr>
              </thead>
              <tbody>
                {data.map((school, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                  >
                    <td className="px-4 py-2 border border-gray-300">{school["No"]}</td>
                    <td className="px-4 py-2 border border-gray-300">{school["Block"]}</td>
                    <td className="px-4 py-2 border border-gray-300">{school["CRC"]}</td>
                    <td className="px-4 py-2 border border-gray-300">{school["UDISE Code"]}</td>
                    <td className="px-4 py-2 border border-gray-300">{school["School Name"]}</td>
                    <td className="px-4 py-2 border border-gray-300">{school["MGT"] || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolTable;
