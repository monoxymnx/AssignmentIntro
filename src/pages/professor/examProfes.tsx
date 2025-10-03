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

export default function ProjectExamTableForProfessor() {
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
            <Container maxWidth="md" sx={{ py: 4 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#f0f4ff" }}>
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
                                <TableRow key={row.id}>
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
                                        <Link href="#" underline="hover" sx={{ color: "blue" }} onClick={() => navigate("/professor-projectinfo")}>
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

                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ mr: 2, borderRadius: "20px", width: "20%" }}
                        onClick={() => { alert("ไม่ผ่าน"); navigate("/professor-table"); }}
                    >
                        ไม่ผ่าน
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ borderRadius: "20px", backgroundColor: "#2D2C95", width: "20%" }}
                        onClick={() => { alert("ลงนามสำเร็จ"); navigate("/professor-table"); }}
                    >
                        ผ่าน
                    </Button>
                </Box>
            </Container>
        </>
    );
}
