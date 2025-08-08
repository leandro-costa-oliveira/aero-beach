import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import "./App.css";
import { Counter } from "./componentes/Counter";
import { Header } from "./componentes/Header";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Counter />
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </QueryClientProvider>
    </>
  );
}

export default App;
