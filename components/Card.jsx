
const Card = (props) => {
  return (
    <div className="bg-white rounded-md px-4 py-2 cursor-pointer hover:bg-[#dbe2ec]">
      <h2 className="font-semibold text-lg text-[#374659]">{props?.name}</h2>
      <p className="text-gray-500 text-sm">{props?.desc}</p>
    </div>
  );
};

export default Card;
