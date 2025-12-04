import express from 'express'
import cookieParser from 'cookies-parser'
import config from './config/config.js'
import routes from './routes/routes.js'

const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'))

//Route
app.use('/api', routes);

//listen for server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
