<<<<<<< Updated upstream
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
=======
import PageRoutes from "./routes";
import "./assets/styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { viewPatient } from "./slices/doctorSlice";
import { useEffect } from "react";
>>>>>>> Stashed changes

function App() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.doctor.patientId);
  console.log(id);

  useEffect(() => {
    setTimeout(() => {
      dispatch(viewPatient(1));

    }, 3000);
  }, []);

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
