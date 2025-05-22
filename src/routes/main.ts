import { Router } from 'express';

import * as privateController from '../controllers/private';
import * as usuarioController from '../controllers/usuario/usuario';
import * as produtoController from '../controllers/produto/produto';
import * as homeController from '../controllers/home/home';
import * as grupoController from '../controllers/grupo/grupo';
import * as clienteController from '../controllers/cliente/cliente';
import * as orcamentoController from '../controllers/orcamento/orcamento';
import * as orcamentoItensController from '../controllers/orcamento/orcamentoItens';


export const mainRouter = Router();
export const privateRouter = Router();

mainRouter.post('/usuario/signin', usuarioController.signin);
mainRouter.post('/usuario/signup', usuarioController.signup);
mainRouter.post('/usuario/usarotp', usuarioController.usarOPT);
mainRouter.get('/homePublica', homeController.homePublica);


privateRouter.get('/private', privateController.privateRoute);

// Rotas de produtos
privateRouter.get('/produtos', produtoController.listar);
privateRouter.get('/buscarTodosProdutos', produtoController.buscaInteligente);
privateRouter.post('/produto/cadastrar', produtoController.cadastrar);
privateRouter.put('/produto/alterar', produtoController.alterar);
privateRouter.delete('/produto/deletar', produtoController.deletar);

// Rotas de grupos
privateRouter.get('/grupos', grupoController.listar);
privateRouter.post('/grupo/cadastrar', grupoController.cadastrar);
privateRouter.put('/grupo/alterar', grupoController.alterar);
privateRouter.delete('/grupo/deletar', grupoController.deletar);

// Rotas de clientes
privateRouter.get('/clientes', clienteController.listar);
privateRouter.post('/cliente/cadastrar', clienteController.cadastrar);
privateRouter.put('/cliente/alterar', clienteController.alterar);
privateRouter.delete('/cliente/deletar', clienteController.deletar);

// Rotas de orcamento
privateRouter.post('/orcamento/criar', orcamentoController.criarOrcamento);
privateRouter.put('/orcamento/alterar', orcamentoController.alterarOrcamento);

// Rotas de orcamentoItens
privateRouter.post('/orcamentoItens/criar', orcamentoItensController.criarOrcaItens);