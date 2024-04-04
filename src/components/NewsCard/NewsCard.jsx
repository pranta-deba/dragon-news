import { FaRegBookmark, FaEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const NewsCard = ({ item}) => {
  const { author, title, details, image_url, rating, total_view } = item || {};
  const { img, name, published_date } = author || {};
  const date = new Date(published_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dates = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  return (
    <div className="flex flex-col space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-between space-x-4 bg-[#F3F3F3] p-4">
        <div className="flex space-x-4">
          <img
            alt=""
            src={img}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a className="text-base font-semibold">{name}</a>
            <span className="text-xs dark:text-gray-600">{dates}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <FaRegBookmark />
          <IoShareSocialOutline />
        </div>
      </div>
      <h3 className="px-4 text-xl font-bold">{title}</h3>
      <div className="px-4">
        <img
          src={image_url}
          alt=""
          className="object-cover w-full mb-4 max-h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm dark:text-gray-600 max-h-44 overflow-auto scrollbar-hide">
          {details}
        </p>
        <button className="text-[#FF8C47] font-semibold cursor-pointer mt-3">
          Read More
        </button>
      </div>
      <div className="px-4">
        <hr />
      </div>
      <div className="flex flex-wrap justify-between p-3">
        <div className="space-x-2 flex">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="text-[#706F6F] text-base font-medium">
            {rating?.number}
          </span>
        </div>
        <div className="flex space-x-2 items-center dark:text-gray-600 text-[#706F6F] text-base font-medium">
          <FaEye className="text-2xl" /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  item: PropTypes.object,
  loader: PropTypes.bool,
};
export default NewsCard;
