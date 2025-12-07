import { memo } from "react";
import { Button } from "react-bootstrap";

export const FormButtons = memo((props: {
  onCancel: () => void;
}) => {
  return (
    <div
      className="d-flex justify-content-center gap-3"
    >
      <Cancel onPress={props.onCancel} />
      <Submit />
    </div>
  )
});

const Cancel = (props: {
  onPress: () => void;
}) => {
  return (
    <Button
      type="button"
      className="btn btn-secondary"
      onClick={props.onPress}
    >
      Cancelar
    </Button>
  )
}

const Submit = () => {
  return (
    <Button
      type="submit"
      className="btn btn-primary"
    >
      Confirmar
    </Button>
  )
}