import { memo, useCallback } from "react";
import { Form } from "react-bootstrap";

export const NomeTorneioInput = memo((props: {
  value: string | undefined;
  onChange: (value: string) => void;
}) => {

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  }, [props]);

  return (
    <div className="d-flex justify-content-between align-items-center" >
      <Form.Label htmlFor="nomeTorneioInput">Nome do Torneio:</Form.Label>
      <Form.Control
        className="w-50"
        id="nomeTorneioInput"
        type="text"
        placeholder="Nome do Torneio"
        value={props.value}
        onChange={handleChange}
      />
    </div>
  )
});