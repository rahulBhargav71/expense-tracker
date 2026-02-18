const express = require("express");
const {
  createExpense,
  getExpenses,
  deleteExpense
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/expenses", createExpense);
router.get("/expenses", getExpenses);
router.delete("/expenses/:id", deleteExpense);

module.exports = router;
