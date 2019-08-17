import mongoose from "mongoose";
import { DB_URI } from "./src/config/index";
import { app } from "./src/app";
import { Express } from 'express';



mongoose.connect(DB_URI, {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  loggerLevel: 'info',
  
})
.then(_ => connect(app))
.catch(_ => console.log('Error Connecting...', _));

// // When successfully reconnected
// mongoose.connection.on('reconnected', () => {
//     console.log('dbevent: reconnected');
// });

// // If the connection throws an error
// mongoose.connection.on('error', (err) => {
//     console.log(`dbevent: error: ${err}`);
// });

// // When the connection is disconnected
// mongoose.connection.on('disconnected', () => {
//     console.log('dbevent: disconnected');
// }); 


const connect = (app: Express) =>
  app.listen(3000, () => {
  console.log("Todos Service -- Running on port 3000");
  console.log("......................................");
   
});
 

       