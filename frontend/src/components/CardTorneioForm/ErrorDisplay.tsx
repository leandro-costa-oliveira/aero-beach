import { Form } from "react-bootstrap";

export const ErrorDisplay = (props: {
  nome: boolean,
  dataInicio: boolean,
  dataLimiteInscricao: boolean,
  erroData: string | null,
  subsmitError: Error | null,
}) => (<>
  {props.nome &&                (<Form.Text className="text-danger">O nome do torneio é obrigatório.</Form.Text>)}
  {props.dataInicio &&          (<Form.Text className="text-danger">A data de início é obrigatória.</Form.Text>)}
  {props.dataLimiteInscricao && (<Form.Text className="text-danger">A data limite de inscrição é obrigatória.</Form.Text>)}
  {props.erroData &&            (<Form.Text className="text-danger">{props.erroData}</Form.Text>)}

  {/* TODO: O backend não está retornando mensagens de erro de validação para o front end, então esse erro abaixo não será exibido corretamente */}
  {props.subsmitError &&        (<Form.Text className="text-danger">{props.subsmitError.message}</Form.Text>)}
</>);
