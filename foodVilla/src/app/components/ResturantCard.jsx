import { IMG_PREFIX_LINK } from '../constant';

const ResturantCard = ({
  name,
  cuisines,
  avgRating,
  minDeliveryTime,
  costForTwoString,
  totalRatingsString,
  cloudinaryImageId
}) => (
  <div className="card p-4 rounded-lg border border-solid border-gray-300 hover:shadow-xl shadow-gray-700 text-sm cursor-pointer">
    <img
      className="w-full"
      src={`${IMG_PREFIX_LINK}/${cloudinaryImageId}`}
      alt=""
    />
    <h3 className="font-bold text-base text-gray-600 pt-1">{name}</h3>
    <h4 className="font-semibold text-xs pt-1">{cuisines.join(",")}</h4>
    <div className="flex justify-between pt-1">
      <span>{avgRating}</span>
      <span>{minDeliveryTime}</span>
      <span>{costForTwoString}</span>
    </div>
    <div className="pt-1">{totalRatingsString}</div>
  </div>
);

export default ResturantCard;
