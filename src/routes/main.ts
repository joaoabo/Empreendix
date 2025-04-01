import { Router } from 'express';
import * as pingController from '../controllers/ping'
import * as usuarioController from '../controllers/usuario'

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);
mainRouter.post('/usuario/signin', usuarioController.signin);
mainRouter.post('/usuario/signup', usuarioController.signup);

mainRouter.post('/usuario/usarotp', usuarioController.usarOPT);