import { IoIosArrowDown } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="shadow-md py-5">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div>
            <img src="/src/assets/Frame.svg" alt="" />
          </div>
          <ul className="font-helvetica flex items-center mt-2 gap-5">
            <li className="flex items-center gap-2">
              Product <IoIosArrowDown></IoIosArrowDown>
            </li>
            <li className="flex items-center gap-2">
              Solutions <IoIosArrowDown></IoIosArrowDown>
            </li>
            <li className="flex items-center gap-2">
              Resources <IoIosArrowDown></IoIosArrowDown>
            </li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex items-center">
            <h1 className="flex items-center gap-2 font-inter mr-4"><TfiWorld></TfiWorld> EN</h1>
            <p className="font-inter mr-6">Contact Sales</p>
            <Link className="font-inter mr-3">Login</Link>
            <button className="px-7 py-3 text-white font-helvetica  bg-[#4262FF] rounded-full">Sign up free →</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
