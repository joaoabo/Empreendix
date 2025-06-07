/**
 * @swagger
 * tags:
 *   - name: Grupo
 *     description: Rotas para gerenciamento de grupos
 *
 * /api/grupos:
 *   get:
 *     summary: Lista todos os grupos
 *     tags: [Grupo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de grupos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Grupo'
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/grupo/cadastrar:
 *   post:
 *     summary: Cadastra um novo grupo
 *     tags: [Grupo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do grupo para cadastro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GrupoInput'
 *     responses:
 *       201:
 *         description: Grupo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Grupo'
 *       400:
 *         description: Dados inválidos para cadastro
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/grupo/alterar:
 *   put:
 *     summary: Altera um grupo existente
 *     tags: [Grupo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Dados do grupo para alteração (deve incluir id)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/GrupoInput'
 *               - type: object
 *                 required:
 *                   - id
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *     responses:
 *       200:
 *         description: Grupo alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Grupo'
 *       400:
 *         description: Dados inválidos para alteração
 *       404:
 *         description: Grupo não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * /api/grupo/deletar:
 *   delete:
 *     summary: Deleta um grupo pelo id
 *     tags: [Grupo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: ID do grupo para deletar
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
 *         description: Grupo deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Grupo deletado com sucesso.
 *       400:
 *         description: ID não informado
 *       404:
 *         description: Grupo não encontrado
 *       500:
 *         description: Erro interno no servidor
 *
 * components:
 *   schemas:
 *     Grupo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "Administração"
 *         descricao:
 *           type: string
 *           example: "Grupo para o setor administrativo"
 *         criadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *         atualizadoEm:
 *           type: string
 *           format: date-time
 *           example: "2025-06-07T14:00:00Z"
 *     GrupoInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: "Administração"
 *         descricao:
 *           type: string
 *           example: "Grupo para o setor administrativo"
 *       required:
 *         - nome
 */
