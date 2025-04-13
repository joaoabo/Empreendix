import { Router } from 'express';
import * as pingController from '../controllers/ping';
import * as usuarioController from '../controllers/usuario';
import * as produtoController from '../controllers/produto';
import * as homeController from '../controllers/home';
import * as privateController from '../controllers/private';
import { verificarJWT } from '../libs/jwt';
import { tryCatch } from '../utils/tryCatch';

export const mainRouter = Router();

// Rotas públicas
mainRouter.get('/ping', pingController.ping);
mainRouter.post('/usuario/signin', usuarioController.signin);
mainRouter.post('/usuario/signup', usuarioController.signup);
mainRouter.post('/usuario/usarotp', usuarioController.usarOPT);

//Rotas de produtos
mainRouter.get('/produtos', produtoController.listar);
mainRouter.post('/produto/cadastrar', produtoController.cadastrar);
mainRouter.put('/produto/alterar', produtoController.alterar);
mainRouter.delete('/produto/deletar', produtoController.deletar);



// Rotas protegidas (com JWT)
mainRouter.get('/home', verificarJWT, homeController.home);
mainRouter.get('/private', verificarJWT, privateController.privateRoute);
