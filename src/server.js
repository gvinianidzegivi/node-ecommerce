require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
