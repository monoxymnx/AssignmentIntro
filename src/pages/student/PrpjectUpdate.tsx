import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CreateIcon from '@mui/icons-material/Create';

function ProjectUpdatePage() {
  const navigate = useNavigate();
  const [file,] = useState<File | null>(null);
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [week, setWeek] = useState(1);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      file,
      note,
      date,
      week,
    });
    alert("บันทึกความก้าวหน้าเรียบร้อย");
    navigate("/project-info");
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#f5f7ff",
          minHeight: "100vh",
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "80%",
            maxWidth: 700,
            p: 5,
            borderRadius: 4,
            boxShadow: 3,
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 3,
              fontWeight: "bold",
              color: "#2D2C95",
            }}
          >
            บันทึกความก้าวหน้า
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* ส่วนอัปโหลดไฟล์ */}
            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#2D2C95",display: "flex", alignItems: "center", }}>
              <InsertDriveFileIcon/>อัพโหลดไฟล์งาน
            </Typography>
            <Box
              sx={{
                border: "2px dashed #2D2C95",
                borderRadius: "15px",
                textAlign: "center",
                p: 4,
                mt: 2,
                mb: 3,
                color: "#2D2C95",
                backgroundColor: "#f9fbff",
              }}
            >
              <Typography variant="body2">อัปโหลด File</Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                รองรับไฟล์: PDF DOCX TXT &nbsp; ≤10 MB
              </Typography>

              <Button
                variant="contained"
                component="label"
                sx={{
                  mt: 2,
                  borderRadius: "20px",
                  backgroundColor: "#2D2C95",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 3,
                  "&:hover": { backgroundColor: "#1d1c75" },
                }}
              >
                เลือกไฟล์
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.txt"
                />
              </Button>

              {fileName && (
                <Typography variant="body2" sx={{ mt: 2, color: "black" }}>
                  📄 {fileName}
                </Typography>
              )}
            </Box>

            {/* ช่องกรอกบันทึกความก้าวหน้า */}
            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#2D2C95",display: "flex", alignItems: "center" }}>
              <CreateIcon/>
              บันทึกความก้าวหน้า
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="รายละเอียดความก้าวหน้า..."
              sx={{
                mb: 3,
                backgroundColor: "#f9fbff",
                borderRadius: 2,
              }}
            />

            {/* ช่องวันที่และสัปดาห์ */}
            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
              <TextField
                label="วันที่ส่งความก้าวหน้า"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>สัปดาห์ที่</InputLabel>
                <Select
                  value={week}
                  label="สัปดาห์ที่"
                  onChange={(e) => setWeek(Number(e.target.value))}
                >
                  {[...Array(16)].map((_, i) => (
                    <MenuItem key={i + 1} value={i + 1}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* ปุ่มบันทึก */}
            <Box sx={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#2D2C95",
                  px: 5,
                  py: 1,
                  borderRadius: "30px",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#1d1c75" },
                }}
              >
                บันทึก
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  );
}

export default ProjectUpdatePage;
