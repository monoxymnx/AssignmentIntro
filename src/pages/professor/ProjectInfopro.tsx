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
            { teacher: "อาจารย์ที่ปรึกษาโครงงาน", text: "ดีมาก" },
            { teacher: "อาจารย์ที่ปรึกษาร่วม", text: "เยี่ยมครับ" },
        ],
    },
];

export default function ProjectInfoForProfessor() {
    const [openRow, setOpenRow] = useState<number | null>(null);
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "#f5f7ff", minHeight: "100vh", py: 6 }}>
                <Container maxWidth="lg">
                    {/* กล่องหลักเหมือน ProjectInfoForCommit */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: "16px",
                            backgroundColor: "#fff",
                        }}
                    >
                        {/* หัวข้อหลัก */}
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ color: "#2D2C95" }}
                        >
                            รายละเอียดโครงงานที่ลงทะเบียนไว้
                        </Typography>

                        {/* รายละเอียดโครงงาน */}
                        <Box mb={4}>
                            <Typography>ชื่อโครงงาน : ฝนกระเทียม</Typography>
                            <Typography>ประเภทโครงงาน : ทดลอง</Typography>
                            <Typography>ชื่อที่ปรึกษาโครงงาน : ผศ.ดร.นิติการ นาคเจือทอง</Typography>
                            <Typography>ชื่อที่ปรึกษาร่วม : รศ.ดร.อนิราช มิ่งขวัญ</Typography>
                            <Typography>วันสอบโครงงาน : -</Typography>
                            <Typography>
                                ชื่อผู้จัดทำ : นายปุลินภัทร ประสิทธินอก , นางสาวศุกาสิ ประสิทธิยอด
                            </Typography>
                        </Box>

                        {/* ตารางแสดงความก้าวหน้า */}
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ color: "#2D2C95", mb: 2 }}
                        >
                            สถานะโครงงานที่ส่งความก้าวหน้า
                        </Typography>

                        <TableContainer
                            component={Paper}
                            sx={{ borderRadius: "16px", overflow: "hidden" }}
                        >
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
                                            <TableRow
                                                hover
                                                sx={{
                                                    backgroundColor:
                                                        index % 2 === 0 ? "#f5f7ff" : "#ffffff",
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
                                                            row.status === "ผ่าน"
                                                                ? "success"
                                                                : "warning"
                                                        }
                                                        size="small"
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        variant="outlined"
                                                        sx={{
                                                            borderColor: "#2D2C95",
                                                            color: "#2D2C95",
                                                            textTransform: "none",
                                                        }}
                                                        onClick={() =>
                                                            setOpenRow(
                                                                openRow === index ? null : index
                                                            )
                                                        }
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
                                                                backgroundColor: "#f5f5f5",
                                                                p: 2,
                                                            }}
                                                        >
                                                            <Table size="small">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        {row.comments.map(
                                                                            (c, i) => (
                                                                                <TableCell
                                                                                    key={i}
                                                                                    align="center"
                                                                                    sx={{
                                                                                        fontWeight:
                                                                                            "bold",
                                                                                        color: "#2D2C95",
                                                                                    }}
                                                                                >
                                                                                    {c.teacher}
                                                                                </TableCell>
                                                                            )
                                                                        )}
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    <TableRow>
                                                                        {row.comments.map(
                                                                            (c, i) => (
                                                                                <TableCell
                                                                                    key={i}
                                                                                    align="center"
                                                                                >
                                                                                    <Typography variant="body2">
                                                                                        {c.text}
                                                                                    </Typography>
                                                                                </TableCell>
                                                                            )
                                                                        )}
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

                        {/* ช่องเพิ่มคอมเม้นต์ใหม่ */}
                        <Box mt={4}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ color: "#2D2C95", mb: 2 }}
                            >
                                เพิ่มคอมเม้นต์และความคืบหน้า
                            </Typography>

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
                            <TextField
                                label="% ความคืบหน้า"
                                fullWidth
                                margin="normal"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "15px",
                                    },
                                }}
                            />

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 2,
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        mr: 2,
                                        borderRadius: "20px",
                                        width: "15%",
                                        borderColor: "#2D2C95",
                                        color: "#2D2C95",
                                        "&:hover": { backgroundColor: "#e5e5ff" },
                                    }}
                                    onClick={() => {
                                        alert("ไม่ผ่าน");
                                        navigate("/professor-table");
                                    }}
                                >
                                    ไม่ผ่าน
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: "20px",
                                        width: "15%",
                                        backgroundColor: "#2D2C95",
                                        "&:hover": { backgroundColor: "#1f1e7a" },
                                    }}
                                    onClick={() => {
                                        alert("ผ่านเรียบร้อย");
                                        navigate("/professor-table");
                                    }}
                                >
                                    ผ่าน
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
