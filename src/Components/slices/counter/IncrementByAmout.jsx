import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../../slices/counter/counterSlice";

export default function IncrementByAmount() {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => dispatch(incrementByAmount(10))}
        >
            Incrémenter de 10
        </button>
    );
}
