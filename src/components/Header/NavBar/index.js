import SearchBar from "./SearchBar/index";
import ToggleMenu from "./ToggleMenu";
import UserMenu from "./UserMenu";
import { ReactComponent as Logo } from "./../../../assets/images/Logo.svg";
import { ReactComponent as ShoppingCartIcon } from "./../../../assets/images/shopping.svg";
import { ReactComponent as UserIcon } from "./../../../assets/images/user.svg";
import { Link } from "react-router-dom";
import useStore from "../../../store/useStore";

const NavBar = () => {
  const openCloseUserMenu = useStore((state) => state.openCloseUserMenu);
  const openCart = useStore((state) => state.openCart);
  const cartProducts = useStore(({ cartProducts }) => cartProducts);

  return (
    <div className="bg-gray-100">
      <div className="flex justify-around items-center p-2">
        <div className="hidden md:flex md:justify-center md:items-end">
          <Link to="/">
            <Logo className="w-10 h-auto mr-4" />
          </Link>
          <SearchBar />
        </div>

        <div className="CART flex-center mr-6 ">
          <div className="relative hover:opacity-50">
            <div className="absolute top-0 right-4 w-6 h-6 flex justify-center items-center bg-blue-600 text-white rounded-full font-medium">
              {cartProducts.length}
            </div>
            <ShoppingCartIcon
              className="w-10 h-auto mr-8 cursor-pointer "
              onClick={openCart}
            />
          </div>
          <div className="SIGN-IN hidden md:flex md:justify-center md:items-center relative">
            <UserIcon
              className="w-10 h-auto cursor-pointer hover:opacity-50"
              onClick={openCloseUserMenu}
            />
            <UserMenu />
          </div>
        </div>

        <ToggleMenu />
      </div>
    </div>
  );
};

export default NavBar;
