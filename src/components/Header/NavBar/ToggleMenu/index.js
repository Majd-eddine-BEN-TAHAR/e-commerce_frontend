import useStore from "../../../../store/useStore";

const ToggleMenu = () => {
  const setSidebar = useStore((state) => state.setSidebar);

  return (
    <div
      className="TOGGLE-MENU w-7 h-6 flex flex-col justify-between cursor-pointer md:hidden"
      onClick={setSidebar}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default ToggleMenu;
