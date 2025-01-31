import express, {Express} from 'express';
import router from './routes';
import cors from "cors";

const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);
app.use(cors(
    {
        origin: 'http://localhost:3001',
    }
));

export default app;