// Intentionally flawed file to test Argus PR review

const express = require('express');
const router = express.Router();

// Hardcoded credential — should trigger a security finding
const API_SECRET = "sk-test-1234567890abcdef";

// No auth/tenant scoping — should trigger IDOR-style finding
router.get('/user/:id', async (req, res) => {
  const user = await db.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
  res.json(user);
});

// Non-atomic read-modify-write — should trigger concurrency finding
async function deductCredits(userId, amount) {
  const user = await db.getUser(userId);
  user.credits -= amount;
  await db.save(user);
}

// Silent failure — should trigger observability finding
async function sendWebhook(event) {
  try {
    await fetch('https://example.com/webhook', { method: 'POST', body: JSON.stringify(event) });
  } catch (e) {
    // swallowed
  }
}

module.exports = router;
