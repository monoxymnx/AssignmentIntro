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
        progress: "100%",
        detail: "สัปดาห์ที่สอง",
        file: "fonweek2.pdf",
        status: "ผ่าน",
        comments: [
            { teacher: "อาจารย์ที่ปรึกษาโครงงาน", text: "กลับไปแก้ส่วนนี้มาใหม่" },
            { teacher: "อาจารย์ที่ปรึกษาร่วม", text: "สู้ๆ นศ" },
        ],
    },
];

export default function ProjectInfoForCommit() {
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
                            ชื่อที่ปรึกษาโครงงาน : รศ.ปุณจันทร์ ประสิทธิยอด
                        </Typography>
                        <Typography>
                            ชื่อที่ปรึกษาร่วม : ผศ.ปุลินภัทร์ ประสิทธินอก
                        </Typography>
                        <Typography>วันสอบโครงงาน : 27/2/69</Typography>
                        <Typography>ชื่อผู้จัดทำ : นายวินัทร์ วนดี , นางสาวกฤติตา แซ่ฟ่ง</Typography>
                        <Button variant="outlined" sx={{ mt: 1 }} onClick={() => { navigate("/student-profile"); }}>
                            ดูโปรไฟล์นักศึกษา
                        </Button>
                    </Box>

                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                    >
                        ประวัติความก้าวหน้า
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

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Button
                            variant="outlined"
                            color="inherit"
                            sx={{ mr: 2, borderRadius: "20px", width: "10%" }}
                            onClick={() => { alert("ไม่อนุมัติสอบเรียบร้อย"); navigate("/committe-table"); }}
                        >
                            ไม่อนุมัติสอบ
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "20px", backgroundColor: "#2D2C95", width: "10%" }}
                            onClick={() => { alert("อนุมัติสอบเรียบร้อย"); navigate("/committe-table"); }}
                        >
                            อนุมัติสอบ
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
