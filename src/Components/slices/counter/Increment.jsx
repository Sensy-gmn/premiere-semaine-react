import { useDispatch } from "react-redux";
import { increment } from "../../../slices/counter/counterSlice";

export default function Increment() {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => dispatch(increment())}
        >
            Incrémenter
        </button>
    );
}
