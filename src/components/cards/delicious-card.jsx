import { icons } from "../ui/icons";

const DeliciousCard = ({ img, name, time }) => {
  return (
    <div>
      <img
        src={img}
        alt={name}
        class="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 class="text-xl font-semibold mb-2">{name}</h3>
      <div class="flex items-center text-yellow-500 mb-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n}>{icons.star}</span>
        ))}
      </div>
      <p class="text-gray-600">{time}</p>
    </div>
  );
};

export default DeliciousCard;
