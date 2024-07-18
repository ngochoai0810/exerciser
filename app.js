const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("", authRoutes);
app.listen(PORT, () => {
  
  console.log(`Server is running at: http://localhost:${PORT}`);
});
