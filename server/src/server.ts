import { keys } from "./key/key";
import app from "./app";
import http from "http";
import { request } from "websocket";

const WebSocketServer = require("websocket").server;
const DEFAULT_PORT: number = keys.PORT_NUMBER;
const PORT: number | string = process.env.PORT || DEFAULT_PORT;
const SERVER = http.createServer(app);

const wsServer = new WebSocketServer({
  httpServer: SERVER,
});

const connections: any[] = []; // Array to store all active connections

wsServer.on("request", function (request: request) {
  console.log("WebSocket connection requested");

  const connection = request.accept(null, request.origin);
  console.log("WebSocket connection accepted");

  connections.push(connection); // Add the new connection to the array

  connection.on("message", (message: any) => {
    if (message.utf8Data) {
      connections.forEach(function (client) {
        client.sendUTF(message.utf8Data); // Broadcast the message to all connected clients
      });
    } else {
      console.log(false);
    }
  });

  connection.on("close", function (reasonCode, description) {
    console.log("WebSocket connection closed");
    const index = connections.indexOf(connection);
    if (index !== -1) {
      connections.splice(index, 1); // Remove the closed connection from the array
    }
  });
});

SERVER.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
