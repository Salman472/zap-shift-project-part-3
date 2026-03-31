import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";

const PricingCalculatorModal = ({ isOpen, onClose, serviceCenters }) => {
  // console.log(serviceCenters);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const watchSenderRegion = useWatch({ control, name: "senderRegion" });
  const watchReceverRegion = useWatch({ control, name: "receverRegion" });
  const [calculateCost, setCalculateCost] = useState(null);
  console.log(calculateCost);
  // get all the region
  const region = useMemo(() => {
    const duplicateRegion = serviceCenters.map((r) => r.region);
    return [...new Set(duplicateRegion)];
  }, [serviceCenters]);

  // console.log(regio);

  // get district by region
  const districtByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((d) => d.region == region);

    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };
  // console.log(districtByRegion);
  const handleCalculate = (data) => {
    console.log(data);
    // calculate delivery charge
    const isDocument = data.parcelType.toLowerCase() === "document";
    const isSameDistrict = data.senderDistrict === data.receverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);

    // value store
    setCalculateCost(cost);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <form onSubmit={handleSubmit(handleCalculate)}>
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
          {/* Header - Fixed */}
          <div className="p-8 pb-6 border-b border-gray-100 flex-shrink-0">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-emerald-950">
                  Pricing Calculator
                </h2>
                <p className="text-emerald-700 mt-2 text-sm">
                  Enjoy fast, reliable parcel delivery with real-time tracking
                  and zero hassle.
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 text-3xl leading-none mt-1 mr-2">
                <IoMdInformationCircleOutline />
              </button>
              <button
                type="button"
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
                  {...register("parcelType", { required: true })}
                  className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option defaultValue={"document"}>Document</option>
                  <option value="non-document">Non-Document</option>
                </select>
                {errors.parcelType && (
                  <p className="text-red-500 text-sm mt-1">
                    Parcel type is required
                  </p>
                )}
              </div>
              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Parcel Weight (KG)
                </label>
                <input
                  {...register("parcelWeight")}
                  type="number"
                  placeholder="Weight"
                  className="input input-bordered w-full focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              {/* sender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sender Region
                </label>
                <select
                  {...register("senderRegion", { required: true })}
                  className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Select Sender Region</option>
                  {region.map((r, i) => (
                    <option key={i} value={r}>
                      {" "}
                      {r}
                    </option>
                  ))}
                </select>
                {errors.senderRegion && (
                  <p className="text-red-500 text-sm mt-1">
                    Sender Region is required
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sender District
                </label>
                <select
                  {...register("senderDistrict", { required: true })}
                  className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Select Sender District</option>
                  {districtByRegion(watchSenderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.senderDistrict && (
                  <p className="text-red-500 text-sm mt-1">
                    Sender District is required
                  </p>
                )}
              </div>
              {/* recever */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Receiver Region
                </label>
                <select
                  {...register("receverRegion", { required: true })}
                  className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Select Receiver Region</option>
                  {region.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.receverRegion && (
                  <p className="text-red-500 text-sm mt-1">
                    Recever Region is required
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Receiver District
                </label>
                <select
                  {...register("receverDistrict", { required: true })}
                  className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Select Receiver District</option>
                  {districtByRegion(watchReceverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.receverDistrict && (
                  <p className="text-red-500 text-sm mt-1">
                    Recever District is required
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Display Result */}
          {calculateCost !== null && (
            <div className="mt-6 w-full max-w-md mx-auto p-6 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                💰 Estimated Delivery Cost
              </h3>
              <span className="text-3xl font-bold text-emerald-800">
                {calculateCost} BDT
              </span>
              <p className="text-sm text-emerald-700 mt-1">
                Fast, reliable, and transparent pricing
              </p>
            </div>
          )}

          {/* Buttons - Fixed at bottom */}
          <div className="p-8 pt-6 border-t border-gray-100 flex-shrink-0 bg-white">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setCalculateCost(null);
                }}
                className="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-50 px-8 flex-1"
              >
                Reset
              </button>

              <input
                type="submit"
                value="Calculate"
                className="btn bg-lime-400 hover:bg-lime-500 text-black font-medium px-10 flex-1 border-none disabled:bg-lime-300"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PricingCalculatorModal;
