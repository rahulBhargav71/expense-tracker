const API_URL = "http://localhost:5000/api";

export const fetchExpenses = async (category, sort) => {
  let url = `${API_URL}/expenses?sort=${sort}`;
  if (category) url += `&category=${category}`;

  const res = await fetch(url);
  return res.json();
};

export const createExpense = async (expense) => {
  const res = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense)
  });
  return res.json();
};

export const deleteExpense = async (id) => {
    await fetch(`${API_URL}/expenses/${id}`, {
      method: "DELETE"
    });
  };
  
