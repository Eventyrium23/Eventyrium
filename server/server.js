const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());
/* Connect database with server  */
const db = require("./models/index.js");

/* send request with routes  */
const userRouter = require("./routes/users_routes.js");
app.use("/user", userRouter);

const placeRouter = require("./routes/places_routes.js");
app.use("/places", placeRouter);


const foodRouter = require("./routes/foods_routes.js");
app.use("/foods", foodRouter);

const decorationRouter = require("./routes/decorations_routes.js");
app.use("/decorations", decorationRouter);

const packRouter = require("./routes/packs_routes.js");
app.use("/packs", packRouter);

// For Admin:
const adminRouter = require("./routes/admins_routes.js");
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
// db.sequelize.sync({ force: true });
