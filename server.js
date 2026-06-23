const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.json({ message: "Hello Team" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});