// src/pages/StudentPage.tsx
import React from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const majors = ["IT", "ITI", "INE", "INET"];

const StudentPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
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

        {/* Group Name */}
        <TextField
          label="ชื่อกลุ่ม"
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        />

        {/* Student 1 */}
        <TextField
          label="ชื่อนักศึกษาคนที่ 1"
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        />
        <TextField
          label="รหัสนักศึกษาคนที่ 1"
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        />
        <FormControl
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        >
          <InputLabel>สาขาวิชา</InputLabel>
          <Select
            defaultValue=""
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

        {/* Student 2 */}
        <TextField
          label="ชื่อนักศึกษาคนที่ 2"
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        />
        <TextField
          label="รหัสนักศึกษาคนที่ 2"
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        />
        <FormControl
          fullWidth
          margin="normal"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
        >
          <InputLabel>สาขาวิชา</InputLabel>
          <Select
            defaultValue=""
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


        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: "20px", width: "35%" ,backgroundColor:"#2D2C95"}} onClick={handleNext}>
            ถัดไป
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default StudentPage;
