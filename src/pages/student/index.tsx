// src/pages/StudentPage.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const majors = ["IT", "ITI", "INE", "INET"];

interface Student {
  name: string;
  id: string;
  major: string;
}

const StudentPage: React.FC = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState<Student[]>([
    { name: "", id: "", major: "" },
    { name: "", id: "", major: "" },
  ]);

  // ✅ สำหรับ TextField
  const handleInputChange =
    (index: number, field: "name" | "id") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newStudents = [...students];
      newStudents[index][field] = event.target.value;
      setStudents(newStudents);
    };

  // ✅ สำหรับ Select
  const handleSelectChange =
    (index: number) => (event: SelectChangeEvent<string>) => {
      const newStudents = [...students];
      newStudents[index].major = event.target.value;
      setStudents(newStudents);
    };

  const handleAddStudent = () => {
    if (students.length < 4) {
      setStudents([...students, { name: "", id: "", major: "" }]);
    }
  };

  const handleNext = () => {
    console.log("ข้อมูลนักศึกษา:", students);
    navigate("/project-form");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          ลงทะเบียนข้อมูลผู้จัดทำ
        </Typography>

        <TextField
          label="ชื่อกลุ่ม"
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        />

        {students.map((student, index) => (
          <Box key={index}>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
              นักศึกษาคนที่ {index + 1}
            </Typography>

            <TextField
              label={`ชื่อนักศึกษาคนที่ ${index + 1}`}
              fullWidth
              margin="normal"
              value={student.name}
              onChange={handleInputChange(index, "name")}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
            />

            <TextField
              label={`รหัสนักศึกษาคนที่ ${index + 1}`}
              fullWidth
              margin="normal"
              value={student.id}
              onChange={handleInputChange(index, "id")}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>สาขาวิชา</InputLabel>
              <Select
                value={student.major}
                onChange={handleSelectChange(index)}
                sx={{
                  "& .MuiSelect-select": {
                    borderRadius: "15px",
                  },
                }}
              >
                <MenuItem value="">สาขาวิชา</MenuItem>
                {majors.map((major) => (
                  <MenuItem
                    key={major}
                    value={major}
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#2D2C95",
                        color: "white",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "#1f1d6b",
                      },
                    }}
                  >
                    {major}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}

        {students.length < 4 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                color: "#2D2C95",
                borderColor: "#2D2C95",
                "&:hover": {
                  backgroundColor: "#f3f3ff",
                  borderColor: "#1f1d6b",
                },
              }}
              onClick={handleAddStudent}
            >
              + เพิ่มนักศึกษา
            </Button>
          </Box>
        )}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              width: "35%",
              backgroundColor: "#2D2C95",
            }}
            onClick={handleNext}
          >
            ถัดไป
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default StudentPage;
