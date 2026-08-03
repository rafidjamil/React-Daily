interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="mx-auto m-[1rem] max-w-sm overflow-hidden rounded-lg bg-[#1A1C1E] shadow-md">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
        <a
          href={link || "#"}
          className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-black shadow transition duration-200 hover:bg-gray-600 hover:text-white"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;