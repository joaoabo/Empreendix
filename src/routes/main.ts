import { Router } from 'express';
import * as usuarioController from '../controllers/usuario/usuario';
import * as produtoController from '../controllers/produto/produto';
import * as homeController from '../controllers/home/home';
import * as grupoController from '../controllers/grupo/grupo';
import * as privateController from '../controllers/private';
import { verificarJWT } from '../libs/jwt';

export const mainRouter = Router();

// Rotas públicas
mainRouter.post('/usuario/signin', usuarioController.signin);
mainRouter.post('/usuario/signup', usuarioController.signup);
mainRouter.post('/usuario/usarotp', usuarioController.usarOPT);

//Rotas de produtos
mainRouter.get('/produtos', produtoController.listar);
mainRouter.post('/produto/cadastrar', produtoController.cadastrar);
mainRouter.put('/produto/alterar', produtoController.alterar);
mainRouter.delete('/produto/deletar', produtoController.deletar);

//Rotas de grupo
mainRouter.get('/grupos', grupoController.listar);
mainRouter.post('/grupo/cadastrar', grupoController.cadastrar);
mainRouter.put('/grupo/alterar', grupoController.alterar);
mainRouter.delete('/grupo/deletar', grupoController.deletar);



// Rotas protegidas (com JWT)
mainRouter.get('/home', verificarJWT, homeController.home);
mainRouter.get('/private', verificarJWT, privateController.privateRoute);
