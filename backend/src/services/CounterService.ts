import { prisma } from "./DatabaseService";

export class CounterService {
  private count = 0;

  public getCount() {
    return prisma.contador.findFirst();
  }

  //cria uma linha na tabela
  async doCount() {
    const contador = await prisma.contador.findFirst();
    if (contador === null) {
      const nContador = await prisma.contador.create({ data: { contador: 1 } });
      return nContador.contador;
    }

    const novoNumero = contador.contador + 1;
    const contadroAtualizado = await prisma.contador.update({
      where: {
        id: contador.id,
      },
      data: {
        contador: novoNumero,
      },
    });
    return contadroAtualizado.contador;
  }
}
//incrementar +1 ao contador a cada refresh
