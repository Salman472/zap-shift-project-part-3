import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ reviewData }) => {
  const { review, userName, user_photoURL, ratings, date } = reviewData;

  return (
    <div className="bg-base-200 p-6 rounded-2xl max-w-sm shadow-sm hover:shadow-md transition duration-300">
      
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-gray-300" />

      {/* Review Text */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {review}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-400 my-5"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <img
          src={user_photoURL}
          alt={userName}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Name + Info */}
        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>

          <p className="text-xs text-gray-500">
            {ratings} ⭐ Rating
          </p>

          <p className="text-[11px] text-gray-400">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;