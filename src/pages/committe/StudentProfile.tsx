import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Avatar,
    Button,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

interface Student {
    id: number;
    name: string;
    studentId: string;
    major: string;
    project: string;
    projectType: string;
    role: string;
    image?: string;
}

const mockStudents: Student[] = [
    {
        id: 1,
        name: "นายวินัทร์ วนดี",
        studentId: "6806022510011",
        major: "INET",
        project: "ฝนกระเทียม",
        projectType: "ทดลอง",
        role: "เจ้าของโครงงาน",
        image: "src/assets/humen.png",
    },
    {
        id: 2,
        name: "นางสาวกฤติตา แซ่ฟ่ง",
        studentId: "6806022510012",
        major: "INET",
        project: "ฝนกระเทียม",
        projectType: "ทดลอง",
        role: "ผู้ร่วมโครงงาน",
        image: "src/assets/humen.png",
    },
];

const StudentProfilePage: React.FC = () => {
    const [students,] = useState<Student[]>(mockStudents);
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Profile
                </Typography>
                {students.map((student) => (
                    <Paper
                        key={student.id}
                        sx={{ p: 3, mb: 4, display: "flex", alignItems: "center", width: 600 }}
                    >
                        <Box position="relative" mr={3}>
                            <Avatar
                                src={student.image || ""}
                                sx={{ width: 100, height: 120, borderRadius: 2 }}
                                variant="rounded"
                            >
                                รูปนักศึกษา
                            </Avatar>
                        </Box>
                        <Box>
                            <Typography>{student.role}</Typography>
                            <Typography>ชื่อ-สกุล : {student.name}</Typography>
                            <Typography>รหัสนักศึกษา : {student.studentId}</Typography>
                            <Typography>สาขา : {student.major}</Typography>
                            <Typography>ชื่อโครงงาน : {student.project}</Typography>
                            <Typography>เลือกประเภทโครงงาน : {student.projectType}</Typography>
                        </Box>
                    </Paper>
                ))}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ mr: 2, borderRadius: "20px", width:"100%" }}
                        onClick={() => navigate(-1)}
                    >
                        ย้อนกลับ
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default StudentProfilePage;
