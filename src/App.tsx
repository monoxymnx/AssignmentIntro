import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentPage from "./pages/student";
import CommittePage from "./pages/committe";
import ProfessorPage from "./pages/professor";
import InstructorPage from "./pages/instructor";
import ProjectFormPage from "./pages/student/ProjectForm";
import ProjectInfo from "./pages/student/ProjectInfo";
import ProjectUpdatePage from "./pages/student/PrpjectUpdate";
import ProfilePage from "./pages/student/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/committe" element={<CommittePage />} />
        <Route path="/professor" element={<ProfessorPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/project-form" element={<ProjectFormPage />} />
        <Route path="/project-info" element={<ProjectInfo />} />
        <Route path="/project-update" element={<ProjectUpdatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
export default App;