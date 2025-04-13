BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Produto] DROP CONSTRAINT [Produto_GrupoId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Produto] ALTER COLUMN [Descricao_pro] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Produto] ALTER COLUMN [Quantidade_pro] INT NULL;
ALTER TABLE [dbo].[Produto] ALTER COLUMN [Categoria_pro] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Produto] ALTER COLUMN [Imagem_pro] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Produto] ALTER COLUMN [GrupoId] INT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Produto] ADD CONSTRAINT [Produto_GrupoId_fkey] FOREIGN KEY ([GrupoId]) REFERENCES [dbo].[Grupo]([Grupo_Id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
