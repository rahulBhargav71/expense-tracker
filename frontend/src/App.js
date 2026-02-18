import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import { fetchExpenses } from "./Api";
import "./styles.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("date_desc");

  const loadExpenses = async () => {
    setExpenses(await fetchExpenses(category, sort));
  };

  useEffect(() => {
    loadExpenses();
  }, [category, sort]);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <ExpenseForm onAdd={loadExpenses} />
      <Filters setCategory={setCategory} setSort={setSort} />
      <ExpenseList expenses={expenses} onDelete={loadExpenses} />

     
      <div className="total">Total: ₹{total}</div>
    </div>
  );
}

export default App;
