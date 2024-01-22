const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const app = express();
const bodyParser = require("body-parser");

// Increase the request size limit
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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

<<<<<<< HEAD

=======
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
const foodRouter = require("./routes/foods_routes.js");
app.use("/foods", foodRouter);

const decorationRouter = require("./routes/decorations_routes.js");
app.use("/decorations", decorationRouter);

const packRouter = require("./routes/packs_routes.js");
app.use("/packs", packRouter);

// For Admin:
const adminRouter = require("./routes/admins_routes.js");
app.use("/admin", adminRouter);

<<<<<<< HEAD
// invite 
const InviteRouter = require('./routes/invitation_routes.js')
 app.use("/invite",InviteRouter) 
=======
// invite
const InviteRouter = require("./routes/invitation_routes.js");
app.use("/invite", InviteRouter);
//upload img
const UploadRoute = require("./routes/uploadImg_route.js");
app.use("/uploadImg", UploadRoute);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
// db.sequelize.sync({ alter: true });
