BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Produto] (
    [Produto_Id] INT NOT NULL IDENTITY(1,1),
    [Nome_pro] NVARCHAR(1000) NOT NULL,
    [Descricao_pro] NVARCHAR(1000) NOT NULL,
    [Preco_pro] FLOAT(53) NOT NULL,
    [Quantidade_pro] INT NOT NULL,
    [Categoria_pro] NVARCHAR(1000) NOT NULL,
    [Imagem_pro] NVARCHAR(1000) NOT NULL,
    [Data_criacao] DATETIME2 NOT NULL CONSTRAINT [Produto_Data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [Data_atualizacao] DATETIME2 NOT NULL,
    [Status_pro] BIT NOT NULL CONSTRAINT [Produto_Status_pro_df] DEFAULT 1,
    CONSTRAINT [Produto_pkey] PRIMARY KEY CLUSTERED ([Produto_Id])
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
