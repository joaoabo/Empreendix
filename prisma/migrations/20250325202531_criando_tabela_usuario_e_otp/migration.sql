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

-- AddForeignKey
ALTER TABLE [dbo].[Otp] ADD CONSTRAINT [Otp_UsuarioId_fkey] FOREIGN KEY ([UsuarioId]) REFERENCES [dbo].[Usuario]([Id_Usu]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
