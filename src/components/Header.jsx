import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
    const {counterVal} = useSelector(state => state.counter);  
    const privacy = useSelector(state => state.privacy);
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold mt-4">Counter</h2>
        {!privacy && <p className="font-mono p-2">The counter value is : {counterVal}</p>}
      </div>
    </>
  );
}
