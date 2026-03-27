import React, { useState } from 'react';

const PricingCalculatorModal = ({ isOpen, onClose }) => {
  const [parcelType, setParcelType] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    if (!parcelType || !destination || !weight) {
      alert("Please fill all fields");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const basePrice = 30;
      const weightFactor = parseFloat(weight) * 8;
      const finalPrice = Math.round(basePrice + weightFactor + (destination === 'outside' ? 20 : 0));

      setCalculatedPrice(finalPrice);
      setIsCalculating(false);
    }, 800);
  };

  const handleReset = () => {
    setParcelType('');
    setDestination('');
    setWeight('');
    setCalculatedPrice(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header - Fixed */}
        <div className="p-8 pb-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-emerald-950">Pricing Calculator</h2>
              <p className="text-emerald-700 mt-2 text-sm">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none mt-1"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <h3 className="text-xl font-semibold text-center text-emerald-900 mb-8">
            Calculate Your Cost
          </h3>

          <div className="space-y-6">
            {/* Parcel Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Parcel type
              </label>
              <select
                value={parcelType}
                onChange={(e) => setParcelType(e.target.value)}
                className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="">Select Parcel type</option>
                <option value="document">Document</option>
                <option value="small-package">Small Package</option>
                <option value="medium-package">Medium Package</option>
                <option value="large-package">Large Package</option>
              </select>
            </div>

            {/* Delivery Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Delivery Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="">Select Delivery Destination</option>
                <option value="inside">Inside Dhaka</option>
                <option value="outside">Outside Dhaka</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Weight (KG)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Contact"
                className="input input-bordered w-full focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Price Display (Big like screenshot) */}
          {calculatedPrice !== null && (
            <div className="mt-10 text-center">
              <div className="text-6xl font-bold text-black tracking-tighter">
                {calculatedPrice} <span className="text-4xl font-normal">Tk</span>
              </div>
              <p className="text-emerald-600 mt-2">Estimated Delivery Cost</p>
            </div>
          )}
        </div>

        {/* Buttons - Fixed at bottom */}
        <div className="p-8 pt-6 border-t border-gray-100 flex-shrink-0 bg-white">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handleReset}
              className="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-50 px-8 flex-1"
            >
              Reset
            </button>

            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="btn bg-lime-400 hover:bg-lime-500 text-black font-medium px-10 flex-1 border-none disabled:bg-lime-300"
            >
              {isCalculating ? "Calculating..." : "Calculate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculatorModal;