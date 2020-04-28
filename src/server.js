const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const TicketsController = require('./controllers/TicketsController');
const AuthController = require('./controllers/AuthController');
const logger = require('./services/LoggerService');
const mongoose = require('./DB/MongooseModule');
const AuthMiddleware = require('./services/AuthMiddleware');

const bootstrap = async () => {
  const app = express();

  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  await mongoose.connect();
  app.use(cors());
  app.use('/tickets', AuthMiddleware, TicketsController);
  app.use('/auth', AuthController);

  app.listen(process.env.PORT, () => {
    logger.info(`Server start at: ${process.env.PORT}`);
  });
};


bootstrap();
