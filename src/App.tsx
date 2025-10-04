import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentPage from "./pages/student";
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
import ProjectExamTableForProfessor from "./pages/professor/examProfes";
import TableForInstructor from "./pages/instructor";
import ProjectInfoForInstructor from "./pages/instructor/ProjectInfoIns";
import ProjectExamTableForInstructor from "./pages/instructor/examIns";

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
        <Route path="/professor-exam" element={<ProjectExamTableForProfessor />} />


        <Route path="/instructor-table" element={<TableForInstructor />} />
        <Route path="/instructor-projectinfo" element={<ProjectInfoForInstructor />} />
        <Route path="/instructor-exam" element={<ProjectExamTableForInstructor />} />

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