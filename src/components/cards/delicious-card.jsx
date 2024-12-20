import Link from "next/link";
import { icons } from "../ui/icons";

const DeliciousCard = ({ img, name, time, rating = 0, categoryId }) => {
  const fullStars = Math.floor(rating);
  return (
    <Link href={`/${categoryId}/${name}`}>
      <img
        src={img}
        alt={name}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex items-center text-yellow-500 mb-2">
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <span key={index}>{icons.star}</span>
          ))}
      </div>
      <p className="text-gray-600">{time}</p>
    </Link>
  );
};

export default DeliciousCard;
