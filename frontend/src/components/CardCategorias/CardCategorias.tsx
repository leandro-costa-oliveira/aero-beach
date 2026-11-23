import { useContext, useState } from "react";
import { Alert, Card, Badge, ListGroup, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { apiClient } from "../../api/api-client";
import type { Categoria } from "../../api/torneio.t";

interface CategoriaProps{
    categoria: Categoria;
    torneioId: string;
}

export function CardCategorias({categoria, torneioId} : CategoriaProps) {
  const { accessToken, role } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [parceiroNome, setParceiroNome] = useState("");
  const [parceiroEmail, setParceiroEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [salvando, setSalvando] = useState(false);

  const realizationDate = categoria.dataRealizacao
    ? new Date(categoria.dataRealizacao).toLocaleDateString("pt-BR")
    : "A definir";

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(categoria.valorInscricao);

  const isDuplas = categoria.modalidade === "duplas";

  async function inscrever() {
    setErro("");
    setSucesso("");
    setSalvando(true);
    try {
      await apiClient.post(`/torneios/${torneioId}/inscrever`, {
        categoriaId: categoria.id,
        ...(isDuplas ? { jogador2: { nome: parceiroNome, email: parceiroEmail } } : {}),
      });
      setSucesso("Inscrição realizada com sucesso.");
      setShow(false);
    } catch (error: any) {
      setErro(error?.response?.data?.error?.message ?? "Não foi possível realizar a inscrição.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <Card className="shadow-sm h-100">
      <Card.Header className="bg-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-capitalize">
          {categoria.genero} - {categoria.nivel}
        </h5>
        <Badge bg="primary" className="fs-6">
          {categoria.modalidade}
        </Badge>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between">
            <span className="fw-semibold">Nível:</span>
            <span className="fw-semibold">{categoria.nivel.toUpperCase()}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <span className="fw-semibold">Valor da Inscrição:</span>
            <span className="text-success fw-bold">{price}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <span className="fw-semibold">Data Prevista:</span>
            <span className="text-secondary fw-semibold">{realizationDate}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-success" className="w-100 fw-semibold btn-anim" onClick={() => { setErro(""); setSucesso(""); setShow(true); }}>
          Realizar inscrição: {price}
        </Button>
        {sucesso && <Alert variant="success" className="mt-2 mb-0">{sucesso}</Alert>}
      </Card.Footer>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton><Modal.Title>Inscrição em {categoria.genero} - {categoria.nivel}</Modal.Title></Modal.Header>
        <Modal.Body>
          {!accessToken || role !== "player" ? (
            <Alert variant="info" className="mb-0">{!accessToken ? <>Entre na sua conta de jogador para continuar. <Link to="/login">Ir para login</Link></> : "A inscrição está disponível para contas de jogador."}</Alert>
          ) : (
            <>
              <p>Você será inscrito como jogador da sua conta. Valor: <strong>{price}</strong>.</p>
              {isDuplas && <>
                <Form.Group className="mb-3"><Form.Label>Nome do parceiro</Form.Label><Form.Control required value={parceiroNome} onChange={(event) => setParceiroNome(event.target.value)} /></Form.Group>
                <Form.Group><Form.Label>E-mail do parceiro</Form.Label><Form.Control required type="email" value={parceiroEmail} onChange={(event) => setParceiroEmail(event.target.value)} /></Form.Group>
              </>}
            </>
          )}
          {erro && <Alert variant="danger" className="mt-3 mb-0">{erro}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Fechar</Button>
          {accessToken && role === "player" && <Button onClick={inscrever} disabled={salvando || (isDuplas && (!parceiroNome.trim() || !parceiroEmail.trim()))}>{salvando ? "Enviando..." : "Confirmar inscrição"}</Button>}
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
