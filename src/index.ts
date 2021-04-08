import express from 'express';
import { resPong } from './routes';

const app = express();

app.get('/', resPong);
app.listen(3333);
