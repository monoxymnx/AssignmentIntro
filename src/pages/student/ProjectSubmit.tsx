import {
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function ProjectSubmitPage() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const [fileName, setFileName] = useState<string>("");
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        }
    };
    return (
        <>
            <Navbar />
            <Container maxWidth="sm">
                <Box textAlign="center" py={4}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                        ยื่นสอบโครงงาน
                    </Typography>
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
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>อัพโหลดไฟล์เล่มโปรเจค</Typography>
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
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>อัปโหลดไฟล์พรีเซนต์</Typography>
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
                            onClick={() => { alert("ส่งข้อมูลเรียบร้อย"); navigate("/project-info"); }}
                        >
                            ส่งข้อมูล
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
