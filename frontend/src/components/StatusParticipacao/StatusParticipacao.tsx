import { Alert, Badge, Card, Spinner } from "react-bootstrap";
import { useMinhasInscricoes } from "../../hooks/useMinhasInscricoes";

export function StatusParticipacao() {
  const {
    data: inscricoes = [],
    isLoading,
    isError,
  } = useMinhasInscricoes();

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger">
        Erro ao carregar status das inscrições.
      </Alert>
    );
  }

  if (inscricoes.length === 0) {
    return (
      <Alert variant="info">
        Nenhum status disponível.
      </Alert>
    );
  }

  return (
    <>
      {inscricoes.map((inscricao: any) => (
        <Card
          key={inscricao.id}
          className="mb-3"
        >
          <Card.Body>
            <Card.Title>
              {inscricao.torneio.nome}
            </Card.Title>

            <Card.Text>
              <strong>Categoria:</strong>{" "}
              {inscricao.categoria
                ? `${inscricao.categoria.genero} / ${inscricao.categoria.modalidade} / ${inscricao.categoria.nivel}`
                : "Categoria não informada"}
            </Card.Text>

            <div className="mb-2">
              <strong>Torneio:</strong>{" "}
              <Badge bg="primary">
                {inscricao.torneio.situacao}
              </Badge>
            </div>

            <div>
              <strong>Inscrição:</strong>{" "}
              <Badge
                bg={
                  inscricao.pago
                    ? "success"
                    : "warning"
                }
              >
                {inscricao.pago
                  ? "Confirmada"
                  : "Pagamento pendente"}
              </Badge>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
