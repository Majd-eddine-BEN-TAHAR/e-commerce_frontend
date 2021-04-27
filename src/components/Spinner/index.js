import "./index.css";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-backdrop">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
