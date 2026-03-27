import React, { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import PricingCalculatorModal from "./PricingCalculator";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
const [showModal, setShowModal] = useState(false);
  // data load
  const serviceCenters = useLoaderData();
    const watchSenderRegion = useWatch({control,name:"senderRegion"});
  const watchSenderDistrict = useWatch({control,name:"senderDistrict"});
  const watchReceverRegion = useWatch({control,name:"receverRegion"});
  const watchReceverDistrict = useWatch({control,name:"receverDistrict"});
  // find region
  // const duplicateRegion = serviceCenters.map((r) => r.region);
  // const region = [...new Set(duplicateRegion)];

  // ignore unnecessary recalculation
  const region=useMemo(()=>{
    const duplicateRegion = serviceCenters.map((r) => r.region);
    return [...new Set(duplicateRegion)];
  },[serviceCenters])


  // find all district
  const districtByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((d) => d.region == region);

    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  // find all thana
  const thana = (districtByRegion) => {
    const districts = serviceCenters.find(
      (r) => r.district === districtByRegion,
    );
    return districts ? districts?.covered_area : [];
  };
  
  const handleSendParcel = (data) => {
    console.log(data);
    // calculate delivery charge
   const isDocument = data.parcelType === 'document'
   const isSameDistrict= data.senderDistrict === data.receverDistrict
   const parcelWeight=parseFloat(data.parcelWeight)
   let cost = 0
    if(isDocument){
      cost = isSameDistrict ? 60 : 80
    }
    else{
      if(parcelWeight <= 3){
        cost = isSameDistrict ? 110 : 150
      }
      else{
        const minCharge = isSameDistrict ? 110 : 150
        const extraWeight = parcelWeight - 3
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40
        cost = minCharge + extraCharge
      }
    }
    console.log(cost);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        {/* Header */}
       <div className="flex justify-between items-center">
         <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
          Send A Parcel
        </h1>
        <button 
        onClick={() => setShowModal(true)}
        className="btn btn-primary text-black"
      >
        Open Pricing Calculator
      </button>

      <PricingCalculatorModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
       </div>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Enter your parcel details
        </p>

        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* Parcel Type */}
          <div className="mb-6">
            <label className="label font-medium">Parcel Type</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  {...register("parcelType", { required: true })}
                  type="radio"
                  value="document"
                  defaultChecked
                  className="radio radio-primary"
                />
                Document
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  {...register("parcelType", { required: true })}
                  type="radio"
                  value="non-document"
                  className="radio radio-primary"
                />
                Not-Document
              </label>
            </div>
            {errors.parcelType && (
              <p className="text-red-500 text-sm mt-1">
                Parcel type is required
              </p>
            )}
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Parcel Name</span>
              </label>
              <input
                {...register("parcelName", { required: true })}
                type="text"
                placeholder="Parcel Name"
                className="input input-bordered w-full"
              />
              {errors.parcelName && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="label">Parcel Weight (KG)</label>
              <input
                {...register("parcelWeight")}
                type="number"
                placeholder="Weight"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Sender & Receiver */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Sender */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">
                Sender Details
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="label">Sender Name</label>
                  <input
                    {...register("senderName", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Address</label>
                  <input
                    {...register("senderAddress", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Phone Number</label>
                  <input
                    {...register("senderNumber", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Your Region</label>
                  <select
                    {...register("senderRegion", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option>Select Region</option>
                    {region.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Your District</label>
                  <select
                    {...register("senderDistrict", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select District</option>
                    {districtByRegion(watchSenderRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Your Thana</label>
                  <select
                    {...register("senderThana", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option>Select Thana</option>
                    {thana(watchSenderDistrict).map((t, i) => (
                      <option key={i} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Pickup Instruction</label>
                  <textarea
                    {...register("pickupInstruction")}
                    placeholder="Pickup Instruction"
                    className="textarea textarea-bordered w-full"
                  />
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">
                Receiver Details
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="label">Receiver Name</label>
                  <input
                    {...register("receiverName", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Address</label>
                  <input
                    {...register("receiverAddress", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Phone Number</label>
                  <input
                    {...register("receiverNumber", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Recever Region</label>
                  <select
                    {...register("receverRegion", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option>Select Region</option>
                    {region.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Recever District</label>
                  <select
                    {...register("receverDistrict", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option>Select District</option>
                    {districtByRegion(watchReceverRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Recever Thana</label>
                  <select
                    {...register("receverThana", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select Thana</option>
                    {thana(watchReceverDistrict).map((t, i) => (
                      <option key={i} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Delivery Instruction</label>
                  <textarea
                    {...register("pickupInstruction")}
                    placeholder="Pickup Instruction"
                    className="textarea textarea-bordered w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-500">
              * Pickup Time 4pm-7pm Approx.
            </p>

            <input
              type="submit"
              value="Send Parcel"
              className="w-full sm:w-auto bg-primary hover:bg-[#c8f935] text-black px-6 py-2 rounded-md font-medium"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
