/**
 * @swagger
 * tags:
 *   - name: Produto
 *     description: Rotas para gerenciamento de produtos
 *
 * /api/produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/buscarTodosProdutos:
 *   get:
 *     summary: Busca inteligente de produtos pelo nome
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Termo de busca para filtrar produtos pelo nome
 *     responses:
 *       200:
 *         description: Produtos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/produto/cadastrar:
 *   post:
 *     summary: Cadastra um novo produto
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do produto para cadastro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProdutoInput'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       400:
 *         description: Dados inválidos para cadastro
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/produto/alterar:
 *   put:
 *     summary: Altera um produto existente
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do produto para alteração (deve incluir id)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/ProdutoInput'
 *               - type: object
 *                 required:
 *                   - id
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *     responses:
 *       200:
 *         description: Produto alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       400:
 *         description: Dados inválidos para alteração
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/produto/deletar:
 *   delete:
 *     summary: Deleta um produto pelo id
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: ID do produto para deletar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Produto deletado com sucesso.
 *       400:
 *         description: ID não informado
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "Camiseta"
 *         descricao:
 *           type: string
 *           example: "Camiseta 100% algodão"
 *         preco:
 *           type: number
 *           format: float
 *           example: 79.9
 *         criadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *         atualizadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *     ProdutoInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: "Camiseta"
 *         descricao:
 *           type: string
 *           example: "Camiseta 100% algodão"
 *         preco:
 *           type: number
 *           format: float
 *           example: 79.9
 *       required:
 *         - nome
 *         - preco
 */