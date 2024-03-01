import React from "react";

const TestingComponents = ({ Tests }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-5"></div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Tests.map((test, index) => ( // Changed from 'node' to 'test' and removed '{index}'
          <li key={index} className="mb-8">
            <a href={`/test-generator/testing/${test.slug}`}>
              <div className="group rounded-lg border border-transparent px-5 py-4 transition duration-300 ease-in-out transform hover:scale-105 transition-colors hover:border-accent-2 hover:dark:bg-neutral-400/30">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold mb-2 text-slate-600 mr-4">
                    {test.title} {/* Changed from 'node.title' to 'test.title' */}
                  </h2>
                </div>
                <img
                  src={test.image} 
                  alt={test.title} 
                  className="w-30 h-30 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-400 mb-2">
                  Test: {test.title} {/* Changed from 'node' to 'test.title' */}
                </p>
                <p className="text-gray-500 mb-4">
                  Description: {test.description} {/* Changed from 'node.description' to 'test.description' */}
                </p>
                {/* Additional details can be added based on your needs */}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestingComponents;
