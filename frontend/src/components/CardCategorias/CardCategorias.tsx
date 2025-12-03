import { Card, Badge, ListGroup, Button } from "react-bootstrap";
import type { Categoria } from "../../api/torneio.t";
import { Link } from "react-router-dom";
//import { AuthContext } from "../../Context/AuthContext";
//import { useContext } from "react";

interface CategoriaProps{
    categoria: Categoria;
}

export function CardCategorias({categoria} : CategoriaProps) {

  const realizationDate = categoria.dataRealizacao
    ? new Date(categoria.dataRealizacao).toLocaleDateString("pt-BR")
    : "A definir";

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(categoria.valorInscricao);
  //const { accessToken } = useContext(AuthContext);
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
        {//accessToken ? (
        <Link to={`/inscricao/${categoria.id}`}> 
        <Button variant="outline-success" className="w-100 fw-semibold btn-anim">
          Realizar inscrição: {price}
        </Button>
        </Link>
        /**) : (
          <Link to={`/login?redirect=/torneios/inscricoes/${categoria.id}`}>
            <Button
              variant="outline-secondary"
              className="w-100 btn-anim fw-semibold"
            >
              Entre para inscrever-se
            </Button>
          </Link>
        ) 
        
         **/}
      </Card.Footer>
    </Card>
  );
}