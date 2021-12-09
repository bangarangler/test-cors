const express = require("express");
const cors = require("cors");

const app = express();

const allowlist = [
  "http://localhost:3000",
  "http://ec2-3-88-70-180.compute-1.amazonaws.com/",
];

const corsOptions = {
  origin: allowlist,
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ statusCode: 200, message: "Hello World" });
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
