import Card from "./Components/Card";
import MagicCounter from "./Components/MagicCounter";
import ResponsiveBackground from "./Components/ResponsiveBackground";
import Section from "./Components/Templates/Section";
import Title from "./Components/Templates/Title";
function App() {
    return (
        <div className="container mx-auto bg-gray-100">
            <Section>
                <Title title="hello" />
            </Section>

            <Section>
                <Card />
            </Section>

            <Section>
                <MagicCounter />
            </Section>

            <Section>
                <ResponsiveBackground />
            </Section>
        </div>
    );
}

export default App;
