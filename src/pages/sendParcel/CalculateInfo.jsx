import React from 'react';

const CalculateInfo = ({setShowDetails}) => {
    return (
        <div>
             <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-emerald-900">
                  📦 Pricing Details
                </h3>

                <p className="text-gray-600">
                  • Document → Same District: 60 BDT | Different: 80 BDT
                </p>

                <p className="text-gray-600">
                  • Non-Document ≤ 3KG → Same: 110 BDT | Different: 150 BDT
                </p>

                <p className="text-gray-600">
                  • Extra Weight → 40 BDT per KG
                </p>

                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  className="btn bg-emerald-500 text-white mt-4"
                >
                  ⬅ Back to Form
                </button>
              </div>
        </div>
    );
};

export default CalculateInfo;