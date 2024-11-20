import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AppRoutes from "./routes";

export default function App() {
    return (
        <>
            <Navbar />

            <AppRoutes />

            <Footer />
        </>
    );
}
