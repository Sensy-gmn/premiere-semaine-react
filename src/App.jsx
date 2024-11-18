import Card from "./Components/Card";
import MagicCounter from "./Components/MagicCounter";
import Title from "./Components/Templates/Title";

function App() {
    return (
        <div className="container mx-auto">
            <Title title="hello" />
            <Card />

            <MagicCounter />
        </div>
    );
}

export default App;
