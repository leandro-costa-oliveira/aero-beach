import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Button } from "react-bootstrap";

export const Admin = () => {

  const { accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const showTorneioForm = useCallback(() => {
    navigate("/torneios/add");
  }, []);

  if (!accessToken) {
    return <div>Access Denied</div>;
  }
  
  // TODO: adicionar validação de role, accessToken contem somente useId e username

  return (
    <ButtonAddTorneio
      onPress={showTorneioForm}
    />
  );
}

const ButtonAddTorneio = (props: {
  onPress: () => void;
}) => {
  return (
    <Button
      className="btn btn-primary"
      onClick={props.onPress}
    >
      Adicionar Torneio
    </Button>
  )
}
