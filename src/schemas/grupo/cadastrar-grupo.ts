import { z } from "zod";

export const cadastrarGrupoSchema = z.object({
  Nome_gru: z.string({ message: "Nome é obrigatório" }).min(3),
  Descricao_gru: z.string({ message: "Descrição é obrigatória" }).min(10),
});

export const alterarGrupoSchema = z.object({
  Grupo_Id: z.number({ message: "ID do grupo é obrigatório" }),
  Nome_gru: z.string({ message: "Nome é obrigatório" }).min(3).optional(),
  Descricao_gru: z.string({ message: "Descrição é obrigatória" }).min(10).optional(),
  Status_gru: z.boolean().optional(),
});
