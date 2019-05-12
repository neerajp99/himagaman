const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Initializing the port
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
