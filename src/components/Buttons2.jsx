import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

export default function Buttons2() {
  const num = useRef();
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(counterActions.add(num.current.value));
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(num.current.value));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter a number"
          className="p-2 border-2 border-black rounded-lg w-56"
          ref={num}
        />
        <button
          className="bg-blue-200 p-2 w-20 border-2 border-gray-500 rounded-lg m-2"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="bg-red-500 p-2 w-20 border-2 border-gray-500 rounded-lg m-2"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}
