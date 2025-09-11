import express from "express";
import userRoute from "./routes/users.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
