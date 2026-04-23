"use client";
import { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-4xl font-bold mb-2">This is the header component.</h2>
      <p className="mb-2 text-2xl font-semibold">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="btn">
        Count
      </button>
    </div>
  );
};

export default Header;
