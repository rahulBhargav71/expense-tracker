import { deleteExpense } from "../Api";

export default function ExpenseList({ expenses, onDelete }) {
  const handleDelete = async (id) => {
    await deleteExpense(id);
    onDelete();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(e => (
          <tr key={e._id}>
            <td>{new Date(e.date).toLocaleDateString()}</td>
            <td>{e.category}</td>
            <td>₹{e.amount}</td>
            <td>{e.description}</td>
            <td>
              <button
                onClick={() => handleDelete(e._id)}
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
