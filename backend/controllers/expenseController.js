const Expense = require("../models/Expense");

exports.createExpense = async (req, res) => {
  const { amount, category, description, date, idempotencyKey } = req.body;

  if (!idempotencyKey) {
    return res.status(400).json({ message: "Idempotency key required" });
  }

  const existing = await Expense.findOne({ idempotencyKey });
  if (existing) {
    return res.status(200).json(existing);
  }

  const expense = await Expense.create({
    amount,
    category,
    description,
    date,
    idempotencyKey
  });

  res.status(201).json(expense);
};

exports.getExpenses = async (req, res) => {
  const { category, sort } = req.query;

  let query = {};
  if (category) query.category = category;

  let expenses = Expense.find(query);

  if (sort === "date_desc") {
    expenses = expenses.sort({ date: -1 });
  }

  res.json(await expenses);
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
  
    const expense = await Expense.findByIdAndDelete(id);
  
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
  
    res.json({ message: "Expense deleted" });
  };
