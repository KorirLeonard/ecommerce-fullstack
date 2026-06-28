const { connectDB } = require("./config/db");
const app = require("./app");
const PORT = 4000;
connectDB(); // Connect to the database before starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
