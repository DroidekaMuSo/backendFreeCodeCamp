import express from "express";
import { NODE_ENV, PORT } from "./config/config";

const app = express();

app.listen(PORT, () => {
  console.log(`API running on port ${PORT} in mode: ${NODE_ENV}`);
});
