import React from "react";
import useStore from "../../store/useStore";

const ErrorModal = () => {
  const modalMessage = useStore((state) => state.modalMessage);
  const removeModal = useStore((state) => state.removeModal);

  if (!modalMessage) return null;

  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center bg-backdrop "
      onClick={removeModal}
    >
      <div className="bg-white p-6 px-10 rounded">
        <p className="text-3xl font-medium text-center">{modalMessage}</p>
        <button
          className="block mx-auto mt-6 px-8 py-2 rounded text-xl font-bold capitalize text-white bg-green-400 hover:bg-green-200"
          onClick={removeModal}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
