import { useEffect } from "react";

export function useValidateData(o: {
  dataInicio: Date | undefined;
  dataLimiteInscricao: Date | undefined;
  onErroData: (error: string | null) => void;
}) {
  useEffect(() => {
    switch (true) {
      case o.dataInicio && o.dataInicio < new Date():
        o.onErroData("Data de início não pode ser anterior a data atual");
        break;
      case o.dataLimiteInscricao && o.dataLimiteInscricao < new Date():
        o.onErroData("Data limite de inscrição não pode ser anterior a data atual");
        break;
      case (o.dataInicio && o.dataLimiteInscricao) && o.dataLimiteInscricao > o.dataInicio:
        o.onErroData("Data limite de inscrição não pode ser maior que a data de início");
        break;
      default:
        o.onErroData(null);
    }
  }, [o.dataInicio, o.dataLimiteInscricao]);
}