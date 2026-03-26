import React from "react";
import wareman from '../../../assets/wareman.png'
import warehouse from '../../../assets/warehouse.png'
const ServiceCard = () => {
  return (
    <div className="flex flex-col gap-4">
      
          <div className="card card-side flex justify-center items-center gap-4 bg-[#EAECED] p-8 shadow-sm">
            <figure>
              <img
                src={warehouse}
                alt="Movie"
              />
            </figure>
            <div className="card-body border-l-3 border-dashed">
              <h2 className="card-title">Live Parcel Tracking</h2>
              <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
              
            </div>
          </div>
          <div className="card card-side flex justify-center items-center gap-4 bg-[#EAECED] p-8 shadow-sm">
            <figure>
              <img
                src={wareman}
                alt="Movie"
              />
            </figure>
            <div className="card-body border-l-3 border-dashed">
              <h2 className="card-title">100% Safe Delivery</h2>
              <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
              
            </div>
          </div>
          <div className="card card-side flex justify-center items-center gap-4 bg-[#EAECED] p-8 shadow-sm">
            <figure>
              <img
                src={wareman}
                alt="Movie"
              />
            </figure>
            <div className="card-body border-l-3 border-dashed">
              <h2 className="card-title">24/7 Call Center Support</h2>
              <p>ur dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
              
            </div>
          </div>
        
    
    </div>
  );
};

export default ServiceCard;
