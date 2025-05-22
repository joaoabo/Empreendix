/*
  Warnings:

  - You are about to drop the column `Produto` on the `OrcamentoItem` table. All the data in the column will be lost.
  - Added the required column `ProdutoId` to the `OrcamentoItem` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[OrcamentoItem] DROP COLUMN [Produto];
ALTER TABLE [dbo].[OrcamentoItem] ADD [ProdutoId] INT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[OrcamentoItem] ADD CONSTRAINT [OrcamentoItem_ProdutoId_fkey] FOREIGN KEY ([ProdutoId]) REFERENCES [dbo].[Produto]([Produto_Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
