import {
    Box,
    Button,
    Container,
    Typography,
    Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function ProjectSubmitPage() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const [projectFile, setProjectFile] = useState<string>("");
    const [presentFile, setPresentFile] = useState<string>("");

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        type: "project" | "present"
    ) => {
        if (event.target.files && event.target.files.length > 0) {
            const name = event.target.files[0].name;
            if (type === "project") setProjectFile(name);
            else setPresentFile(name);
        }
    };

    return (
        <>
            <Navbar />
            <Box sx={{ backgroundColor: "#f5f7ff", minHeight: "100vh", py: 6 }}>
                <Container maxWidth="sm">
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            backgroundColor: "white",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            fontWeight="bold"
                            color="#2D2C95"
                        >
                            ยื่นสอบโครงงาน
                        </Typography>

                        {/* Upload Project File */}
                        <Box
                            sx={{
                                border: "2px dashed #2D2C95",
                                borderRadius: "15px",
                                p: 4,
                                mt: 3,
                                color: "gray",
                                transition: "0.3s",
                                "&:hover": {
                                    backgroundColor: "#f0f2ff",
                                },
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: "bold", color: "#2D2C95" }}
                            >
                                📘 อัปโหลดไฟล์เล่มโปรเจค
                            </Typography>
                            <Typography
                                variant="caption"
                                display="block"
                                sx={{ mt: 1, color: "#666" }}
                            >
                                รองรับ: PDF, DOCX, TXT (≤ 10 MB)
                            </Typography>

                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    mt: 2,
                                    borderRadius: "30px",
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
                                    onChange={(e) => handleFileChange(e, "project")}
                                    accept=".pdf,.docx,.txt"
                                />
                            </Button>

                            {projectFile && (
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 2, color: "black" }}
                                >
                                    📄 {projectFile}
                                </Typography>
                            )}
                        </Box>

                        {/* Upload Presentation File */}
                        <Box
                            sx={{
                                border: "2px dashed #2D2C95",
                                borderRadius: "15px",
                                p: 4,
                                mt: 3,
                                color: "gray",
                                transition: "0.3s",
                                "&:hover": {
                                    backgroundColor: "#f0f2ff",
                                },
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: "bold", color: "#2D2C95" }}
                            >
                                📑 อัปโหลดไฟล์พรีเซนต์
                            </Typography>
                            <Typography
                                variant="caption"
                                display="block"
                                sx={{ mt: 1, color: "#666" }}
                            >
                                รองรับ: PDF, DOCX, TXT (≤ 10 MB)
                            </Typography>

                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    mt: 2,
                                    borderRadius: "30px",
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
                                    onChange={(e) => handleFileChange(e, "present")}
                                    accept=".pdf,.docx,.txt"
                                />
                            </Button>

                            {presentFile && (
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 2, color: "black" }}
                                >
                                    📄 {presentFile}
                                </Typography>
                            )}
                        </Box>

                        {/* Action Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 4,
                                gap: 2,
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                    borderRadius: "30px",
                                    width: "45%",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    borderColor: "#2D2C95",
                                    color: "#2D2C95",
                                    "&:hover": {
                                        backgroundColor: "#2D2C95",
                                        color: "white",
                                    },
                                }}
                                onClick={handleBack}
                            >
                                ⬅ ย้อนกลับ
                            </Button>

                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "30px",
                                    width: "45%",
                                    backgroundColor: "#2D2C95",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#1d1c75" },
                                }}
                                onClick={() => {
                                    alert("✅ ส่งข้อมูลเรียบร้อย");
                                    navigate("/project-info");
                                }}
                                disabled={!projectFile || !presentFile}
                            >
                                ✅ ส่งข้อมูล
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
