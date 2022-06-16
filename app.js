import express from 'express';
import morgan from 'morgan';

import {createRoles} from './libs/initSteup';
import productsRoutes from './routes/products.routes';
import authRoute from './routes/auth.routes';

const app = express();
createRoles();
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.json("welcome to the api");
})

app.use('/api/products' , productsRoutes)
app.use('/api/auth' , authRoute)
export default app;