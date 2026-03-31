import React from 'react';

const CalculateInfo = ({setShowDetails}) => {
    return (
       <div>
  <div className="text-left space-y-5">
    <h3 className="text-xl font-bold text-emerald-900 text-center">
      📦 Delivery Pricing Details
    </h3>

    {/* Document Section */}
    <div className="bg-gray-50 p-4 rounded-xl border">
      <h4 className="font-semibold text-emerald-800 mb-2">
        📄 Document Delivery
      </h4>
      <ul className="text-gray-600 text-sm space-y-1">
        <li>• Same District: <span className="font-medium">60 BDT</span></li>
        <li>• Different District: <span className="font-medium">80 BDT</span></li>
        <li>• Weight does not affect pricing</li>
      </ul>
    </div>

    {/* Non Document Section */}
    <div className="bg-gray-50 p-4 rounded-xl border">
      <h4 className="font-semibold text-emerald-800 mb-2">
        📦 Non-Document Delivery
      </h4>
      <ul className="text-gray-600 text-sm space-y-1">
        <li>• Up to 3 KG:</li>
        <li className="ml-4">- Same District: <span className="font-medium">110 BDT</span></li>
        <li className="ml-4">- Different District: <span className="font-medium">150 BDT</span></li>
      </ul>
    </div>

    {/* Extra Charge */}
    <div className="bg-gray-50 p-4 rounded-xl border">
      <h4 className="font-semibold text-emerald-800 mb-2">
        ⚖️ Extra Weight Charges
      </h4>
      <ul className="text-gray-600 text-sm space-y-1">
        <li>• Above 3 KG:</li>
        <li className="ml-4">- 40 BDT per additional KG</li>
        <li className="ml-4">
          - Outside district: additional <span className="font-medium">+40 BDT</span> fixed charge
        </li>
      </ul>
    </div>

    {/* Notes */}
    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
      <h4 className="font-semibold text-yellow-700 mb-1">
        ⚠️ Important Notes
      </h4>
      <ul className="text-sm text-yellow-700 space-y-1">
        <li>• Weight must be entered correctly for accurate pricing</li>
        <li>• Charges may vary slightly based on service conditions</li>
        <li>• Delivery time depends on distance and region</li>
      </ul>
    </div>

    {/* Back Button */}
    <div className="text-center pt-2">
      <button
        type="button"
        onClick={() => setShowDetails(false)}
        className="btn bg-emerald-500 hover:bg-emerald-600 text-white px-6"
      >
        ⬅ Back to Calculator
      </button>
    </div>
  </div>
</div>
    );
};

export default CalculateInfo;