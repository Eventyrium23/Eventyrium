const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const app = express();

/* Connect database with server  */
const db = require("./models/index.js");
/* Middleware */
app.use(express.json());
app.use(cors());


/* send request with routes  */
const userRouter = require("./routes/users_routes.js");
app.use("/user", userRouter);









app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});