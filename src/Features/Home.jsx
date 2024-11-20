import DataDisplay from "../Components/slices/counter/DataDisplay";
import Increment from "../Components/slices/counter/Increment";
import IncrementByAmount from "../Components/slices/counter/IncrementByAmout";
import Decrement from "../Components/slices/counter/decrement";
import Reset from "../Components/slices/counter/reset";

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>

            <div className="flex gap-4">
                <Decrement />
                <Increment />
                <IncrementByAmount />
                <Reset />
            </div>

            <DataDisplay />
        </>
    );
}
