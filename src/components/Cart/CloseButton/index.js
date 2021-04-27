import useStore from "../../../store/useStore";

const CloseButton = () => {
  const closeCart = useStore((state) => state.closeCart);

  return (
    <div className="absolute top-4 right-4">
      <div
        className="w-7 h-6 cursor-pointer relative text-5xl hover:opacity-50"
        onClick={closeCart}
      >
        <div className="bar absolute origin-center transform rotate-45"></div>
        <div className="bar absolute origin-center transform -rotate-45"></div>
      </div>
    </div>
  );
};

export default CloseButton;
