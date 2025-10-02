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
import Navbar from "../../components/Navbar";
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
            { teacher: "อาจารย์ 1", text: "กลับไปแก้ส่วนนี้มาใหม่" },
            { teacher: "อาจารย์ 2", text: "สู้ๆ นศ" },
            { teacher: "อาจารย์ 3", text: "สู้ๆ นศ" },
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
            { teacher: "อาจารย์ 1", text: "กลับไปแก้ส่วนนี้มาใหม่" },
            { teacher: "อาจารย์ 2", text: "สู้ๆ นศ" },
            { teacher: "อาจารย์ 3", text: "สู้ๆ นศ" },
        ],
    },
];

export default function ProjectPage() {
    const [openRow, setOpenRow] = useState<number | null>(null);
    const navigate = useNavigate();
    return (
        <>
            <Navbar />

            <Container maxWidth={false} disableGutters>
                <Box p={4}>
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                    >
                        รายละเอียดโครงงานที่ลงทะเบียนไว้
                    </Typography>

                    <Box ml={10} mb={4}>
                        <Typography>ชื่อโครงงาน : ฝนกระเทียม</Typography>
                        <Typography>ประเภทโครงงาน : ทดลอง</Typography>
                        <Typography>
                            ชื่อที่ปรึกษาโครงงาน : รศ.ปุณจันทร์ ประสิทธิยอด (ยังไม่ยืนยัน)
                        </Typography>
                        <Typography>วันสอบโครงงาน : -</Typography>
                        <Typography>
                            สถานะโครงงาน : เกือบผ่าน{" "}
                            <Chip label="ยังไม่ตรวจสอบ" size="small" color="info" />
                        </Typography>
                    </Box>

                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                    >
                        สถานะโครงงานที่ส่งความก้าวหน้า
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>สัปดาห์ที่</TableCell>
                                    <TableCell>วันที่ส่งความก้าวหน้า</TableCell>
                                    <TableCell>% ความก้าวหน้า</TableCell>
                                    <TableCell>รายละเอียด</TableCell>
                                    <TableCell>ไฟล์งาน</TableCell>
                                    <TableCell>สถานะ</TableCell>
                                    <TableCell>ดูคอมเม้นต์</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {progressData.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <TableRow
                                            sx={{ backgroundColor: "#e3f2fd" }}
                                        >
                                            <TableCell>{row.week}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.progress}</TableCell>
                                            <TableCell>{row.detail}</TableCell>
                                            <TableCell>{row.file}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    color={row.status === "ผ่าน" ? "success" : "warning"}
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        setOpenRow(openRow === index ? null : index)
                                                    }
                                                >
                                                    {openRow === index ? "ซ่อน" : "กดเพื่อดู"}
                                                </Button>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell colSpan={7} sx={{ p: 0 }}>
                                                <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                                                    <Box sx={{ backgroundColor: "#f5f5f5", p: 2 }}>
                                                        <Table size="small">
                                                            <TableHead>
                                                                <TableRow>
                                                                    {row.comments.map((c, i) => (
                                                                        <TableCell key={i} align="center">
                                                                            {c.teacher}
                                                                        </TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow>
                                                                    {row.comments.map((c, i) => (
                                                                        <TableCell key={i} align="center">
                                                                            <Typography variant="body2">{c.text}</Typography>
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

                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2" mb={1}>
                            ปุ่มนี้จะขึ้นก็ต่อเมื่อความก้าวหน้า 100%
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#2D2C95" }} onClick={() => navigate('/project-submit')}>
                            ยื่นสอบโครงงาน
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
