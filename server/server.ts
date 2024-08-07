import {app} from './app';
require("dotenv").config();

//creating server
app.listen(process.env.PORT, () => {
  console.log(`Server is conncetd with port ${process.env.PORT}`);
});