// /////////////////////////////////////////////////////////////////////////////
// PLEASE DO NOT MODIFY, RENAME OR REMOVE ANY OF THE CODE BELOW. 
// ALSO DO NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// YOU CAN ADD YOUR OWN CODE TO THIS FILE AND USE THEM IN YOUR WORK.
// /////////////////////////////////////////////////////////////////////////////

import express from 'express';
const routes = express.Router();
import player from "./player/index.js";
import team from "./team/index.js";
// player.default(routes);
// team.default(routes);

const app = express();
app.disable("x-powered-by");



// require("./player").default(routes);
// require('./team').default(routes);

app.use('/api', player);


export default app;