import express from "express";
import cors from "cors";
import useRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.NODE_PORT || 8800;

app.use(express.json());
app.use(cors());

app.use("/", useRoutes);

app.listen(PORT, () => {
  console.log(`Server is ruinning in port ${PORT}`);
});
