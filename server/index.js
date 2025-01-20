const express = require("express");
const app = express();

app.get("/", (req, res) => {
	return res.status(200).json({ message: "Hello World!" });
});

const PORT = 7070; // Change later
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
