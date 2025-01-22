const express = require("express");
const app = express();
app.use("/server", (req, res) => {
  res.send("hello from the server");
});
app.listen(300, () => {
  console.log("server is running on the port 3000");
});
