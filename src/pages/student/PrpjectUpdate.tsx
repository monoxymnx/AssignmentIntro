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
    navigate("/project-info");
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 5,
          p: 3,
        }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            บันทึกความก้าวหน้า
          </Typography>

          <form onSubmit={handleSubmit}>
            <Typography sx={{ mb: 1 }}>อัพโหลดไฟล์งาน</Typography>
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: "15px",
                textAlign: "center",
                p: 4,
                mt: 2,
                mb: 1,
                color: "gray",
              }}
            >
              <Typography variant="body2">อัปโหลด File</Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                PDF DOCX TXT &nbsp; ≤10 MB
              </Typography>

              <Button
                variant="contained"
                component="label"
                sx={{ mt: 2, borderRadius: "20px", backgroundColor: "#2D2C95" }}
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


            <Typography sx={{ mb: 1 }}>บันทึกความก้าวหน้า</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="รายละเอียดความก้าวหน้า..."
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
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

            <Box sx={{ textAlign: "right" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#2D2C95",
                  px: 4,
                  borderRadius: "20px",
                }}
                onClick={() => { alert("บันทึกความก้าวหน้าเรียบร้อย"); navigate("/project-info"); }}
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

