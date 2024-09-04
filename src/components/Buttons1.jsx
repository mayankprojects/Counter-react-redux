import React from "react";
import { useDispatch } from "react-redux";

export default function Buttons1() {
  const dispatch = useDispatch();
  const handleOnAdd = () => {
    dispatch({
      type: "ADD",
    });
  };

  const handleOnDel = () => {
    dispatch({
      type: "DELETE",
    });
  };

  const togglePrivacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };

  

  return (
    <>
      <div className="buttons">
        <button
          className="bg-blue-500 p-2 w-20 border-2 border-gray-500 rounded-lg m-2"
          onClick={handleOnAdd}
        >
          +1
        </button>
        <button
          className="bg-green-500 p-2 w-20 border-2 border-gray-500 rounded-lg m-2"
          onClick={handleOnDel}
        >
          -1
        </button>
        <button
          className="bg-yellow-500 p-2 w-32 border-2 border-gray-500 rounded-lg m-2"
          onClick={togglePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
    </>
  );
}
