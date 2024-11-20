import { useDispatch } from "react-redux";
import { reset } from "../../../slices/counter/counterSlice";

export default function Reset() {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={() => dispatch(reset())}
        >
            Réinitialiser
        </button>
    );
}
