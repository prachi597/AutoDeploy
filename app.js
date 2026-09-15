const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
   res.send("Hello CI/CD Pipeline - Auto Deployed!");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
