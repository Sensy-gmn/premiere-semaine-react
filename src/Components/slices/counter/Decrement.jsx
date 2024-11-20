import { useDispatch } from "react-redux";
import { decrement } from "../../../slices/counter/counterSlice";

export default function Decrement() {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => dispatch(decrement())}
        >
            Décrémenter
        </button>
    );
}
