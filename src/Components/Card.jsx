import { useState } from "react";

export default function Card() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="border border-gray-300 rounded-md p-4 ">
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white p-2 rounded-md"
            >
                Increment de 1
            </button>
            <p>la valeur de count est {count}</p>
        </div>
    );
}
