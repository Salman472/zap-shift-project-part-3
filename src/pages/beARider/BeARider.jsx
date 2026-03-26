import React, {  } from 'react';
import bikeRider from '../../assets/agent-pending.png'

const BeARider = () => {

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12 border-b">
            <h1 className="text-4xl font-bold text-gray-900">Be a Rider</h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="flex-1 p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Tell us about yourself</h2>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Driving License */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Driving License Number</label>
                  <input
                    type="text"
                    name="drivingLicense"
                    
                    placeholder="Driving License Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Region & District */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Region</label>
                    <select
                      name="region"
                      
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select your Region</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your District</label>
                    <select
                      name="district"
                     
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select your District</option>
                      <option value="Gazipur">Gazipur</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Narayanganj">Narayanganj</option>
                      {/* Add more districts as needed */}
                    </select>
                  </div>
                </div>

                {/* NID & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">NID No</label>
                    <input
                      type="text"
                      name="nid"
                      
                      placeholder="NID"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Bike Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bike Brand Model and Year</label>
                  <input
                    type="text"
                    name="bikeModel"
                    
                    placeholder="Bike Brand Model and Year"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bike Registration Number</label>
                  <input
                    type="text"
                    name="bikeRegNumber"
                    
                    placeholder="Bike Registration Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* About Yourself */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell Us About Yourself</label>
                  <textarea
                    name="about"
                    
                    placeholder="Tell Us About Yourself"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-200 active:scale-95"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Illustration Section */}
            <div className="lg:w-5/12 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="mx-auto w-72 h-72 md:w-96 md:h-96">
                  <img 
                    src={bikeRider} 
                    alt="Delivery Rider"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow">
                    <span className="font-medium text-green-700">Join our delivery team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeARider;