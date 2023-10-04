import http from "http";
import os from "os";
import cluster from "cluster";
import mongoose from "mongoose";

import app from "./app"

import { keys } from "./key/key";


const DEFAULT_PORT: Number = keys.PORT_NUMBER;
const PORT = process.env.PORT || DEFAULT_PORT;

const server = http.createServer(app);

async function connect() {
  try {
    await mongoose.connect(keys.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}


if (cluster.isPrimary) {
  const NUMBER_OF_WORKERS = os.cpus().length;

  for (let i = 0; i < NUMBER_OF_WORKERS; i++) {
    cluster.fork();
  }
} else {
  connect().then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
}
