import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPlanForm from "./components/EventPlanners/EventPlanForm";
import EventShow from "./components/EventPlanners/EventShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventPlanForm />} />
        <Route path="/eventshow" element={<EventShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
