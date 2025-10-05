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
    type SelectChangeEvent,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

const projectTypes = ["โครงงาน สหกิจ", "โครงงาน พิเศษ"];

const professorList = [
    "รศ.ดร.อนิราช มิ่งขวัญ",
    "ผศ.อรบุษป์ วุฒิกมลชัย",
    "ผศ.ดร.บีสุดา ดาวเรือง",
    "ผศ.ดร.ขนิษฐา นามี",
    "อ.ดร.กาญจน ณ ศรีธะ",
    "ผศ.นพดล บูรณ์กุศล",
    "ผศ.จสต.นพเก้า ทองใบ",
    "ผศ.ดร.นิติการ นาคเจือทอง",
    "ผศ.ดร.นัฎฐพันธ์ นาคพงษ์",
    "ผศ.นิมิต ศรีคำทา",
    "อ.ดร.พิทย์พิมล ชูรอด",
    "ผศ.ดร.พาฝัน ดวงไพศาล",
    "อ.ดร.ประดิษฐ์ พิทักษ์เสถียรกุล",
    "ผศ.พีระศักดิ์ เสรีกุล",
    "ผศ.สมชัย เชียงพงศ์พันธุ์",
    "ผศ.ดร.สุปีติ กุลจันทร์",
    "ผศ.สิวาลัย จินเจือ",
    "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
    "ผศ.ดร.ศรายุทธ ธเนศสกุลวัฒนา",
    "อ.ดร.ศิรินทรา แว่วศรี",
    "อ.ดร.วัชรชัย คงศิริวัฒนา",
    "ผศ.ดร.วันทนี ประจวบศุภกิจ",
    "รศ.ดร.ยุพิน สรรพคุณ",
];

const ProjectFormPage: React.FC = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleNext = () => navigate("/project-info");

    const [advisors, setAdvisors] = useState<string[]>([""]); // index 0 = หลัก, index 1-2 = ร่วม


    const handleAdvisorChange =
        (index: number) => (event: SelectChangeEvent<string>) => {
            const newList = [...advisors];
            newList[index] = event.target.value;
            setAdvisors(newList);
        };


    const handleAddAdvisor = () => {
        if (advisors.length < 3) {
            setAdvisors([...advisors, ""]);
        }
    };


    const handleRemoveAdvisor = (index: number) => {
        const newList = advisors.filter((_, i) => i !== index);
        setAdvisors(newList);
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
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    fontWeight="bold"
                >
                    แบบฟอร์มการนำเสนอโครงงาน
                </Typography>


                <FormControl fullWidth margin="normal">
                    <InputLabel>เลือกประเภทโครงงาน</InputLabel>
                    <Select defaultValue="">
                        <MenuItem value="">เลือกประเภท</MenuItem>
                        {projectTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="ชื่อโครงงาน"
                    fullWidth
                    margin="normal"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />


                <TextField
                    label="ขอบเขตโครงงาน"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "15px" } }}
                />


                <Box sx={{ mt: 2 }}>
                    <Typography fontWeight="bold" sx={{ mb: 1 }}>
                        อาจารย์ที่ปรึกษา
                    </Typography>

                    {advisors.map((advisor, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 2,
                            }}
                        >
                            <FormControl fullWidth>
                                <InputLabel>
                                    {index === 0
                                        ? "อาจารย์ที่ปรึกษา"
                                        : `อาจารย์ที่ปรึกษาร่วม ${index}`}
                                </InputLabel>
                                <Select
                                    value={advisor}
                                    onChange={handleAdvisorChange(index)}
                                >
                                    <MenuItem value="">เลือกอาจารย์</MenuItem>
                                    {professorList.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            disabled={advisors.includes(name)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>


                            {index > 0 && (
                                <Button
                                    color="error"
                                    onClick={() => handleRemoveAdvisor(index)}
                                >
                                    ลบ
                                </Button>
                            )}
                        </Box>
                    ))}


                    {advisors.length < 3 && (
                        <Box sx={{ textAlign: "center", mt: 1 }}>
                            <Button
                                variant="outlined"
                                onClick={handleAddAdvisor}
                                sx={{
                                    borderRadius: "20px",
                                    color: "#2D2C95",
                                    borderColor: "#2D2C95",
                                }}
                            >
                                + เพิ่มอาจารย์ที่ปรึกษาร่วม
                            </Button>
                        </Box>
                    )}
                </Box>


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
                    <Typography variant="body2">อัปโหลดไฟล์</Typography>
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        PDF DOCX TXT ≤ 10 MB
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
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: "#2D2C95",
                            width: "25%",
                        }}
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
