import Card from "./Components/Card";
import Title from "./Components/Templates/Title";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
    return (
        <div className="container mx-auto">
            <Title title="hello" />
            <Card />
            <ThemeSwitcher />
        </div>
    );
}

export default App;
