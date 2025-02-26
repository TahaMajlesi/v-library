import Btn from "./Btn/Btn";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className="w-full justify-around py-2 bg-gray-900 flex">
      <Search />
      <Btn />
    </div>
  );
};

export default Header;
