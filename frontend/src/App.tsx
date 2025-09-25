import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}