const express = require("express");

const app = express();

const port = 3000;

app.use("/", require("./routes"));
app.use("/contacts", require("./routes/contacts"));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });