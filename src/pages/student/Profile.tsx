import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Container,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "./Navbar";
import humenImage from "../../assets/humen.png";

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
    image: humenImage,
  },
  {
    id: 2,
    name: "นางสาวกฤติตา แซ่ฟ่ง",
    studentId: "6806022510012",
    major: "INET",
    project: "ฝนกระเทียม",
    projectType: "ทดลอง",
    role: "ผู้ร่วมโครงงาน",
    image: humenImage,
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
      <Box
        sx={{
          backgroundColor: "#f5f7ff",
          minHeight: "100vh",
          py: 5,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#2D2C95"
            textAlign="center"
            gutterBottom
          >
            ข้อมูลโปรไฟล์นักศึกษา
          </Typography>

          {students.map((student) => (
            <Paper
              key={student.id}
              sx={{
                p: 3,
                mb: 4,
                display: "flex",
                alignItems: "center",
                borderRadius: 4,
                boxShadow: 3,
                backgroundColor: "white",
                "&:hover": {
                  boxShadow: 5,
                },
              }}
            >
              <Box position="relative" mr={3}>
                <Avatar
                  src={student.image || ""}
                  sx={{
                    width: 100,
                    height: 120,
                    borderRadius: 3,
                    border: "3px solid #2D2C95",
                  }}
                  variant="rounded"
                >
                  รูปนักศึกษา
                </Avatar>

                {/* ปุ่มแก้ไขรูป */}
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
                      backgroundColor: "#2D2C95",
                      color: "white",
                      boxShadow: 2,
                      "&:hover": { backgroundColor: "#1d1c75" },
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </label>
              </Box>

              {/* ข้อมูลนักศึกษา */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#2D2C95",
                    mb: 1,
                  }}
                >
                  {student.role}
                </Typography>
                <Typography sx={{ mb: 0.5 }}>
                  <strong>ชื่อ-สกุล:</strong> {student.name}
                </Typography>
                <Typography sx={{ mb: 0.5 }}>
                  <strong>รหัสนักศึกษา:</strong> {student.studentId}
                </Typography>
                <Typography sx={{ mb: 0.5 }}>
                  <strong>สาขา:</strong> {student.major}
                </Typography>
                <Typography sx={{ mb: 0.5 }}>
                  <strong>ชื่อโครงงาน:</strong> {student.project}
                </Typography>
                <Typography>
                  <strong>ประเภทโครงงาน:</strong> {student.projectType}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default ProfilePage;
