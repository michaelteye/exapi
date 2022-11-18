// /////////////////////////////////////////////////////////////////////////////
// PLEASE DO NOT MODIFY, RENAME OR REMOVE ANY OF THE CODE BELOW.
// ALSO DO NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// YOU CAN ADD YOUR OWN CODE TO THIS FILE AND USE THEM IN YOUR WORK.
// /////////////////////////////////////////////////////////////////////////////


import express from "express";


const app = express();
app.disable("x-powered-by");



require("./player").default(routes);
require("./team").default(routes);

app.use(express.json());
app.use("/api", routes);


export default app;
