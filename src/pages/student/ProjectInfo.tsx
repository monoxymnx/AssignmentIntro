import {
    Box,
    Typography,
    Chip,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Button,
    Container,
    Collapse,
} from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const progressData = [
    {
        week: 1,
        date: "10/2/69",
        progress: "10%",
        detail: "อัปเดตการโปรย",
        file: "fon.pdf",
        status: "ผ่าน",
        comments: [
            { teacher: "อาจารย์ที่ปรึกษาโครงงาน", text: "กลับไปแก้ส่วนนี้มาใหม่" },
            { teacher: "อาจารย์ที่ปรึกษาร่วม", text: "สู้ๆ นศ" },
        ],
    },
    {
        week: 2,
        date: "17/2/69",
        progress: "20%",
        detail: "สัปดาห์ที่สอง",
        file: "fonweek2.pdf",
        status: "ผ่าน",
        comments: [
            { teacher: "อาจารย์ที่ปรึกษาโครงงาน", text: "กลับไปแก้ส่วนนี้มาใหม่" },
            { teacher: "อาจารย์ที่ปรึกษาร่วม", text: "สู้ๆ นศ" },
        ],
    },
];

export default function ProjectPage() {
    const [openRow, setOpenRow] = useState<number | null>(null);
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <Box sx={{ backgroundColor: "#f5f7ff", minHeight: "100vh", py: 6 }}>
                <Container maxWidth="md">
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            backgroundColor: "#fff",
                        }}
                    >
                        {/* หัวข้อหลัก */}
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            color="#2D2C95"
                        >
                            รายละเอียดโครงงานที่ลงทะเบียนไว้
                        </Typography>

                        {/* ข้อมูลโครงงาน */}
                        <Box sx={{ mb: 4 }}>
                            <Typography><strong>ชื่อโครงงาน:</strong> ฝนกระเทียม</Typography>
                            <Typography><strong>ประเภทโครงงาน:</strong> ทดลอง</Typography>
                            <Typography>
                                <strong>ชื่อที่ปรึกษาโครงงาน:</strong> ผศ.ดร.นิติการ นาคเจือทอง
                            </Typography>
                            <Typography>
                                <strong>ชื่อที่ปรึกษาร่วม:</strong> รศ.ดร.อนิราช มิ่งขวัญ
                            </Typography>
                            <Typography><strong>วันสอบโครงงาน:</strong> -</Typography>
                            <Typography><strong>สถานะโครงงาน:</strong> ยังไม่ยื่นสอบ</Typography>
                        </Box>

                        {/* ตารางสถานะ */}
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            color="#2D2C95"
                        >
                            สถานะโครงงานที่ส่งความก้าวหน้า
                        </Typography>

                        <TableContainer
                            component={Paper}
                            sx={{
                                mt: 2,
                                borderRadius: 2,
                                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                                overflow: "hidden",
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: "#2D2C95" }}>
                                        {[
                                            "สัปดาห์ที่",
                                            "วันที่ส่งความก้าวหน้า",
                                            "% ความก้าวหน้า",
                                            "รายละเอียด",
                                            "ไฟล์งาน",
                                            "สถานะ",
                                            "ดูคอมเม้นต์",
                                        ].map((h, i) => (
                                            <TableCell
                                                key={i}
                                                sx={{
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {h}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {progressData.map((row, index) => (
                                        <React.Fragment key={index}>
                                            <TableRow
                                                sx={{
                                                    backgroundColor:
                                                        index % 2 === 0 ? "#eef3ff" : "#f9fbff",
                                                    "&:hover": { backgroundColor: "#dbe6ff" },
                                                }}
                                            >
                                                <TableCell align="center">{row.week}</TableCell>
                                                <TableCell align="center">{row.date}</TableCell>
                                                <TableCell align="center">{row.progress}</TableCell>
                                                <TableCell align="center">{row.detail}</TableCell>
                                                <TableCell align="center">{row.file}</TableCell>
                                                <TableCell align="center">
                                                    <Chip
                                                        label={row.status}
                                                        color={
                                                            row.status === "ผ่าน" ? "success" : "warning"
                                                        }
                                                        size="small"
                                                        sx={{ fontWeight: "bold" }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        variant="outlined"
                                                        onClick={() =>
                                                            setOpenRow(openRow === index ? null : index)
                                                        }
                                                        sx={{
                                                            textTransform: "none",
                                                            borderColor: "#2D2C95",
                                                            color: "#2D2C95",
                                                            fontWeight: "bold",
                                                            "&:hover": {
                                                                backgroundColor: "#2D2C95",
                                                                color: "white",
                                                            },
                                                        }}
                                                    >
                                                        {openRow === index ? "ซ่อน" : "กดเพื่อดู"}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell colSpan={7} sx={{ p: 0 }}>
                                                    <Collapse
                                                        in={openRow === index}
                                                        timeout="auto"
                                                        unmountOnExit
                                                    >
                                                        <Box
                                                            sx={{
                                                                backgroundColor: "#ffffff",
                                                                p: 2,
                                                                borderTop: "2px solid #2D2C95",
                                                            }}
                                                        >
                                                            <Table size="small">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        {row.comments.map((c, i) => (
                                                                            <TableCell
                                                                                key={i}
                                                                                align="center"
                                                                                sx={{
                                                                                    fontWeight: "bold",
                                                                                    color: "#2D2C95",
                                                                                }}
                                                                            >
                                                                                {c.teacher}
                                                                            </TableCell>
                                                                        ))}
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    <TableRow>
                                                                        {row.comments.map((c, i) => (
                                                                            <TableCell
                                                                                key={i}
                                                                                align="center"
                                                                            >
                                                                                <Typography variant="body2">
                                                                                    {c.text}
                                                                                </Typography>
                                                                            </TableCell>
                                                                        ))}
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </Box>
                                                    </Collapse>
                                                </TableCell>
                                            </TableRow>
                                        </React.Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* ปุ่มยื่นสอบ */}
                        <Box textAlign="center" mt={4}>
                            <Typography variant="body2" mb={1} color="text.secondary">
                                ปุ่มนี้จะขึ้นก็ต่อเมื่อความก้าวหน้า 100%
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#2D2C95",
                                    px: 3,
                                    py: 1,
                                    fontWeight: "bold",
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#1d1c75",
                                    },
                                }}
                                onClick={() => navigate("/project-submit")}
                            >
                                ยื่นสอบโครงงาน
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
