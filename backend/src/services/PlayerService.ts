import { Service } from "typedi";
import bcrypt from "bcrypt";
import { CadastroJogadorForm } from "../DTOs/CadastroJogadorForm";
import DatabaseService from "./DatabaseService";
import { Role } from "../../generated/prisma";

@Service()
export class PlayerService {
  constructor(private databaseService: DatabaseService) {}

  async create(player: CadastroJogadorForm) {
    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash(player.password, salt);

return await this.databaseService.createJogador({
  nome: player.nome,
  email: player.email,
  senha: senhaHash,
  salt,
  arenaNome: player.arenaNome,
  arenaEndereco: player.arenaEndereco,
});
  }
  async list() {
  return await this.databaseService.listJogadores();
}
async updateRole(id: string, role: Role) {
  return await this.databaseService.updateRole(id, role);
}
}
