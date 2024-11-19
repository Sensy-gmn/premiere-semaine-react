import { useEffect, useState } from "react";
export default function ResponsiveBackground() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const widthBackgroundColor = width >= 800 ? "bg-[#ADD8E6]" : "bg-[#FFC0CB]";

    const heightBackgroundColor =
        height >= 600 ? "bg-green-800" : "bg-yellow-500";

    return (
        <>
            <div className={`${widthBackgroundColor} p-4`}>
                <p className="text-5xl">
                    La largeur de la fenêtre est de {width}px
                </p>
            </div>
            <div className={`${heightBackgroundColor} p-4`}>
                <p className="text-5xl">
                    La hauteur de la fenêtre est de {height}px
                </p>
            </div>
        </>
    );
}
