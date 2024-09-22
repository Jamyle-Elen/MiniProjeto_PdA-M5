import express from 'express';
import cors from 'cors';
// import Burned from './src/models/BurnedModel.js';
import db from './src/config/database.js';
import routes from './src/routes/routes.js';
// import routes from './routes';

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})