import http from "http";
import os from "os";
import cluster from "cluster";
import mongoose from "mongoose";

import app from "./app";

import { keys } from "./key/key";

const DEFAULT_PORT: Number = keys.PORT_NUMBER;
const PORT = process.env.PORT || DEFAULT_PORT;

const server = http.createServer(app);

async function connect(): Promise<void> {
  try {
    await mongoose.connect(keys.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

async function startServer(): Promise<void> {
  if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }
  } else {
    await connect();
    server.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

startServer();
