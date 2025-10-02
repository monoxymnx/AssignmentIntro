import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentPage from "./pages/student";
import InstructorPage from "./pages/instructor";
import ProjectFormPage from "./pages/student/ProjectForm";
import ProjectInfo from "./pages/student/ProjectInfo";
import ProjectUpdatePage from "./pages/student/PrpjectUpdate";
import ProfilePage from "./pages/student/Profile";
import ProjectSubmitPage from "./pages/student/ProjectSubmit";
import TableForCommitte from "./pages/committe";
import ProjectInfoForCommit from "./pages/committe/ProjectInfo";
import StudentProfilePage from "./pages/committe/StudentProfile";
import ProjectExamTable from "./pages/committe/ProjectExamTable";
import TableForProfessor from "./pages/professor";
import ProjectInfoForProfessor from "./pages/professor/ProjectInfopro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        


        <Route path="/committe-table" element={<TableForCommitte />} />
        <Route path="/student-project" element={<ProjectInfoForCommit />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
        <Route path="/student-exam" element={<ProjectExamTable />} />

        <Route path="/professor-table" element={<TableForProfessor />} />
        <Route path="/professor-projectinfo" element={<ProjectInfoForProfessor />} />

        <Route path="/instructor" element={<InstructorPage />} />

        {/* student routes */}
        <Route path="/student" element={<StudentPage />} />
        <Route path="/project-form" element={<ProjectFormPage />} />
        <Route path="/project-info" element={<ProjectInfo />} />
        <Route path="/project-update" element={<ProjectUpdatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project-submit" element={<ProjectSubmitPage />} />
      </Routes>
    </Router>
  );
}
export default App;