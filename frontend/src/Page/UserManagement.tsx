export default function UserManagement() {
    const data = [
        { id: 1, name: "0", age: 25, email: "john@example.com" },
        { id: 2, name: "1", age: 30, email: "jane@example.com" },
        { id: 3, name: "2", age: 22, email: "alice@example.com" },
        { id: 4, name: "3", age: 28, email: "bob@example.com" },
        { id: 5, name: "4", age: 35, email: "charlie@example.com" },
      ];
    return(
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left border border-gray-700">ID</th>
              <th className="p-4 text-left border border-gray-700">Name</th>
              <th className="p-4 text-left border border-gray-700">Age</th>
              <th className="p-4 text-left border border-gray-700">Email</th>
              <th className="p-4 text-left border border-gray-700">Function</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
              >
                <td className="p-4 border border-gray-300">{item.id}</td>
                <td className="p-4 border border-gray-300">{item.name}</td>
                <td className="p-4 border border-gray-300">{item.age}</td>
                <td className="p-4 border border-gray-300">{item.email}</td>
                <td className="p-4 border border-gray-300">
                  <button></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
};
