import { DNA } from "react-loader-spinner";
import PropTypes from "prop-types";

const CategoryCard = ({ category, loader }) => {

  if (loader) {
    return (
      <div className="flex justify-center">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  return (
    <a className="w-full text-[#9F9F9F] hover:bg-[#E7E7E7] hover:text-black transition-all py-4 text-xl font-semibold rounded-md cursor-pointer">
      {category.name}
    </a>
  );
};

CategoryCard.propTypes = {
    category: PropTypes.object,
    loader: PropTypes.bool,
  };
export default CategoryCard;
