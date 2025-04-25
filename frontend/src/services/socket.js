import io from "socket.io-client";

// Replace with your actual Render backend URL
const socket = io("https://your-backend-name.onrender.com");

export default socket;
