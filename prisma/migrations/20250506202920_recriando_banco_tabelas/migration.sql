BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Usuario] (
    [Id_Usu] INT NOT NULL IDENTITY(1,1),
    [Nome_usu] NVARCHAR(1000) NOT NULL,
    [Email_usu] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Usuario_pkey] PRIMARY KEY CLUSTERED ([Id_Usu]),
    CONSTRAINT [Usuario_Email_usu_key] UNIQUE NONCLUSTERED ([Email_usu])
);

-- CreateTable
CREATE TABLE [dbo].[Otp] (
    [Id_otp] NVARCHAR(1000) NOT NULL,
    [Codigo_otp] NVARCHAR(1000) NOT NULL,
    [UsuarioId] INT NOT NULL,
    [DataExpiracaoCodigo] DATETIME2 NOT NULL,
    [StatusCodigo] BIT NOT NULL CONSTRAINT [Otp_StatusCodigo_df] DEFAULT 0,
    CONSTRAINT [Otp_pkey] PRIMARY KEY CLUSTERED ([Id_otp])
);

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

-- CreateTable
CREATE TABLE [dbo].[Produto] (
    [Produto_Id] INT NOT NULL IDENTITY(1,1),
    [Nome_pro] NVARCHAR(1000) NOT NULL,
    [Descricao_pro] NVARCHAR(1000),
    [Preco_pro] FLOAT(53) NOT NULL,
    [Quantidade_pro] INT,
    [Categoria_pro] NVARCHAR(1000),
    [Imagem_pro] NVARCHAR(1000),
    [Data_criacao] DATETIME2 NOT NULL CONSTRAINT [Produto_Data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [Data_atualizacao] DATETIME2 NOT NULL,
    [Status_pro] BIT NOT NULL CONSTRAINT [Produto_Status_pro_df] DEFAULT 1,
    [GrupoId] INT,
    CONSTRAINT [Produto_pkey] PRIMARY KEY CLUSTERED ([Produto_Id])
);

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

-- CreateTable
CREATE TABLE [dbo].[Orcamento] (
    [Id_Orcamento] INT NOT NULL IDENTITY(1,1),
    [ClienteId] INT NOT NULL,
    [UsuarioId] INT NOT NULL,
    [CriadoEm] DATETIME2 NOT NULL CONSTRAINT [Orcamento_CriadoEm_df] DEFAULT CURRENT_TIMESTAMP,
    [AtualizadoEm] DATETIME2 NOT NULL,
    CONSTRAINT [Orcamento_pkey] PRIMARY KEY CLUSTERED ([Id_Orcamento])
);

-- CreateTable
CREATE TABLE [dbo].[OrcamentoItem] (
    [Id_OrcaItens] INT NOT NULL IDENTITY(1,1),
    [OrcamentoId] INT NOT NULL,
    [Produto] NVARCHAR(1000) NOT NULL,
    [Quantidade] INT NOT NULL,
    [PrecoUnitario] FLOAT(53) NOT NULL,
    [Subtotal] FLOAT(53) NOT NULL,
    CONSTRAINT [OrcamentoItem_pkey] PRIMARY KEY CLUSTERED ([Id_OrcaItens])
);

-- AddForeignKey
ALTER TABLE [dbo].[Otp] ADD CONSTRAINT [Otp_UsuarioId_fkey] FOREIGN KEY ([UsuarioId]) REFERENCES [dbo].[Usuario]([Id_Usu]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Produto] ADD CONSTRAINT [Produto_GrupoId_fkey] FOREIGN KEY ([GrupoId]) REFERENCES [dbo].[Grupo]([Grupo_Id]) ON DELETE SET NULL ON UPDATE CASCADE;

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
