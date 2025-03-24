import { useEffect, useState } from "react";
import { User, USER_HEADERS } from "../types/user.type";
import { fetchGetUsers } from "../Data/Api";

export default function UserManagement() {
    const [users, setUsers] = useState<User[]>([]);
    const [userHeaders] = useState(Object.values(USER_HEADERS));
    const [displayedUserProperties] = useState(Object.keys(USER_HEADERS));
    const token = localStorage.getItem("token") ?? "";
    useEffect(() => {
        fetchGetUsers("/user", token).then((d) => {
            if (d !== null) setUsers(d);
        });
    }, []);

    return (
        <table className="w-full border-collapse">
            <thead className="bg-gray-800 text-white">
                <tr className="text-left [&>th]:p-4 [&>th]:border [&>th]:border-gray-700">
                    <th>#</th>
                    {userHeaders.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="[&>tr]:even:bg-gray-300 [&>tr]:odd:bg-gray-100 [&>tr>*]:p-4  [&>tr>*]:border  [&>tr>*]:border-gray-300">
                {users &&
                    users.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            {displayedUserProperties.map((val, index) => (
                                <td key={index}>{(item as never)[val]}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
