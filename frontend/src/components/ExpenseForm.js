import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createExpense } from "../Api";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    await createExpense({
      ...form,
      amount: Number(form.amount),
      idempotencyKey: uuid()
    });

    setForm({ amount: "", category: "", description: "", date: "" });
    onAdd();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Amount" type="number" required
        value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Category" required
        value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Description"
        value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="date" required
        value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
      <button>Add</button>
    </form>
  );
}
