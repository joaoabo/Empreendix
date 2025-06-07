/**
 * @swagger
 * tags:
 *   - name: Orçamento
 *     description: Rotas para gerenciamento de orçamentos
 *
 * /api/orcamento/criar:
 *   post:
 *     summary: Cria um novo orçamento
 *     tags: [Orçamento]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do orçamento para criação
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrcamentoInput'
 *     responses:
 *       201:
 *         description: Orçamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orcamento'
 *       400:
 *         description: Dados inválidos para criação
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/orcamento/alterar:
 *   put:
 *     summary: Altera um orçamento existente
 *     tags: [Orçamento]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do orçamento para alteração (deve incluir id)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/OrcamentoInput'
 *               - type: object
 *                 required:
 *                   - id
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *     responses:
 *       200:
 *         description: Orçamento alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orcamento'
 *       400:
 *         description: Dados inválidos para alteração
 *       404:
 *         description: Orçamento não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * components:
 *   schemas:
 *     Orcamento:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         clienteId:
 *           type: integer
 *           example: 10
 *         valorTotal:
 *           type: number
 *           format: float
 *           example: 1500.50
 *         status:
 *           type: string
 *           example: "pendente"
 *         criadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *         atualizadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *     OrcamentoInput:
 *       type: object
 *       properties:
 *         clienteId:
 *           type: integer
 *           example: 10
 *         valorTotal:
 *           type: number
 *           format: float
 *           example: 1500.50
 *         status:
 *           type: string
 *           example: "pendente"
 *       required:
 *         - clienteId
 *         - valorTotal
 *         - status
 */
