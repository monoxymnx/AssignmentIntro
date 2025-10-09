import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import fitmLogo from "../../assets/fitmLogo.png";

function Navbarsec() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <>
            <AppBar position="fixed" sx={{ background: "#2D2C95", width: "100%" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <img
                            src={fitmLogo}
                            alt="FITM Logo"
                            style={{
                                maxHeight: 60,
                                borderRadius: "8px",
                                backgroundColor: "white",
                                
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "white",
                                lineHeight: 1.3,
                                whiteSpace: "nowrap",
                            }}
                        >
                            ระบบการจัดการข้อมูลโครงการงานพิเศษ
                            <br />
                            และโครงการงานสหกิจ
                        </Typography>
                    </Box>

                    {/* ปุ่ม Logout */}
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                            border: "2px solid white",
                            borderRadius: "20px",
                            px: 2.5,
                            py: 0.5,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "#2D2C95",
                                borderColor: "#2D2C95",
                                transform: "scale(1.05)",
                            },
                        }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Offset Toolbar เพื่อไม่ให้เนื้อหาถูก AppBar ทับ */}
            <Toolbar />
        </>
    );
}

export default Navbarsec;
