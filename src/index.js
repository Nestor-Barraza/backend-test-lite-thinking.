import DefaultTemplate from "utils/defaultTemplate";
import app from "./server";
import "colors";

// Get port
const PORT = app.get("port");

//listen server
app.listen(PORT, () => {
  try {
    console.log("Listen on port:".blue, `${PORT}`.rainbow.underline);
    app.use("/", (req, res) => {
      res.send(DefaultTemplate(PORT));
    });
  } catch (error) {
    console.log(error);
  }
});
