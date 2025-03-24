export default function BookManagement() {
    const data = [
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", age: 22, email: "alice@example.com" },
        { id: 4, name: "Bob Brown", age: 28, email: "bob@example.com" },
        { id: 5, name: "Charlie Green", age: 35, email: "charlie@example.com" },
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", age: 22, email: "alice@example.com" },
        { id: 4, name: "Bob Brown", age: 28, email: "bob@example.com" },
        { id: 5, name: "Charlie Green", age: 35, email: "charlie@example.com" },
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", age: 22, email: "alice@example.com" },
        { id: 4, name: "Bob Brown", age: 28, email: "bob@example.com" },
        { id: 5, name: "Charlie Green", age: 35, email: "charlie@example.com" },
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", age: 22, email: "alice@example.com" },
        { id: 4, name: "Bob Brown", age: 28, email: "bob@example.com" },
        { id: 5, name: "Charlie Green", age: 35, email: "charlie@example.com" },
      ];
    return(
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left border border-gray-700">ID</th>
              <th className="p-4 text-left border border-gray-700">Name</th>
              <th className="p-4 text-left border border-gray-700">Age</th>
              <th className="p-4 text-left border border-gray-700">Email</th>
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
              </tr>
            ))}
          </tbody>
        </table>
    )
};
