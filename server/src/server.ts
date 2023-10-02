require("dotenv").config;
import http from "http";
import os from "os";
import cluster from "cluster";

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

if (cluster.isPrimary) {
  const NUMBER_OF_WORKERS = os.cpus().length;

  for (let i = 0; i < NUMBER_OF_WORKERS; i++) {
    cluster.fork();
  }
} else {
  server.listen(PORT);
}
