import PostDetails from "./Components/PostDetails";
import About from "./Features/About";
import Api from "./Features/Api";
import Contact from "./Features/Contact";
import Home from "./Features/Home";
import NotFound from "./Features/Notfound";
import Posts from "./Features/Posts";
import { Route, Routes } from "react-router-dom";

export const routesToDisplay = [
    { path: "/", element: <Home />, name: "Home" },
    { path: "/contact", element: <Contact />, name: "Contact" },
    { path: "/about", element: <About />, name: "About" },
    { path: "/api", element: <Api />, name: "Api" },
    { path: "/posts", element: <Posts />, name: "Posts" },
];

export const routesNotDisplayed = [
    { path: "*", element: <NotFound /> },
    { path: "/api/post/:id", element: <PostDetails />, name: "PostDetails" },
];

export default function AppRoutes() {
    return (
        <Routes>
            {routesToDisplay.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}

            {routesNotDisplayed.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
}
