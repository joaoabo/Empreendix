import { Router } from 'express';
import * as pingController from '../controllers/ping'
import * as usuarioController from '../controllers/usuario'
import * as homeController from '../controllers/home'
import * as privateController from '../controllers/private'
import { verificarJWT } from '../libs/jwt';

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);
mainRouter.post('/usuario/signin', usuarioController.signin);
mainRouter.post('/usuario/signup', usuarioController.signup);
mainRouter.post('/usuario/usarotp', usuarioController.usarOPT);


mainRouter.get('/home', verificarJWT, homeController.home);

mainRouter.get('/private', verificarJWT, privateController.privateRoute);