const express = require('express')
const cors = require('cors');
const User = require('./routes/users')
const app = express();
const PORT = process.env.PORT || 5000;


require("dotenv").config();
require('./dbConnection/connectDB')

app.use(cors());
app.use(express.json());
app.use('/api/users',User)

// routes


app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});