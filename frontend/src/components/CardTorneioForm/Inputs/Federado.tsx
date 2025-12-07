import { memo, useCallback } from "react";
import { Form } from "react-bootstrap";

export const FederadoInput = memo((props: {
  value: boolean | undefined;
  onChange: (value: boolean) => void;
}) => {

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.checked);
  }, [props]);

  return (
    <div className="d-flex justify-content-between align-items-center" >
      <Form.Label htmlFor="federadoInput">Torneio Federado</Form.Label>
      <Form.Check
        id="federadoInput"
        type="checkbox"
        checked={props.value}
        onChange={handleChange}
      />
    </div>
  )
});