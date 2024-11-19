import axios from "axios";
import { useEffect, useState } from "react";

export default function UserDetails({ id, deleteUser }) {
    const [data, setData] = useState([]);

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    const fetchData = () => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            <div className="flex flex-col items-center justify-center p-10 border-2 border-gray-300 rounded-md bg-gray-100 ">
                <p>id : {id}</p>
                <p>nom : {data.name}</p>
                <p>email : {data.email}</p>
                <button
                    className="bg-red-500 text-white p-2 rounded-md"
                    onClick={() => deleteUser(id)}
                >
                    retirer
                </button>
            </div>
        </>
    );
}
