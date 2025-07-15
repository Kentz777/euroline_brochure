import { FaStar, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    text: "Does exactly what it says. Clear to read and very useful. I liked it so much I shared it with a friend and would certainly recommend this company.",
    user: "kristakaundeur912",
    rating: 5,
  },
  {
    id: 2,
    text: "Fantastic service, very reliable and smooth from start to finish!",
    user: "johndoe2024",
    rating: 4,
  },
  {
    id: 3,
    text: "Good overall experience, though some areas could improve.",
    user: "janedoe55",
    rating: 3,
  },
  {
    id: 4,
    text: "Highly recommended! Would definitely use again.",
    user: "alexsmith89",
    rating: 5,
  },
];

const logos = [
  "/images/logo1.jpg",
  "/images/logo1.jpg",
  "/images/logo1.jpg",
  "/images/logo1.jpg",
  "/images/logo1.jpg",
  "/images/logo1.jpg",
];

const ReviewsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#08268F] to-[#00BFFF] text-white px-4 lg:px-68 md:px-32 py-10 space-y-8 mt-12">
      {/* Header */}
      <div className="text-center">
        <p className="text-4xl sm:text-md font-semibold lg:mb-16">
          Loved by thousands of people:
        </p>
      </div>

      {/* Reviews */}
      <div className="space-y-6 lg:space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white text-gray-800 rounded-4xl p-8 space-y-9 shadow"
          >
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) =>
                i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
            <p className="text-lg lg:text-2xl">{review.text}</p>
            <p className="text-md font-bold">{review.user}</p>
          </div>
        ))}
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-12 pt-6">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Logo ${idx + 1}`}
            className="h-12 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
