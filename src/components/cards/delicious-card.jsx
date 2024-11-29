import { icons } from "../ui/icons";

const DeliciousCard = ({ img, name, time, rating = 0 }) => {
  const fullStars = Math.floor(rating);
  return (
    <div>
      <img
        src={img}
        alt={name}
        class="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 class="text-xl font-semibold mb-2">{name}</h3>
      <div class="flex items-center text-yellow-500 mb-2">
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <span key={index}>{icons.star}</span>
          ))}
      </div>
      <p class="text-gray-600">{time}</p>
    </div>
  );
};

export default DeliciousCard;
