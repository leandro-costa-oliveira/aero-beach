import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardTorneioForm } from "../components/CardTorneioForm"
import { AuthContext } from "../Context/AuthContext";
import type { TorneioForm } from "../api/torneio.t";
import { useSubmitTorneio } from "../hooks/useSubmitTorneio";

export const TorneioAdd = () => {

  const { accessToken } = useContext(AuthContext);
  const { mutateAsync } = useSubmitTorneio();
  const navigate = useNavigate();

  const cancelTorneioForm = useCallback(() => {
    navigate("/admin");
  }, []);

  const onSubmit = useCallback(async (torneioForm: TorneioForm) => {
    await mutateAsync(torneioForm);
    navigate("/admin")
  }, []);

  if (!accessToken) {
    return <div>Access Denied</div>;
  }

  // TODO: adicionar validação de role, accessToken contem somente useId e username

  return (
    <CardTorneioForm
      onCancel={cancelTorneioForm}
      onSubmit={onSubmit}
    />
  )
}