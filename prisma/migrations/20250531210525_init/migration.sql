-- CreateTable
CREATE TABLE "Usuario" (
    "Id_Usu" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome_usu" TEXT NOT NULL,
    "Email_usu" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Otp" (
    "Id_otp" TEXT NOT NULL PRIMARY KEY,
    "Codigo_otp" TEXT NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "DataExpiracaoCodigo" DATETIME NOT NULL,
    "StatusCodigo" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Otp_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario" ("Id_Usu") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo" (
    "Grupo_Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome_gru" TEXT NOT NULL,
    "Descricao_gru" TEXT NOT NULL,
    "Data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Data_atualizacao" DATETIME NOT NULL,
    "Status_gru" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Produto" (
    "Produto_Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome_pro" TEXT NOT NULL,
    "Descricao_pro" TEXT,
    "Preco_pro" REAL NOT NULL,
    "Quantidade_pro" INTEGER,
    "Categoria_pro" TEXT,
    "Imagem_pro" TEXT,
    "Data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Data_atualizacao" DATETIME NOT NULL,
    "Status_pro" BOOLEAN NOT NULL DEFAULT true,
    "GrupoId" INTEGER,
    CONSTRAINT "Produto_GrupoId_fkey" FOREIGN KEY ("GrupoId") REFERENCES "Grupo" ("Grupo_Id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cliente" (
    "Cliente_Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome_cli" TEXT NOT NULL,
    "Documento_cli" TEXT,
    "Telefone_cli" TEXT,
    "Email_cli" TEXT,
    "Endereco_cli" TEXT,
    "Tipo_cli" TEXT,
    "Observacao_cli" TEXT,
    "Data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Data_atualizacao" DATETIME NOT NULL,
    "Status_cli" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Orcamento" (
    "Id_Orcamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ClienteId" INTEGER NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "CriadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AtualizadoEm" DATETIME NOT NULL,
    "StatusOrcamento" TEXT NOT NULL DEFAULT 'aberto',
    CONSTRAINT "Orcamento_ClienteId_fkey" FOREIGN KEY ("ClienteId") REFERENCES "Cliente" ("Cliente_Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orcamento_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario" ("Id_Usu") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrcamentoItem" (
    "Id_OrcaItens" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "OrcamentoId" INTEGER NOT NULL,
    "ProdutoId" INTEGER NOT NULL,
    "Quantidade" INTEGER NOT NULL,
    "PrecoUnitario" REAL NOT NULL,
    "Subtotal" REAL NOT NULL,
    CONSTRAINT "OrcamentoItem_OrcamentoId_fkey" FOREIGN KEY ("OrcamentoId") REFERENCES "Orcamento" ("Id_Orcamento") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrcamentoItem_ProdutoId_fkey" FOREIGN KEY ("ProdutoId") REFERENCES "Produto" ("Produto_Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Email_usu_key" ON "Usuario"("Email_usu");
