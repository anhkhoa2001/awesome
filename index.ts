import express from "express";
import userRoutes from "./src/route/UserRoute";
import { errorHandler } from "./src/middleware/ErrorHandler";
import { logging } from "./src/middleware/Logging";
import connectDB from "./src/config/MongoConfig";
import { responseWrapper } from "./src/middleware/WrapResponse";

const app = express();
const port = 8080;

app.use(express.json()); // Middleware to parse JSON
app.use(logging);
app.use(responseWrapper);
app.use("/api", userRoutes); // Use the user routes
connectDB();
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
