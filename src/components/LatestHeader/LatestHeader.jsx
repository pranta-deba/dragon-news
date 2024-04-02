import Marquee from "react-fast-marquee";
const LatestHeader = () => {
  return (
    <div className="p-5 bg-[#F3F3F3] my-6 flex items-center gap-3">
      <button className="bg-red-600 text-white text-xl font-medium px-6 py-2">
        Latest
      </button>
      <Marquee pauseOnHover={true} className="text-lg font-semibold">
        U.S. Rep. Colin Alfred (D-Dallas), who hopes to make health care a top
        issue in Texas U.S. Senate race this year, huddled with local health
        care experts in San Antonio Monday.
      </Marquee>
    </div>
  );
};

export default LatestHeader;
