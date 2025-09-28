import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentPage from "./pages/student";
import CommittePage from "./pages/committe";
import ProfessorPage from "./pages/professor";
import InstructorPage from "./pages/instructor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/committe" element={<CommittePage />} />
        <Route path="/professor" element={<ProfessorPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
      </Routes>
    </Router>
  );
}
export default App;