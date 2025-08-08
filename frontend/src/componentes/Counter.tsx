import { useCount } from "../api/queries/useCount";
import { BotaoContar } from "./BotaoContar";

export function Counter() {
  const { data, isLoading, error } = useCount();

  return (
    <div className="card">
      <p>{isLoading ? "Loading..." : ""}</p>
      {data && <BotaoContar count={data.count} />}
      {error && <p className="error">Error: {error.message}</p>}
    </div>
  );
}
