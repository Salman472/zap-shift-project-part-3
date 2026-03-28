
import { useForm } from "react-hook-form";

const PricingCalculatorModal = ({ isOpen, onClose }) => {
  const {register, handleSubmit, reset, formState:{errors}}=useForm()
  const handleCalculate=(data)=>{
    console.log(data);
  }
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
                <select {...register('parcelType', {required:true})} className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500">
                  <option defaultValue={"document"} >
                    Document
                  </option>
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
                <select {...register('senderRegion', {required:true})} className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500">
                  <option value="">Select Delivery Destination</option>
                <option > Dhaka</option>
                  <option > nandail</option>
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
                <select {...register('senderDistrict', {required:true})} className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500">
                  <option value="">Select Delivery Destination</option>
                 <option > Dhaka</option>
                  <option > nandail</option>
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
                  Recever Region
                </label>
                <select {...register('receverRegion',{required:true})} className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500">
                  <option value="">Select Delivery Destination</option>
                  <option > Dhaka</option>
                  <option > nandail</option>
                </select>
                 {errors.receverRegion && (
              <p className="text-red-500 text-sm mt-1">
                Recever Region is required
              </p>
            )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Recever District
                </label>
                <select {...register('receverDistrict', {required:true})} className="select select-bordered w-full bg-white focus:border-emerald-500 focus:ring-emerald-500">
                  <option value="">Select Delivery Destination</option>
                  <option > Dhaka</option>
                  <option > nandail</option>
                </select>
                 {errors.receverDistrict && (
              <p className="text-red-500 text-sm mt-1">
               Recever District is required
              </p>
            )}
              </div>
            </div>

           
          </div>

          {/* Buttons - Fixed at bottom */}
          <div className="p-8 pt-6 border-t border-gray-100 flex-shrink-0 bg-white">
            <div className="flex items-center justify-between gap-4">
             <button type="button" onClick={()=>reset()} className="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-50 px-8 flex-1">Reset</button>

              <input type="submit" value="Calculate" className="btn bg-lime-400 hover:bg-lime-500 text-black font-medium px-10 flex-1 border-none disabled:bg-lime-300" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PricingCalculatorModal;
