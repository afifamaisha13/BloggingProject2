const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

const postRoutes = require("./routes/postRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", postRoutes);

const commentRoutes = require("./routes/commentRoutes");
app.use("/api", commentRoutes);

app.get("/", (req, res) => {
    res.send("Server + DB running 🚀");
});

//app.listen(3000, () => {
    //console.log("Server running on port 3000");
//});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});