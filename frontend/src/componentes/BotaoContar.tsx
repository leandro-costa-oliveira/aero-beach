import { useDoCount } from "../api/mutations/useDoCount";

export function BotaoContar({ count }: BotaoContarProps) {
  const doCount = useDoCount();

  return (
    <button
      onClick={() => {
        doCount.mutateAsync().catch((error) => {
          alert(`Error: ${error.message}`);
        });
      }}
    >
      {doCount.isPending && "Loading..."}
      {doCount.error && <p className="error">Error: {doCount.error.message}</p>}
      Numero de Clicks {count}
    </button>
  );
}

type BotaoContarProps = {
  count: number;
};
