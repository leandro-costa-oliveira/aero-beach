import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useState } from "react";
import type { Categoria } from "../../api/torneio.t";
import { useSubscribeTournament } from "../../hooks/useSubscribeTournament";

interface CardSubscriptionProps {
  categoria: Categoria;
  torneioId: string;
  categoriaId: string;
  torneio?: string;
}

export function CardSubscription({
  categoria,
  torneioId,
  categoriaId,
  torneio,
}: CardSubscriptionProps) {
  const [jogador1Nome, setJogador1Nome] = useState("");
  const [jogador1Email, setJogador1Email] = useState("");
  const [jogador2Nome, setJogador2Nome] = useState("");
  const [jogador2Email, setJogador2Email] = useState("");

  const { mutate, isPending, isError, isSuccess, error } =
    useSubscribeTournament();

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(categoria.valorInscricao);

  const dataRealizacaoFormatada = new Date(
    categoria.dataRealizacao || "a definir"
  ).toLocaleDateString("pt-BR");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        torneioId,
        categoriaId,
        data: {
          jogador1: {
            nome: jogador1Nome,
            email: jogador1Email,
          },
          jogador2: {
            nome: jogador2Nome,
            email: jogador2Email,
          },
        },
      },
      {
        onSuccess: () => {
          setJogador1Nome("");
          setJogador1Email("");
          setJogador2Nome("");
          setJogador2Email("");
        },
      }
    );
  };

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0 text-dark">Inscrever-se nesta categoria</h5>
      </Card.Header>
      <Card.Body>
        <ListGroup className="mt-1 mb-3" variant="flush">
          {torneio && (
            <ListGroup.Item className="border-secondary fw-semibold">
              Torneio:
              <span className="float-end fw-bold">{torneio}</span>
            </ListGroup.Item>
          )}
          <ListGroup.Item className="border-secondary fw-semibold">
            Categoria:
            <span className="float-end fw-bold text-secondary">
              {categoria.genero} - {categoria.nivel} - {categoria.modalidade}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="border-secondary fw-semibold">
            Realização:
            <span className="float-end text-primary fw-bold">
              {dataRealizacaoFormatada}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="border-secondary fw-semibold">
            Valor da inscrição:
            <span className="float-end fw-bold text-success">{price}</span>
          </ListGroup.Item>
        </ListGroup>

        {isError && (
          <div className="alert alert-danger" role="alert">
            {error?.message || "Erro ao realizar inscrição"}
          </div>
        )}

        {isSuccess && (
          <div className="alert alert-success" role="alert">
            Inscrição realizada com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Row className="mb-3 gap-2 justify-content-between" xs={1} lg={2}>
            <Col xs={12} lg={5}>
              <span className="fw-semibold">Jogador Um</span>
              <div className="gap-1 d-flex flex-column">
                <input
                  type="text"
                  placeholder="Seu nome de usuário"
                  className="input"
                  value={jogador1Nome}
                  onChange={(e) => setJogador1Nome(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  className="input"
                  value={jogador1Email}
                  onChange={(e) => setJogador1Email(e.target.value)}
                  required
                />
              </div>
            </Col>
            <Col xs={12} lg={5}>
              <span className="fw-semibold">Jogador dois</span>
              <div className="gap-1 d-flex flex-column">
                <input
                  type="text"
                  placeholder="Nome de usuário da dupla"
                  className="input"
                  value={jogador2Nome}
                  onChange={(e) => setJogador2Nome(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="email dupla"
                  className="input"
                  value={jogador2Email}
                  onChange={(e) => setJogador2Email(e.target.value)}
                  required
                />
              </div>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="success"
            className="w-100 btn-anim fw-semibold"
            disabled={isPending}
          >
            {isPending ? "Inscrevendo..." : "Inscrever-se"}
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
