/**
 * @swagger
 * /api/private:
 *   get:
 *     summary: Rota protegida com autenticação JWT
 *     tags: [Privado]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso autorizado. Token válido.
 *       401:
 *         description: Token ausente ou inválido
 */
