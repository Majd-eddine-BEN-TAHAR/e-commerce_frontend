import SearchBar from "../SearchBar/index";
import { ReactComponent as UserIcon } from "./../../../../assets/images/user.svg";
import { ReactComponent as Logo } from "./../../../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import useStore from "../../../../store/useStore";
import UserMenu from "../UserMenu";

const SideBar = () => {
  const sidebar = useStore((state) => state.sidebar);
  const closeSidebar = useStore((state) => state.closeSidebar);
  const openCloseUserMenu = useStore((state) => state.openCloseUserMenu);

  if (!sidebar) return null;

  return (
    <div className="md:hidden p-2 flex flex-col bg-gray-100 ">
      <SearchBar />

      <div className="flex justify-around my-3">
        <Link
          to="/"
          className="flex items-center capitalize cursor-pointer"
          onClick={closeSidebar}
        >
          <Logo className="w-10 h-auto mr-4" />
        </Link>

        {/* <Link
            to="/login"
            className="flex items-center capitalize cursor-pointer"
            onClick={closeSidebar}
          > */}
        <div className="relative">
          <UserIcon
            className="w-10 h-auto mr-3 cursor-pointer hover:opacity-50"
            onClick={openCloseUserMenu}
          />
          <UserMenu />
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default SideBar;
