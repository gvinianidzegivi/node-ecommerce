require('dotenv').config();
require('./database/connection');

const express = require('express');
const routes = require('./routes');

const errorConverterMiddleware = require('./middlewares/errorConverterMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.use(errorConverterMiddleware);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
