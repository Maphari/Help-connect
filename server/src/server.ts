import http from "http";
import os from "os";
import cluster from "cluster";
import mongoose from "mongoose";

import app from "./app";

import { keys } from "./key/key";

const DEFAULT_PORT: Number = keys.PORT_NUMBER;
const PORT = process.env.PORT || DEFAULT_PORT;

const server = http.createServer(app);

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
