import socketio from "socket.io-client";
import React from 'react'
export const socket = socketio.connect('http://localhost:5000');
export const SocketContext = React.createContext();
