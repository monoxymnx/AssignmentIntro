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
    Avatar,
} from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import CategoryIcon from "@mui/icons-material/Category";
import EventIcon from "@mui/icons-material/Event";

const progressData = [
    {
        week: 1,
        date: "10/2/69",
        progress: "10%",
        detail: "อัปเดตการโปรย",
        file: "fon.pdf",
        status: "ผ่าน",
        comments: [
            { teacher: "รศ.ดร.อนิราช มิ่งขวัญ", text: "ทำได้ดีมาก", avatar: "N" },
            { teacher: "ผศ.ดร.นิติการ นาคเจือทอง", text: "ส่วนนี้ดูดีแล้ว", avatar: "A" },
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
            { teacher: "รศ.ดร.อนิราช มิ่งขวัญ", text: "ทำได้ดีมาก", avatar: "N" },
            { teacher: "ผศ.ดร.นิติการ นาคเจือทอง", text: "ส่วนนี้ดูดีแล้ว", avatar: "A" },
        ],
    },
];

export default function ProjectInfoForCommit() {
    const [openRow, setOpenRow] = useState<number | null>(null);
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "#f5f7ff", minHeight: "100vh", py: 6 }}>
                <Container maxWidth="lg">
                    <Paper elevation={3} sx={{ p: 4, borderRadius: "16px", backgroundColor: "#fff" }}>
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ color: "#2D2C95" }}
                        >
                            รายละเอียดโครงงานที่ลงทะเบียนไว้
                        </Typography>

                        <Box mb={4}  sx={{ ml: 3 }}>
                           <Typography sx={{ display: "flex", alignItems: "center" }}><BookIcon sx={{ mr: 1.5, color: 'primary.main' }} />ชื่อโครงงาน : ฝนกระเทียม</Typography>
                            <Typography sx={{ display: "flex", alignItems: "center" }}><CategoryIcon sx={{ mr: 1.5, color: 'primary.main' }} />ประเภทโครงงาน : ทดลอง</Typography>
                            <Typography sx={{ display: "flex", alignItems: "center" }}><EventIcon sx={{ mr: 1.5, color: 'primary.main' }} />วันสอบโครงงาน : -</Typography>
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                <PersonIcon sx={{ mr: 1.5, color: 'primary.main' }} />ชื่อที่ปรึกษาโครงงาน : ผศ.ดร.นิติการ นาคเจือทอง
                            </Typography>
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                <PersonIcon sx={{ mr: 1.5, color: 'primary.main' }} />ชื่อที่ปรึกษาร่วม : รศ.ดร.อนิราช มิ่งขวัญ
                            </Typography>
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                <PersonIcon sx={{ mr: 1.5, color: 'primary.main' }} /> ชื่อผู้จัดทำ : นายปุลินภัทร ประสิทธินอก , นางสาวศุกาสิ ประสิทธิยอด
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{ mt: 1, borderRadius: "20px", color: "#2D2C95", borderColor: "#2D2C95" }}
                                onClick={() => navigate("/student-profile")}
                            >
                                ดูโปรไฟล์นักศึกษา
                            </Button>
                        </Box>

                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ color: "#2D2C95", mb: 2 }}
                        >
                            ประวัติความก้าวหน้า
                        </Typography>

                        <TableContainer component={Paper} sx={{ borderRadius: "16px", overflow: "hidden" }}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: "#e8ecff" }}>
                                        <TableCell align="center">สัปดาห์ที่</TableCell>
                                        <TableCell align="center">วันที่ส่งความก้าวหน้า</TableCell>
                                        <TableCell align="center">% ความก้าวหน้า</TableCell>
                                        <TableCell align="center">รายละเอียด</TableCell>
                                        <TableCell align="center">ไฟล์งาน</TableCell>
                                        <TableCell align="center">สถานะ</TableCell>
                                        <TableCell align="center">ดูคอมเม้นต์</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {progressData.map((row, index) => (
                                        <React.Fragment key={index}>
                                            <TableRow hover sx={{ backgroundColor: index % 2 === 0 ? "#f5f7ff" : "#ffffff" }}>
                                                <TableCell align="center">{row.week}</TableCell>
                                                <TableCell align="center">{row.date}</TableCell>
                                                <TableCell align="center">{row.progress}</TableCell>
                                                <TableCell align="center">{row.detail}</TableCell>
                                                <TableCell align="center">{row.file}</TableCell>
                                                <TableCell align="center">
                                                    <Chip
                                                        label={row.status}
                                                        color={row.status === "ผ่าน" ? "success" : "warning"}
                                                        size="small"
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        variant="outlined"
                                                        sx={{ borderColor: "#2D2C95", color: "#2D2C95", textTransform: "none",width:"10vh", }}
                                                        onClick={() => setOpenRow(openRow === index ? null : index)}
                                                        
                                                    >
                                                        {openRow === index ? "ซ่อน" : "กดเพื่อดู"}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                                                    <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                                                        <Box sx={{ margin: 2, p: 2, backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
                                                            <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
                                                                คอมเม้นต์
                                                            </Typography>
                                                            {row.comments.map((c, i) => (
                                                                <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                                    <Avatar sx={{ bgcolor: '#2D2C95', mr: 2 }}>{c.avatar}</Avatar>
                                                                    <Box>
                                                                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{c.teacher}</Typography>
                                                                        <Typography variant="body2">{c.text}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    </Collapse>
                                                </TableCell>
                                            </TableRow>
                                        </React.Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                            <Button
                                variant="outlined"
                                sx={{ mr: 2, borderRadius: "20px", width: "15%" }}
                                onClick={() => { alert("ไม่อนุมัติสอบเรียบร้อย"); navigate("/committe-table"); }}
                            >
                                ไม่อนุมัติสอบ
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ borderRadius: "20px", width: "15%", backgroundColor: "#2D2C95" }}
                                onClick={() => { alert("อนุมัติสอบเรียบร้อย"); navigate("/committe-table"); }}
                            >
                                อนุมัติสอบ
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
