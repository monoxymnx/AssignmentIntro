import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    Alert,
} from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const mockUsers = [
    { username: "student1", password: "123456", role: "student" },
    { username: "committe1", password: "123456", role: "committee" },
    { username: "professor1", password: "123456", role: "professor" },
    { username: "instructor1", password: "123456", role: "courseInstructor" },
];

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const navigate = useNavigate();

    const handleLogin = () => {
        const foundUser = mockUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setMessage({ type: "success", text: "เข้าสู่ระบบสำเร็จ!" });

            setTimeout(() => {
                switch (foundUser.role) {
                    case "student":
                        navigate("/student");
                        break;
                    case "committee":
                        navigate("/committe");
                        break;
                    case "professor":
                        navigate("/professor");
                        break;
                    case "courseInstructor":
                        navigate("/instructor");
                        break;
                    default:
                        navigate("/");
                }
            }, 1000);
        } else {
            setMessage({ type: "error", text: "username หรือ password ไม่ถูกต้อง" });
        }
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url('src/assets/backgroundLogin.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        textAlign: "center",
                        backgroundColor: "rgba(255,255,255,0.9)",
                    }}
                >
                    <Box sx={{ mb: 2 }}> 
                        <img src="src/assets/fitmLogo.png" alt="FITM Logo" style={{ maxHeight: 80 }} /> </Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        ระบบการจัดการข้อมูลโครงการงานพิเศษ <br />
                        และโครงการงานสหกิจ
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: "#08076B",
                            borderRadius: 3,
                            p: 3,
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "80%",
                            mx: "auto",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
                        >
                            Login
                        </Typography>

                        <TextField
                            label="username"
                            variant="outlined"
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: 5,
                                width: "80%",
                            }}
                        />
                        <TextField
                            label="password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: 5,
                                width: "80%",
                            }}
                        />

                        <Button
                            variant="contained"
                            onClick={handleLogin}
                            sx={{
                                mt: 2,
                                bgcolor: "red",
                                "&:hover": { bgcolor: "darkred" },
                                width: "60%",
                                borderRadius: 5,
                            }}
                        >
                            ลงชื่อเข้าใช้
                        </Button>

                        {message && (
                            <Alert
                                severity={message.type}
                                sx={{ mt: 2, width: "90%", borderRadius: 2 }}
                            >
                                {message.text}
                            </Alert>
                        )}
                    </Box>
                    <Box sx={{ mt: 3, textAlign: "left", fontSize: 14 }}> 
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}> การเข้าสู่ระบบ </Typography> 
                        <Typography>นักศึกษา: รหัสนักศึกษา</Typography> 
                        <Typography> อาจารย์-กรรมการ: รหัสพนักงาน รหัสบัตร </Typography> 
                        <Typography>password: รหัสบัตรประชาชน</Typography> 
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
export default LoginPage;