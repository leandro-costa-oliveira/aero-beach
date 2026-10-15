import { Alert, Badge, Card, Spinner } from "react-bootstrap";
import { useMinhasInscricoes } from "../../hooks/useMinhasInscricoes";

export function InscricoesAtivas() {
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
        Erro ao carregar inscrições.
      </Alert>
    );
  }

  if (inscricoes.length === 0) {
    return (
      <Alert variant="info">
        Você não possui inscrições ativas.
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
              {inscricao.categoria.genero} /{" "}
              {inscricao.categoria.modalidade} /{" "}
              {inscricao.categoria.nivel}
            </Card.Text>

            <Badge
              bg={
                inscricao.pago
                  ? "success"
                  : "warning"
              }
            >
              {inscricao.pago
                ? "Pago"
                : "Pendente"}
            </Badge>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}