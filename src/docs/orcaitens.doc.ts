/**
 * @swagger
 * tags:
 *   - name: OrcamentoItens
 *     description: Rotas para gerenciamento dos itens do orçamento
 *
 * /api/orcamentoItens/criar:
 *   post:
 *     summary: Cria um novo item de orçamento
 *     tags: [OrcamentoItens]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do item de orçamento para criação
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrcamentoItensInput'
 *     responses:
 *       201:
 *         description: Item de orçamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrcamentoItens'
 *       400:
 *         description: Dados inválidos para criação
 *       500:
 *         description: Erro interno no servidor
 *
 * components:
 *   schemas:
 *     OrcamentoItens:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         orcamentoId:
 *           type: integer
 *           example: 5
 *         produtoId:
 *           type: integer
 *           example: 15
 *         quantidade:
 *           type: integer
 *           example: 3
 *         valorUnitario:
 *           type: number
 *           format: float
 *           example: 50.00
 *         criadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *         atualizadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *     OrcamentoItensInput:
 *       type: object
 *       properties:
 *         orcamentoId:
 *           type: integer
 *           example: 5
 *         produtoId:
 *           type: integer
 *           example: 15
 *         quantidade:
 *           type: integer
 *           example: 3
 *         valorUnitario:
 *           type: number
 *           format: float
 *           example: 50.00
 *       required:
 *         - orcamentoId
 *         - produtoId
 *         - quantidade
 *         - valorUnitario
 */
