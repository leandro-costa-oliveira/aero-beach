import { Card, Container, Table } from "react-bootstrap";

export const Torneios = () => {
  return (
    <Container>
      {/* TODO: Se logado, exibir o botao de cadastrar torneios, link para `/torneios/add` */}
      <Card>
        <Card.Title>Torneios</Card.Title>

        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
              </tr>
            </thead>
          </Table>
          <br />
          Em breve !!!
        </Card.Body>
      </Card>
    </Container>
  );
};
