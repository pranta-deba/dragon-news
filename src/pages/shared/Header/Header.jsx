import logo from "../../../assets/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center space-y-3">
            <figure className="flex justify-center"><img src={logo} alt="" /></figure>
            <h4 className="text-[#706F6F] text-lg font-normal">Journalism Without Fear or Favour</h4>
            <p className="text-xl font-medium"><span>{moment().format("dddd")}</span>, <span className="text-[#706F6F]">{moment().format("MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;