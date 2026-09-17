import { Link } from "react-router-dom";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { CardTorneios } from "../components/CardTorneios/CardTorneios";
import { useUltimoTorneio } from "../hooks/useUltimoTorneio";
import { RankingResumo } from "../components/RankingResumo/RankingResumo";

export function HomePage() {
  const { data: torneio, isLoading, error } = useUltimoTorneio();

  const minPrice = torneio?.categorias?.length
    ? Math.min(...torneio.categorias.map((c) => c.valorInscricao))
    : 0;

  return (
    <div className="py-4 py-md-5">
      <section className="text-center mb-5 pb-3">
        <h1 className="display-5 fw-bold mb-3">Bem-vindo ao AeroBeach</h1>

        <p
          className="lead text-muted mx-auto mb-4"
          style={{ maxWidth: "720px" }}
        >
          Encontre torneios, acompanhe o ranking e participe das competições.
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <Link to="/torneios" className="btn btn-primary px-4">
            Ver torneios
          </Link>

          <Link to="/rankings" className="btn btn-outline-primary px-4">
            Ver rankings
          </Link>
        </div>
      </section>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-4">
          <h2 className="mb-0">Torneios em destaque</h2>
        </div>

        {isLoading && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 mb-0">Carregando torneios...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="mb-0">
            Não foi possível carregar os torneios.
          </Alert>
        )}

        {!isLoading && !error && torneio && (
          <Row className="g-4">
            <Col xs={12} md={6} lg={4}>
              <CardTorneios torneio={torneio} preco={minPrice} />
            </Col>
          </Row>
        )}

        {!isLoading && !error && !torneio && (
          <Alert variant="info" className="mb-0">
            Nenhum torneio disponível no momento.
          </Alert>
        )}
      </section>

      <section className="mb-4">
       <RankingResumo />
      </section>
    </div>
  );
}