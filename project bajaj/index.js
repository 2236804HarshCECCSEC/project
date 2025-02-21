const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Constants
const USER_ID = "your_name_ddmmyyyy"; // Replace with your actual user ID
const EMAIL = "your.email@university.edu"; // Replace with your email
const ROLL_NUMBER = "your_roll_number"; // Replace with your roll number

// Helper function to check if a string is a number
const isNumber = (str) => !isNaN(str) && !isNaN(parseFloat(str));

// Helper function to check if a string is a single alphabet
const isAlphabet = (str) => /^[A-Za-z]$/.test(str);

// GET endpoint
app.get('/bfhl', (req, res) => {
  return res.status(200).json({
    operation_code: 1
  });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input format. Expected array in 'data' field."
      });
    }

    // Process the data
    const numbers = data.filter(item => isNumber(item));
    const alphabets = data.filter(item => isAlphabet(item));
    const highest_alphabet = alphabets.length > 0 
      ? [alphabets.reduce((max, curr) => curr.toLowerCase() > max.toLowerCase() ? curr : max)]
      : [];

    // Return response
    return res.json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({
      is_success: false,
      message: "Internal server error"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});