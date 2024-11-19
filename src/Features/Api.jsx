import { useState } from "react";
import UserDetails from "../Components/UserDetails";

export default function Api() {
    const [id, setId] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const addUser = () => {
        setIsLoading(true);

        if (id && Number(id)) {
            if (!allUsers.includes(id)) {
                setAllUsers([...allUsers, id]);
                setId("");
            } else {
                alert("Cet ID existe déjà");
            }
        }

        setIsLoading(false);
    };

    const deleteUser = (id) => {
        setIsLoading(true);
        setAllUsers(allUsers.filter((user) => user !== id));
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 gap-5">
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <div className="flex gap-2">
                    <input type="number" value={id} onChange={handleChange} />
                    <button
                        onClick={addUser}
                        className="bg-blue-500 text-white p-2 rounded-md"
                    >
                        Ajouter
                    </button>
                </div>
            )}

            {allUsers.length > 0 ? (
                allUsers.map((user) => (
                    <UserDetails key={user} id={user} deleteUser={deleteUser} />
                ))
            ) : (
                <div>Veuillez entrer un ID pour afficher les détails</div>
            )}
        </div>
    );
}
