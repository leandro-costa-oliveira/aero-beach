import { Service } from "typedi";
import bcrypt from "bcrypt";
import { CadastroJogadorForm } from "../DTOs/CadastroJogadorForm";
import DatabaseService from "./DatabaseService";

@Service()
export class PlayerService {
  constructor(private databaseService: DatabaseService) {}

  async create(player: CadastroJogadorForm) {
    const salt = bcrypt.genSaltSync();
    const senhaHash = bcrypt.hashSync(player.password, salt);

    return await this.databaseService.createJogador({
      nome: player.nome,
      email: player.email,
      senha: senhaHash,
      salt,
    });
  }
}