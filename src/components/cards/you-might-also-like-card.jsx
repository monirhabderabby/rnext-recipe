import Link from "next/link";

const YouMightAlsoLikeCard = ({ img, name, category }) => {
  return (
    <Link href={`/${category}/${name}`}>
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-lg mb-2"
      />
      <h3 className="font-semibold">{name}</h3>
    </Link>
  );
};

export default YouMightAlsoLikeCard;
