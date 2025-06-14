/**
 * @swagger
 * tags:
 *   - name: Cliente
 *     description: Rotas para gerenciamento de clientes
 *
 * /api/clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/cliente/cadastrar:
 *   post:
 *     summary: Cadastra um novo cliente
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do cliente para cadastro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteInput'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Dados inválidos para cadastro
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/cliente/alterar:
 *   put:
 *     summary: Altera um cliente existente
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do cliente para alteração (deve incluir id)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/ClienteInput'
 *               - type: object
 *                 required:
 *                   - id
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *     responses:
 *       200:
 *         description: Cliente alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Dados inválidos para alteração
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/cliente/deletar:
 *   delete:
 *     summary: Deleta um cliente pelo id
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: ID do cliente para deletar
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
 *         description: Cliente deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Cliente deletado com sucesso.
 *       400:
 *         description: ID não informado
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "João Silva"
 *         email:
 *           type: string
 *           example: "joao.silva@email.com"
 *         telefone:
 *           type: string
 *           example: "(11) 99999-9999"
 *         criadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *         atualizadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *     ClienteInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: "João Silva"
 *         email:
 *           type: string
 *           example: "joao.silva@email.com"
 *         telefone:
 *           type: string
 *           example: "(11) 99999-9999"
 *       required:
 *         - nome
 *         - email
 */
