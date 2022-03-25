import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://gustavo:Izlesjw35iy-@alura.pylak.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;