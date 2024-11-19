import { useState } from "react";

export default function MagicCounter() {
    const [count, setCount] = useState(0);

    const handleClickIncrement = () => {
        setCount(count + 1);
    };

    const handleClickDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleClickReset = () => {
        if (count >= 1) {
            setCount(0);
        }
    };

    const isMagic = count % 5 === 0;

    return (
        <>
            <div className="flex">
                <button
                    onClick={handleClickDecrement}
                    className={`bg-red-500 text-white p-2 rounded-md w-20 ${
                        count === 0 ? "bg-gray-500" : ""
                    }`}
                    disabled={count === 0}
                >
                    -
                </button>

                <p className="text-2xl font-bold">{count}</p>

                <button
                    onClick={handleClickIncrement}
                    className="bg-green-500 text-white p-2 rounded-md w-20"
                >
                    +
                </button>

                {count >= 1 && (
                    <button
                        onClick={handleClickReset}
                        className="bg-blue-500 text-white p-2 rounded-md w-20 ml-8"
                    >
                        Reset
                    </button>
                )}
            </div>

            {count > 1 && isMagic && (
                <p className="text-2xl font-bold">
                    ✨ Nombre magique atteint ! ✨
                </p>
            )}
        </>
    );
}
