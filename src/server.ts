import express from 'express';
import routes from './routes';

let PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`API RUNNING ON PORT ${PORT}`));
