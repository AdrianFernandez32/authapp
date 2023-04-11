import express, {Application} from 'express';
import morgan from 'morgan';
//Routes
import IndexRoutes from './routes/index.routes'
import UsersRoutes from './routes/users.routes'
import LoginRoute from './routes/auth.routes'


export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express()
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT ||8080)
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/users', UsersRoutes);
        this.app.use('/login', LoginRoute)
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log("Server on port", this.app.get('port'));
    }
}