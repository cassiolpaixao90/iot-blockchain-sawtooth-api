"use strict";

const cors  = require("cors");
// import userRouter                   from "../routes/user-route";

function ConfigApiRoutes(app) {
    app.use(cors());
    // app.use("/api/user", userRouter);
}

module.exports = { ConfigApiRoutes }
