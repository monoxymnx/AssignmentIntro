import { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

interface ProjectExam {
    id: number;
    name: string;
    date: string;
    files: string[];
}

const mockData: ProjectExam[] = [
    { id: 1, name: "ฝนกระเทียม", date: "19/2/69", files: ["fon.pdf", "presentation.pdf"] },
    { id: 2, name: "ฝนกระเทียม", date: "19/2/69", files: ["presentation.pdf"] },
];

export default function ProjectExamTableForInstructor() {
    const [selected, setSelected] = useState<number[]>([]);
    const navigate = useNavigate();

    const handleSelect = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <>
            <Navbar />

            {/* 🔹 พื้นหลังทั้งหน้า */}
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "#f5f7ff", // โทนเดียวกับ ProjectInfoForCommit
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    py: 6,
                }}
            >
                <Container maxWidth="md">
                    {/* 🔹 กล่องหลัก (Paper) เหมือนกับ ProjectInfoForCommit */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: "20px",
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <Typography
                            variant="h5"
                            align="center"
                            sx={{ mb: 3, fontWeight: "bold", color: "#2D2C95" }}
                        >
                            ตารางสอบโครงงาน
                        </Typography>

                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: "#e8ebff" }}>
                                        <TableCell align="center">เลือก</TableCell>
                                        <TableCell align="center">ลำดับ</TableCell>
                                        <TableCell align="center">ชื่อ</TableCell>
                                        <TableCell align="center">วันที่สอบโครงงาน</TableCell>
                                        <TableCell align="center">รายละเอียด</TableCell>
                                        <TableCell align="center">ไฟล์งาน</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mockData.map((row, index) => (
                                        <TableRow key={row.id} hover>
                                            <TableCell align="center">
                                                <Checkbox
                                                    checked={selected.includes(row.id)}
                                                    onChange={() => handleSelect(row.id)}
                                                />
                                            </TableCell>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell align="center">{row.name}</TableCell>
                                            <TableCell align="center">{row.date}</TableCell>
                                            <TableCell align="center">
                                                <Link
                                                    href="#"
                                                    underline="hover"
                                                    sx={{ color: "#2D2C95", fontWeight: 500 }}
                                                    onClick={() => navigate("/professor-projectinfo")}
                                                >
                                                    ดูเพิ่มเติม
                                                </Link>
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.files.map((file, i) => (
                                                    <Typography key={i} variant="body2">
                                                        {file}
                                                    </Typography>
                                                ))}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* ปุ่มด้านล่าง */}
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                    mr: 2,
                                    borderRadius: "20px",
                                    width: "25%",
                                    textTransform: "none",
                                }}
                                onClick={() => {
                                    alert("ไม่ผ่าน");
                                    navigate("/instructor-table");
                                }}
                            >
                                ไม่ผ่าน
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "20px",
                                    backgroundColor: "#2D2C95",
                                    width: "25%",
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#242384" },
                                }}
                                onClick={() => {
                                    alert("ลงนามสำเร็จ");
                                    navigate("/instructor-table");
                                }}
                            >
                                ผ่าน
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
