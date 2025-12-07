import { memo, useCallback, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { FormButtons } from "./FormButtons";
import { Input } from "./Inputs";
import type { TorneioForm } from "../../api/torneio.t";
import { useSubmitTorneio } from "../../hooks/useSubmitTorneio";
import { useValidateData } from "./Hooks";
import { ErrorDisplay } from "./ErrorDisplay";

type ErrorDisplayState = {
  nome: boolean;
  dataInicio: boolean;
  dataLimiteInscricao: boolean;
  erroData: string | null;
}

export const CardTorneioForm = memo((props: {
  onCancel: () => void;
  onSubmit: (torneioForm: TorneioForm) => void;
}) => {

  const { isPending, error } = useSubmitTorneio();
  const [nomeTorneio        , setNomeTorneio        ] = useState<string | undefined>(undefined);
  const [dataInicio         , setDataInicio         ] = useState<Date | undefined>(undefined);
  const [dataLimiteInscricao, setDataLimiteInscricao] = useState<Date | undefined>(undefined);
  const [federado           , setFederado           ] = useState<boolean | undefined>(false);
  const [inputError, setInputError] = useState<ErrorDisplayState>({
    nome: false,
    dataInicio: false,
    dataLimiteInscricao: false,
    erroData: null,
  });

  const torneioNomeChange         = useCallback((nomeTorneio: string)       => { setNomeTorneio(nomeTorneio);                 }, []);
  const dataInicioChange          = useCallback((dataInicio: Date)          => { setDataInicio(dataInicio);                   }, []);
  const dataLimiteInscricaoChange = useCallback((dataLimiteInscricao: Date) => { setDataLimiteInscricao(dataLimiteInscricao); }, []);
  const federadoChange            = useCallback((federado: boolean)         => { setFederado(federado);                       }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nomeTorneio !== undefined &&
      dataInicio !== undefined &&
      dataLimiteInscricao !== undefined &&
      federado !== undefined &&
      inputError.erroData === null
    ) {
      props.onSubmit({
        nome: nomeTorneio,
        dataInicio: dataInicio,
        dataLimiteInscricao: dataLimiteInscricao,
        federado: federado,
      });
    } else {
      setInputError(prev => ({
        ...prev,
        nome: nomeTorneio === undefined,
        dataInicio: dataInicio === undefined,
        dataLimiteInscricao: dataLimiteInscricao === undefined
      }));
    }
  };

  useValidateData({
    dataInicio: dataInicio,
    dataLimiteInscricao: dataLimiteInscricao,
    onErroData: (erroData) => setInputError(prev => ({...prev, erroData }))
  })
  
  return (
    <Form
      className="card p-3"
      onSubmit={handleSubmit}
    >
      <Form.Group className="d-flex flex-column gap-2 mb-3">
        <Input.NomeTorneio
          value={nomeTorneio}
          onChange={torneioNomeChange}
        />
        <Input.DataInicio
          value={dataInicio}
          onChange={dataInicioChange}
        />
        <Input.DataLimite
          value={dataLimiteInscricao}
          onChange={dataLimiteInscricaoChange}
        />
        <Input.Federado
          value={federado}
          onChange={federadoChange}
        />
        <ErrorDisplay
          nome={inputError.nome}
          dataInicio={inputError.dataInicio}
          dataLimiteInscricao={inputError.dataLimiteInscricao}
          erroData={inputError.erroData}
          subsmitError={error}
        />
        {isPending ? <Spinner /> : (
          <FormButtons
            onCancel={props.onCancel}
          />
        )}
      </Form.Group>
    </Form>
  )
});
