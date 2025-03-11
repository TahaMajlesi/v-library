import { FaGithub } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Btn = () => {
  return (
    <div className="w-1/12 justify-around flex">
      <button className="p-1 text-white cursor-pointer hover:rotate-180 transition-transform duration-300">
        <FaGithub className="text-2xl" />
      </button>{" "}
      <button className="p-1 text-yellow-400 cursor-pointer hover:rotate-180 transition-transform duration-300">
        {" "}
        <FaStar className="text-2xl" />{" "}
      </button>{" "}
    </div>
  );
};

export default Btn;
