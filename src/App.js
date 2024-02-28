import Doctor from "./pages/doctor";
import Patient from "./pages/patient";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/" element={<>HAD</>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
