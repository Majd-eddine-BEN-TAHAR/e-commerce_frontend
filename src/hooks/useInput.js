import { useState } from "react";

function useInput({ type }) {
  // to use it, you don't use it as <... /> but instead {input}
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
}

export default useInput;
