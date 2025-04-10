/*
  Warnings:

  - Added the required column `GrupoId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Produto] ADD [GrupoId] INT NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[Grupo] (
    [Grupo_Id] INT NOT NULL IDENTITY(1,1),
    [Nome_gru] NVARCHAR(1000) NOT NULL,
    [Descricao_gru] NVARCHAR(1000) NOT NULL,
    [Data_criacao] DATETIME2 NOT NULL CONSTRAINT [Grupo_Data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [Data_atualizacao] DATETIME2 NOT NULL,
    [Status_gru] BIT NOT NULL CONSTRAINT [Grupo_Status_gru_df] DEFAULT 1,
    CONSTRAINT [Grupo_pkey] PRIMARY KEY CLUSTERED ([Grupo_Id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Produto] ADD CONSTRAINT [Produto_GrupoId_fkey] FOREIGN KEY ([GrupoId]) REFERENCES [dbo].[Grupo]([Grupo_Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
