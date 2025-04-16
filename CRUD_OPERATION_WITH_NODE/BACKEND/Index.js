const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');
const userRoutes = require('./Routes/UserRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
