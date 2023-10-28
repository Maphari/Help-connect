import { keys } from "./key/key";
import app from "./app";
import http from "http";
import { Server, Socket } from "socket.io";
const DEFAULT_PORT: number = keys.PORT_NUMBER;
const PORT: number | string = process.env.PORT || DEFAULT_PORT;

const SERVER = http.createServer(app);
const io = new Server(SERVER, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

SERVER.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
