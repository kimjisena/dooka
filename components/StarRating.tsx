import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function StarRating () {
  return (
    <div className={`flex flex-col items-center`}>
      <h1 className={`text-3xl mb-2`}>Rated</h1>
      <div id="star" className={`flex flex-row w-44 justify-between mb-2`}>
        <BsStarFill size={`28`} />
        <BsStarFill size={`28`} />
        <BsStarFill size={`28`} />
        <BsStarFill size={`28`} />
        <BsStarHalf size={`28`} />
      </div>
      <h2 className={`text-2xl mb-2`}>
        based on 5,493 reviews
      </h2>
    </div>
  );
}