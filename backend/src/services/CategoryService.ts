import { Service } from "typedi";
import { Categoria } from "../../generated/prisma";
import type { CriarCategoriaDTO } from "@aero-beach/api-schema/TorneioDTO";
import { CategoriaForm } from "../DTOs/CategoriaForm";
import DatabaseService from "./DatabaseService";

@Service()
export class CategoryService {
  constructor(private databaseService: DatabaseService) {}

  async createCategory(categoria: CategoriaForm): Promise<Categoria> {
    const data: CriarCategoriaDTO = {
      torneioId: categoria.torneioId,
      genero: categoria.genero,
      modalidade: categoria.modalidade,
      nivel: categoria.nivel,
      valorInscricao: categoria.valorInscricao,
      dataRealizacao: categoria.dataRealizacao
        ? categoria.dataRealizacao.toISOString()
        : null,
    };

    return await this.databaseService.createCategory(data);
  }
}