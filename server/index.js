const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/form", (req, res) => {
	const { role, range, country, agreement } = req.body;

	if (!role || !range || !country || !agreement) {
		return res.status(400).json({ message: "All fields are required!" });
	}

	console.log({ role, range, country, agreement });

	return res.status(200).json({ message: "Form submitted successfully!" });
});

const PORT = 7070; // Change later
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
