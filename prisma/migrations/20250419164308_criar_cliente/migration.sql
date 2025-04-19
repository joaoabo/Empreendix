BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Cliente] (
    [Cliente_Id] INT NOT NULL IDENTITY(1,1),
    [Nome_cli] NVARCHAR(1000) NOT NULL,
    [Documento_cli] NVARCHAR(1000),
    [Telefone_cli] NVARCHAR(1000),
    [Email_cli] NVARCHAR(1000),
    [Endereco_cli] NVARCHAR(1000),
    [Tipo_cli] NVARCHAR(1000),
    [Observacao_cli] NVARCHAR(1000),
    [Data_criacao] DATETIME2 NOT NULL CONSTRAINT [Cliente_Data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [Data_atualizacao] DATETIME2 NOT NULL,
    [Status_cli] BIT NOT NULL CONSTRAINT [Cliente_Status_cli_df] DEFAULT 1,
    CONSTRAINT [Cliente_pkey] PRIMARY KEY CLUSTERED ([Cliente_Id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
