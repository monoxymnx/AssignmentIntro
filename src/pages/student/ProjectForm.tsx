// src/pages/ProjectFormPage.tsx
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
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

const projectTypes = ["โครงงาน สหกิจ", "โครงงาน พิเศษ"];

const ProjectFormPage: React.FC = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const handleNext = () => {
        navigate("/project-info");
    };
    const [fileName, setFileName] = useState<string>("");
    const [date, setDate] = useState<Date | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        }
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
                    แบบฟอร์มการนำเสนอโครงงาน
                </Typography>

                {/* เลือกประเภทโครงงาน */}
                <FormControl
                    fullWidth
                    margin="normal"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                >
                    <InputLabel>เลือกประเภทโครงงาน</InputLabel>
                    <Select defaultValue="">
                        <MenuItem value="">เลือกประเภท</MenuItem>
                        {projectTypes.map((type) => (
                            <MenuItem
                                key={type}
                                value={type}
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
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* ชื่อโครงงาน */}
                <TextField
                    label="ชื่อโครงงาน"
                    fullWidth
                    margin="normal"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />

                {/* ขอบเขตโครงงาน */}
                <TextField
                    label="ขอบเขตโครงงาน"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />

                {/* ชื่อนักศึกษา */}
                <TextField
                    label="ชื่อที่ปรึกษาโครงงาน 1"
                    fullWidth
                    margin="normal"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />
                <TextField
                    label="ชื่อที่ปรึกษาโครงงาน 2"
                    fullWidth
                    margin="normal"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />
                <TextField
                    label="ชื่อที่ปรึกษาโครงงาน 3"
                    fullWidth
                    margin="normal"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />

                {/* วันที่ยื่นโครงงาน */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="วันที่ยื่นโครงงาน"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                margin: "normal",
                                sx: {
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "15px",
                                    },
                                },
                            },
                        }}
                    />
                </LocalizationProvider>

                {/* Upload File */}
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

                    {/* ปุ่มเลือกไฟล์ */}
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

                    {/* แสดงชื่อไฟล์ */}
                    {fileName && (
                        <Typography variant="body2" sx={{ mt: 2, color: "black" }}>
                            📄 {fileName}
                        </Typography>
                    )}
                </Box>

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ mr: 2, borderRadius: "20px", width: "25%" }}
                        onClick={handleBack}
                    >
                        ย้อนกลับ
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ borderRadius: "20px", backgroundColor: "#2D2C95", width: "25%" }}
                        onClick={handleNext}
                    >
                        ส่งข้อมูล
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ProjectFormPage;
