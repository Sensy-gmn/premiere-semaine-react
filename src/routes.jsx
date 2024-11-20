import PostDetails from "./Components/PostDetails";
import About from "./Features/About";
import Api from "./Features/Api";
import Contact from "./Features/Contact";
import Home from "./Features/Home";
import NotFound from "./Features/Notfound";

export const routesToDisplay = [
    { path: "/", element: <Home />, name: "Home" },
    { path: "/contact", element: <Contact />, name: "Contact" },
    { path: "/about", element: <About />, name: "About" },
    { path: "/api", element: <Api />, name: "Api" },
];

export const routesNotDisplayed = [
    { path: "*", element: <NotFound /> },
    { path: "/api/post/:id", element: <PostDetails />, name: "PostDetails" },
];
