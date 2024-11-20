import { useSelector } from "react-redux";

export default function DataDisplay() {
    const count = useSelector((state) => state.counter.value);

    return <p className="text-2xl font-bold">Compteur: {count}</p>;
}
