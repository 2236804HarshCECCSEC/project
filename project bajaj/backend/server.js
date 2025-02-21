const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// GET method: returns operation_code
app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST method: processes user input
app.post("/bfhl", (req, res) => {
    try {
        const { full_name, dob, data } = req.body;

        if (!full_name || !dob || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        const user_id = `${full_name.replace(" ", "_")}_${dob}`;
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

        res.status(200).json({
            is_success: true,
            user_id,
            email: "your_college_email@example.com",
            roll_number: "your_roll_number",
            numbers,
            alphabets
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
