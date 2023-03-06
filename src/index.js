import DefaultTemplate from "utils/defaultTemplate";
import app from "./server";
import express from "express";
import https from "https";
import fs from "fs";
import "colors";

// Get port
const PORT = app.get("port");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

//listen server
https.createServer(options, app).listen(PORT, () => {
  try {
    console.log("Listen on port:".blue, `${PORT}`.rainbow.underline);
    app.use("/", (req, res) => {
      res.send(DefaultTemplate(PORT));
    });
  } catch (error) {
    console.log(error);
  }
});
