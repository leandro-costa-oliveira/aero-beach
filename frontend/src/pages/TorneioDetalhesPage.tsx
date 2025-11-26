import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useTorneioById } from "../hooks/useTorneioById";
import { useParams } from "react-router-dom";
import { CardCategorias } from "../components/CardCategorias/CardCategorias";

export function TorneioDetalhesPage() {
  const { id } = useParams();
  console.log(id);

  if (!id) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>

        <p>
          Não foi possível encontrar esse torneio no servidor. Id inexistente.
        </p>
      </Alert>
    );
  }

  const { data: torneio, isLoading, error } = useTorneioById(id);

  if (!torneio) {
    console.log(torneio);

    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>

        <p>Não foi possível encontrar esse torneio no servidor.</p>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="primary" />

        <p className="mt-2">Carregando torneio...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>

        <p>
          Não foi possível encontrar esse torneio no servidor. Erro:{" "}
          {String(error)}
        </p>
      </Alert>
    );
  }

  const dataInicioFormatada = new Date(torneio.dataInicio).toLocaleDateString(
    "pt-BR"
  );
  const dataLimiteInscricaoFormatada = new Date(
    torneio.dataLimiteInscricao
  ).toLocaleDateString("pt-BR");

  const isFederado = torneio.federado ? "success" : "secondary";

  return (
    <Container className="my-5 gap-3">
      <h1 className="mb-4 text-primary display-4 border-bottom pb-2 text-truncate">
        {torneio.nome}
      </h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={10}>
          <Card className="shadow-lg border-light">
            <Card.Header className="bg-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-dark">Informações Principais</h5>
              <Badge bg={isFederado} className="p-2 fs-6">
                {torneio.federado ? "Torneio Federado" : "Não Federado"}
              </Badge>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  <span className="fw-semibold">Início do evento:</span>
                  <span className="float-end text-primary fw-bold">
                    {dataInicioFormatada}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  <span className="fw-semibold">Fim das inscrições:</span>
                  <span className="float-end text-secondary fw-bold">
                    {dataLimiteInscricaoFormatada}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between bg-light">
                  <span className="fw-semibold">Situação:</span>
                  <span className="float-end text-success fw-bold">
                    {torneio.situacao}
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="outline-primary"
                className="w-100 fw-semibold"
                onClick={() =>
                  document.getElementById("categorias")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Inscrever-se
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <h2 className="my-5 text-primary display-6 border-bottom pb-2">
        Categorias Disponíveis
      </h2>

      <Container className="p-0" id="categorias">
        <Row xs={1} md={2} lg={3} className="g-4">
          {(torneio.categorias || []).map((cate) => (
            <Col key={cate.id}>
              <CardCategorias categoria={cate} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

/**
  model Torneios {
  id                  String            @id @default(uuid())
  nome                String?
  dataInicio          DateTime
  dataLimiteInscricao DateTime
  federado            Boolean           @default(false)
  situacao            SituacaoTorneio   @default(aberto)

  categorias Categorias[]
  inscricoes Inscricoes[] 
  duplas     Duplas[]
}

model Categorias {
  id             String            @id @default(uuid())
  torneioId      String
  genero         TipoTorneio
  modalidade     ModalidadeTorneio
  nivel          CategoriaTorneio
  valorInscricao Float
  dataRealizacao DateTime?

  torneio    Torneios     @relation(fields: [torneioId], references: [id])
  inscricoes Inscricoes[]
  duplas     Duplas[]

  @@unique([torneioId, genero, modalidade, nivel])
}
**/

/**
  <Alert variant="info text-center">
    <h3>Ainda não existem categorias nesse torneio</h3>
    <p>Atualize a página ou volte mais tarde</p>
  </Alert>
**/
