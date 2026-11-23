import { Service } from "typedi";
import bcrypt from "bcrypt";
import { CadastroJogadorForm } from "../DTOs/CadastroJogadorForm";
import { prisma } from "./DatabaseService";
import { Role } from "../../generated/prisma";

@Service()
export class PlayerService {
  async create(player: CadastroJogadorForm) {
    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash(player.password, salt);

    return prisma.$transaction(async (tx) => {
      const userCount = await tx.usuario.count();

      const usuario = await tx.usuario.create({
        data: {
          nome: player.nome,
          email: player.email,
          senha: senhaHash,
          salt,
          role: userCount === 0 ? "admin" : "player",
        },
      });

      const jogador = await tx.jogador.upsert({
        where: { email: player.email },
        update: { usuarioId: usuario.id },
        create: {
          nome: player.nome,
          email: player.email,
          usuarioId: usuario.id,
          arenaNome: player.arenaNome,
          arenaEndereco: player.arenaEndereco,
        },
      });

      return { usuario, jogador };
    });
  }

  async list() {
    return prisma.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        role: true,
      },
    });
  }

  async updateRole(id: string, role: Role) {
    return prisma.usuario.update({
      where: { id },
      data: { role },
    });
  }
}
