const express = require("express");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const app = express();

app.get("/", (req, res) => {
	return res.status(200).json({ message: "Hello World!" });
});

const PORT = 7070; // Change later
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
