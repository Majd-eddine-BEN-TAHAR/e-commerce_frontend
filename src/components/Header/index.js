import Info from "./Info";
import NavBar from "./NavBar";
import SideBar from "./NavBar/SideBar";

const Header = () => {
  return (
    <header className="HEADER ">
      <Info />
      <NavBar />
      <SideBar />
      <hr />
    </header>
  );
};

export default Header;
