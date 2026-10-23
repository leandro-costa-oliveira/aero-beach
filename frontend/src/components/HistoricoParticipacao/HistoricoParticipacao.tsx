import { Alert, Badge, Card, Spinner } from "react-bootstrap";
import { useHistorico } from "../../hooks/useHistoricoParticipacao";

export function HistoricoParticipacao() {
  const {
    data: historico = [],
    isLoading,
    isError,
  } = useHistorico();

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
        Erro ao carregar histórico.
      </Alert>
    );
  }

  if (historico.length === 0) {
    return (
      <Alert variant="info">
        Você ainda não possui participações anteriores.
      </Alert>
    );
  }

  return (
    <>
      {historico.map((inscricao: any) => (
        <Card
          key={inscricao.id}
          className="mb-3"
        >
          <Card.Body>
            <Card.Title>
              {inscricao.torneio.nome}
            </Card.Title>

            <Card.Text>
              <strong>Ano:</strong>{" "}
              {new Date(
                inscricao.torneio.dataInicio
              ).getFullYear()}
            </Card.Text>

            <Card.Text>
              <strong>Categoria:</strong>{" "}
              {inscricao.categoria.genero} /{" "}
              {inscricao.categoria.modalidade} /{" "}
              {inscricao.categoria.nivel}
            </Card.Text>

            <Badge bg="secondary">
              Participou
            </Badge>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}