import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUrl } from "../utils/links";

export default function Posts() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = postUrl;
    const navigate = useNavigate();

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

    const handlePostClick = (postId) => {
        navigate(`/api/post/${postId}`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <div className="flex flex-col items-center justify-center gap-5 ">
                    <h2>Liste des Posts</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                        {data.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => handlePostClick(post.id)}
                                className="p-4 border rounded-md cursor-pointer hover:bg-gray-100"
                            >
                                Article {post.id}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
