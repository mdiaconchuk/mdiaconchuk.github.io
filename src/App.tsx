import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/Components/HomePage";
import AboutPage from "./assets/Components/AboutPage";
import Layout from "./layouts/Layout";
import Section from "./assets/Components/Works/WorkSection";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>

      <Section  />
    </div>
  );
}
export default App;
