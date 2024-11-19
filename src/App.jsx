import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routesToDisplay } from "./routes";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {routesToDisplay.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>

            <Footer />
        </>
    );
}
