import { useState } from "react";
import useStore from "../store/useStore";

const Test = () => {
  const [name, setName] = useState("");

  const sendName = useStore(({ sendName }) => sendName);

  return (
    <form autoComplete="off">
      <input
        required
        type="text"
        name="name"
        placeholder="enter name..."
        pattern=".{2,}"
        title="Please enter at least 2 characters."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="submit"
        value="sign in"
        onClick={(e) => {
          e.preventDefault();
          const validationResult = e.target.parentNode.reportValidity();
          if (validationResult) {
            sendName(name);
          }
        }}
      />
    </form>
  );
};

export default Test;
