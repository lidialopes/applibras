import { Router } from 'express';

import signRouter from './sign.routes';

const routes = Router();

routes.use('/sign', signRouter);

export default routes;
