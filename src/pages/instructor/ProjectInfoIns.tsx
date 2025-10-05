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
    TextField,
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

export default function ProjectInfoForInstructor() {
    const [openRow, setOpenRow] = useState<number | null>(null);
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "#f5f6fa",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    py: 5,
                }}
            >
                <Container maxWidth="md">
                    <Paper
                        elevation={3}
                        sx={{
                            borderRadius: "20px",
                            p: 4,
                            width: "100%",
                            backgroundColor: "#fff",
                        }}
                    >
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ mb: 3, color: "#2D2C95" }}
                        >
                            รายละเอียดโครงงานที่ลงทะเบียนไว้
                        </Typography>

                        <Box mb={4} sx={{ ml: 3 }}>
                            <Typography>ชื่อโครงงาน : ฝนกระเทียม</Typography>
                            <Typography>ประเภทโครงงาน : ทดลอง</Typography>
                            <Typography>
                                ชื่อที่ปรึกษาโครงงาน : ผศ.ดร.นิติการ นาคเจือทอง
                            </Typography>
                            <Typography>
                                ชื่อที่ปรึกษาร่วม : รศ.ดร.อนิราช มิ่งขวัญ
                            </Typography>
                            <Typography>วันสอบโครงงาน : -</Typography>
                            <Typography>
                                ชื่อผู้จัดทำ : นายปุลินภัทร ประสิทธินอก , นางสาวศุกาสิ ประสิทธิยอด
                            </Typography>
                        </Box>

                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ mb: 2, color: "#2D2C95" }}
                        >
                            สถานะโครงงานที่ส่งความก้าวหน้า
                        </Typography>

                        <TableContainer
                            component={Paper}
                            elevation={1}
                            sx={{
                                width: "100%",
                                borderRadius: "15px",
                                mb: 3,
                            }}
                        >
                            <Table>
                                <TableHead sx={{ backgroundColor: "#E3EAFD" }}>
                                    <TableRow>
                                        <TableCell>สัปดาห์ที่</TableCell>
                                        <TableCell>วันที่ส่ง</TableCell>
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
                                                sx={{
                                                    backgroundColor:
                                                        index % 2 === 0 ? "#f9fbff" : "#ffffff",
                                                }}
                                            >
                                                <TableCell>{row.week}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.progress}</TableCell>
                                                <TableCell>{row.detail}</TableCell>
                                                <TableCell>{row.file}</TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={row.status}
                                                        color={
                                                            row.status === "ผ่าน"
                                                                ? "success"
                                                                : "warning"
                                                        }
                                                        size="small"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        onClick={() =>
                                                            setOpenRow(openRow === index ? null : index)
                                                        }
                                                    >
                                                        {openRow === index ? "ซ่อน" : "ดู"}
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
                                                                backgroundColor: "#f0f3ff",
                                                                p: 2,
                                                                borderRadius: "0 0 15px 15px",
                                                            }}
                                                        >
                                                            <Table size="small">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        {row.comments.map((c, i) => (
                                                                            <TableCell
                                                                                key={i}
                                                                                align="center"
                                                                                sx={{ fontWeight: "bold" }}
                                                                            >
                                                                                {c.teacher}
                                                                            </TableCell>
                                                                        ))}
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    <TableRow>
                                                                        {row.comments.map((c, i) => (
                                                                            <TableCell key={i} align="center">
                                                                                {c.text}
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

                        <Box sx={{ mt: 3 }}>
                            <TextField
                                label="คอมเม้นต์"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "15px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{ mr: 2, borderRadius: "20px", width: "120px" }}
                                onClick={() => navigate("/instructor-table")}
                            >
                                ไม่ผ่าน
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "20px",
                                    backgroundColor: "#2D2C95",
                                    width: "120px",
                                }}
                                onClick={() => navigate("/instructor-table")}
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
