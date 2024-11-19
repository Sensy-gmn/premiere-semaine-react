import About from "./Features/About";
import Contact from "./Features/Contact";
import Home from "./Features/Home";
import NotFound from "./Features/Notfound";

export const routesToDisplay = [
    { path: "/", element: <Home />, name: "Home" },
    { path: "/contact", element: <Contact />, name: "Contact" },
    { path: "/about", element: <About />, name: "About" },
];

export const routesNotDisplayed = [{ path: "*", element: <NotFound /> }];
