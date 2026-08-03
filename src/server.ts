import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 8080;
// starts the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
