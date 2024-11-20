import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <div className="flex flex-col p-10 justify-center items-center gap border-2 border-gray-300 rounded-md bg-gray-100 sm:min-w-sm sm:max-w-sm md:min-w-md md:max-w-md lg:min-w-lg lg:max-w-lg xl:min-w-xl xl:max-w-xl">
                    <p>Post n°{id}</p>
                    <div className="flex flex-col gap-5">
                        <p className="text-2xl font-bold"> {data.title}</p>
                        <p className="">{data.body}</p>
                        <p>Publié par l&apos;utilisateur n°{data.userId}</p>
                    </div>
                </div>
            )}
        </>
    );
}
