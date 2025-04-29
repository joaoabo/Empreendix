BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Orcamento] (
    [Id_Orcamento] NVARCHAR(1000) NOT NULL,
    [ClienteId] INT NOT NULL,
    [UsuarioId] INT NOT NULL,
    [CriadoEm] DATETIME2 NOT NULL CONSTRAINT [Orcamento_CriadoEm_df] DEFAULT CURRENT_TIMESTAMP,
    [AtualizadoEm] DATETIME2 NOT NULL,
    CONSTRAINT [Orcamento_pkey] PRIMARY KEY CLUSTERED ([Id_Orcamento])
);

-- CreateTable
CREATE TABLE [dbo].[OrcamentoItem] (
    [Id_OrcaItens] NVARCHAR(1000) NOT NULL,
    [OrcamentoId] NVARCHAR(1000) NOT NULL,
    [Produto] NVARCHAR(1000) NOT NULL,
    [Quantidade] INT NOT NULL,
    [PrecoUnitario] FLOAT(53) NOT NULL,
    [Subtotal] FLOAT(53) NOT NULL,
    CONSTRAINT [OrcamentoItem_pkey] PRIMARY KEY CLUSTERED ([Id_OrcaItens])
);

-- AddForeignKey
ALTER TABLE [dbo].[Orcamento] ADD CONSTRAINT [Orcamento_ClienteId_fkey] FOREIGN KEY ([ClienteId]) REFERENCES [dbo].[Cliente]([Cliente_Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Orcamento] ADD CONSTRAINT [Orcamento_UsuarioId_fkey] FOREIGN KEY ([UsuarioId]) REFERENCES [dbo].[Usuario]([Id_Usu]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrcamentoItem] ADD CONSTRAINT [OrcamentoItem_OrcamentoId_fkey] FOREIGN KEY ([OrcamentoId]) REFERENCES [dbo].[Orcamento]([Id_Orcamento]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
