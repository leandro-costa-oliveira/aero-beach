import { memo, useCallback } from "react";
import { Form } from "react-bootstrap";

export const DataInicioInput = memo((props: {
  value: Date | undefined;
  onChange: (value: Date) => void;
}) => {

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(new Date(e.target.value));
  }, [props]);

  return (
    <div className="d-flex justify-content-between align-items-center" >
      <Form.Label htmlFor="dataInicioInput">Data de Início:</Form.Label>
      <Form.Control
        className="w-50"
        id="dataInicioInput"
        type="date"
        onKeyDown={(e) => e.preventDefault()}
        onPaste={(e) => e.preventDefault()}
        value={props.value ? props.value.toISOString().split('T')[0] : undefined}
        onChange={handleChange}
      />
    </div>
  )
});