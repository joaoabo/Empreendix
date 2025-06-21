-- CreateTable
CREATE TABLE "Usuario" (
    "Id_Usu" SERIAL NOT NULL,
    "Nome_usu" TEXT NOT NULL,
    "Email_usu" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("Id_Usu")
);

-- CreateTable
CREATE TABLE "Otp" (
    "Id_otp" TEXT NOT NULL,
    "Codigo_otp" TEXT NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "DataExpiracaoCodigo" TIMESTAMP(3) NOT NULL,
    "StatusCodigo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("Id_otp")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "Grupo_Id" SERIAL NOT NULL,
    "Nome_gru" TEXT NOT NULL,
    "Descricao_gru" TEXT NOT NULL,
    "Data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Data_atualizacao" TIMESTAMP(3) NOT NULL,
    "Status_gru" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("Grupo_Id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "Produto_Id" SERIAL NOT NULL,
    "Nome_pro" TEXT NOT NULL,
    "Descricao_pro" TEXT,
    "Preco_pro" DOUBLE PRECISION NOT NULL,
    "Quantidade_pro" INTEGER,
    "Categoria_pro" TEXT,
    "Imagem_pro" TEXT,
    "Data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Data_atualizacao" TIMESTAMP(3) NOT NULL,
    "Status_pro" BOOLEAN NOT NULL DEFAULT true,
    "GrupoId" INTEGER,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("Produto_Id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "Cliente_Id" SERIAL NOT NULL,
    "Nome_cli" TEXT NOT NULL,
    "Documento_cli" TEXT,
    "Telefone_cli" TEXT,
    "Email_cli" TEXT,
    "Endereco_cli" TEXT,
    "Tipo_cli" TEXT,
    "Observacao_cli" TEXT,
    "Data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Data_atualizacao" TIMESTAMP(3) NOT NULL,
    "Status_cli" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("Cliente_Id")
);

-- CreateTable
CREATE TABLE "Orcamento" (
    "Id_Orcamento" SERIAL NOT NULL,
    "ClienteId" INTEGER NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AtualizadoEm" TIMESTAMP(3) NOT NULL,
    "StatusOrcamento" TEXT NOT NULL DEFAULT 'aberto',

    CONSTRAINT "Orcamento_pkey" PRIMARY KEY ("Id_Orcamento")
);

-- CreateTable
CREATE TABLE "OrcamentoItem" (
    "Id_OrcaItens" SERIAL NOT NULL,
    "OrcamentoId" INTEGER NOT NULL,
    "ProdutoId" INTEGER NOT NULL,
    "Quantidade" INTEGER NOT NULL,
    "PrecoUnitario" DOUBLE PRECISION NOT NULL,
    "Subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrcamentoItem_pkey" PRIMARY KEY ("Id_OrcaItens")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Email_usu_key" ON "Usuario"("Email_usu");

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("Id_Usu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_GrupoId_fkey" FOREIGN KEY ("GrupoId") REFERENCES "Grupo"("Grupo_Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_ClienteId_fkey" FOREIGN KEY ("ClienteId") REFERENCES "Cliente"("Cliente_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("Id_Usu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_OrcamentoId_fkey" FOREIGN KEY ("OrcamentoId") REFERENCES "Orcamento"("Id_Orcamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_ProdutoId_fkey" FOREIGN KEY ("ProdutoId") REFERENCES "Produto"("Produto_Id") ON DELETE RESTRICT ON UPDATE CASCADE;
