import { Router } from 'express';
import { verificarJWT } from '../libs/jwt';

import * as privateController from '../controllers/private';

import * as usuarioController from '../controllers/usuario/usuario';
import * as produtoController from '../controllers/produto/produto';
import * as homeController from '../controllers/home/home';
import * as grupoController from '../controllers/grupo/grupo';
import * as clienteController from '../controllers/cliente/cliente';

export const mainRouter = Router();

// Rotas públicas
mainRouter.post('/usuario/signin', usuarioController.signin);
mainRouter.post('/usuario/signup', usuarioController.signup);
mainRouter.post('/usuario/usarotp', usuarioController.usarOPT);

// Rotas protegidas (com JWT)
mainRouter.get('/private', verificarJWT, privateController.privateRoute);
mainRouter.get('/home', verificarJWT, homeController.home);

//Rotas de produtos
mainRouter.get('/produtos', verificarJWT, produtoController.listar);
mainRouter.post('/produto/cadastrar', verificarJWT, produtoController.cadastrar);
mainRouter.put('/produto/alterar', verificarJWT, produtoController.alterar);
mainRouter.delete('/produto/deletar', verificarJWT, produtoController.deletar);

//Rotas de grupo
mainRouter.get('/grupos', verificarJWT, grupoController.listar);
mainRouter.post('/grupo/cadastrar', verificarJWT, grupoController.cadastrar);
mainRouter.put('/grupo/alterar', verificarJWT, grupoController.alterar);
mainRouter.delete('/grupo/deletar', verificarJWT, grupoController.deletar);

//Rotas de Clientes
mainRouter.post('/cliente/cadastrar', clienteController.cadastrar);