import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "./Navbar";

interface Student {
  id: number;
  name: string;
  studentId: string;
  major: string;
  project: string;
  projectType: string;
  role: string;
  image?: string;
}

const mockStudents: Student[] = [
  {
    id: 1,
    name: "นายวินัทร์ วนดี",
    studentId: "6806022510011",
    major: "INET",
    project: "ฝนกระเทียม",
    projectType: "ทดลอง",
    role: "เจ้าของโครงงาน",
    image: "src/assets/humen.png",
  },
  {
    id: 2,
    name: "นางสาวกฤติตา แซ่ฟ่ง",
    studentId: "6806022510012",
    major: "INET",
    project: "ฝนกระเทียม",
    projectType: "ทดลอง",
    role: "ผู้ร่วมโครงงาน",
    image: "src/assets/humen.png",
  },
];

const ProfilePage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newImage = URL.createObjectURL(file);
      setStudents((prev) =>
        prev.map((student) =>
          student.id === id ? { ...student, image: newImage } : student
        )
      );
    }
  };

  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Profile
        </Typography>
        {students.map((student) => (
          <Paper
            key={student.id}
            sx={{ p: 3, mb: 4, display: "flex", alignItems: "center", width: 600 }}
          >
            <Box position="relative" mr={3}>
              <Avatar
                src={student.image || ""}
                sx={{ width: 100, height: 120, borderRadius: 2 }}
                variant="rounded"
              >
                รูปนักศึกษา
              </Avatar>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id={`upload-${student.id}`}
                onChange={(e) => handleImageChange(e, student.id)}
              />
              <label htmlFor={`upload-${student.id}`}>
                <IconButton
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "white",
                    boxShadow: 1,
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </label>
            </Box>
            <Box>
              <Typography>{student.role}</Typography>
              <Typography>ชื่อ-สกุล : {student.name}</Typography>
              <Typography>รหัสนักศึกษา : {student.studentId}</Typography>
              <Typography>สาขา : {student.major}</Typography>
              <Typography>ชื่อโครงงาน : {student.project}</Typography>
              <Typography>เลือกประเภทโครงงาน : {student.projectType}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default ProfilePage;
