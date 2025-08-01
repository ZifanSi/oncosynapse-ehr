const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes'); 
app.use('/api/auth', authRoutes);

const PORT = process.env.AUTH_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Auth service running on http://localhost:${PORT}`);
});
