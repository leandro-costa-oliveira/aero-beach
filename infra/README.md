# Persistência SQLite

Os dois backends usam `DATABASE_URL=file:/app/db/aerobeach.db`.
O Compose monta `./db-prod:/app/db` em `backend` e `./db-dev:/app/db` em `backend-dev`.
As pastas do host são relativas ao arquivo Compose (no repositório, `infra/db-prod` e `infra/db-dev`).
Cada pasta preserva o banco e os arquivos auxiliares SQLite ao recriar o container.
O Prisma aplica migrations pendentes na inicialização; se falharem, o servidor não inicia.

## Preservar dados da configuração anterior

Antes de atualizar imagens ou recriar containers, recupere o banco de cada container existente.
O caminho anterior `file:./aerobeach.db` resolve para `/app/prisma/aerobeach.db`,
mas o volume antigo montava `/app/aerobeach.db`. Os arquivos de zero bytes do host não contêm esses dados.
Se o container anterior já foi removido, seus dados podem ter sido perdidos; procure backups.

Execute no host, no diretório do Compose. Os comandos exigem `sqlite3` instalado e containers existentes.
Pause o Watchtower para impedir atualizações automáticas durante a recuperação.
Pare os backends para copiar o banco e eventuais arquivos de journal/WAL sem escritas concorrentes:

```sh
docker compose stop watchtower backend backend-dev
backup_dir="recovery-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir/prod" "$backup_dir/dev" db-prod db-dev
docker cp "$(docker compose ps -aq backend)":/app/prisma/. "$backup_dir/prod/"
docker cp "$(docker compose ps -aq backend-dev)":/app/prisma/. "$backup_dir/dev/"
```

Confirme que ambos os bancos copiados existem, têm tamanho maior que zero e passam na verificação:

```sh
test -s "$backup_dir/prod/aerobeach.db"
test -s "$backup_dir/dev/aerobeach.db"
sqlite3 "$backup_dir/prod/aerobeach.db" 'PRAGMA integrity_check;'
sqlite3 "$backup_dir/dev/aerobeach.db" 'PRAGMA integrity_check;'
```

Continue apenas se os dois retornarem `ok`. Confira também os dados esperados.
Com as pastas de destino vazias, gere cópias consistentes (incluindo dados de WAL, caso exista):

```sh
sqlite3 "$backup_dir/prod/aerobeach.db" ".backup 'db-prod/aerobeach.db'"
sqlite3 "$backup_dir/dev/aerobeach.db" ".backup 'db-dev/aerobeach.db'"
```

Guarde a recuperação até validar os dados na aplicação. Não sobrescreva bancos já existentes nas pastas de destino.
Atualize o Compose com os novos volumes e `DATABASE_URL`, mantendo os valores reais de `JWT_SECRET`.
As imagens também precisam conter o schema que lê `DATABASE_URL`; apenas mudar o volume não corrige imagens antigas.

```sh
docker compose pull backend backend-dev
docker compose up -d --force-recreate backend backend-dev
docker compose logs --tail=100 backend backend-dev
```

Em instalação nova, basta criar as pastas vazias e iniciar com as imagens atualizadas.
Para verificar persistência, crie um registro de teste, recrie o backend correspondente e confirme que o registro permanece.
Nas próximas inicializações, migrations já aplicadas não devem ser reaplicadas.
Após validar os dados e os volumes, retome as atualizações com `docker compose start watchtower`.
Mantenha backups consistentes de cada ambiente; copiar só o `.db` enquanto há escritas pode perder dados de WAL.
