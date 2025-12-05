import { Button, Card } from "react-bootstrap";
import type { Categoria } from "../../api/torneio.t";

interface CardSubscriptionProps{
categoria: Categoria
}

export function CardSubscription({categoria}: CardSubscriptionProps){

    const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(categoria.valorInscricao);

    return(
        <Card>
            <Card.Header>
            <h5 className="mb-0 text-dark">Inscrever-se nesta categoria</h5>
            </Card.Header>
            <Card.Body>
                <Button variant="outline-success" className="w-100 fw-semibold btn-anim">
                    inscreva-se por: {price}
                </Button>
            </Card.Body>
        </Card>
    )
}