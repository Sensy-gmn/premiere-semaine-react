import { Link } from "react-router-dom";
import { routesToDisplay } from "../routes";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-4 bg-gray-200 p-4">
            {routesToDisplay.map((route) => (
                <Link key={route.path} to={route.path} className="text-2xl">
                    {route.name}
                </Link>
            ))}
        </nav>
    );
}
