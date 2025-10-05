import {
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Box,
    Button,
    Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import fitmLogo from "../../assets/fitmLogo.png";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const paths = ["/committe-table", "/student-exam",];
    const currentTab = paths.indexOf(location.pathname);
    const handleLogout = () => {
        navigate("/");
    };
    return (
        <>
            <AppBar position="fixed" sx={{ background: "#00aa9fb3", width: "100%" }}>
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

                    <Box
                        sx={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)", // จัดให้อยู่ตรงกลางแท้
                        }}
                    >
                        <Tabs
                            value={currentTab === -1 ? 0 : currentTab}
                            onChange={(_, newValue) => navigate(paths[newValue])}
                            textColor="inherit"
                            TabIndicatorProps={{ style: { display: "none" } }}
                            sx={{
                                "& .MuiTab-root": {
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    color: "white",
                                    transition: "all 0.3s ease",
                                },
                                "& .MuiTab-root:hover": {
                                    color: "#ffffffff",
                                    transform: "scale(1.05)",
                                },
                                "& .Mui-selected": {
                                    backgroundColor: "#005a54b3 !important",
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <Tab label="โครงงาน" />
                            <Tab label="ผลการสอบ" />
                        </Tabs>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
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
            <Toolbar />
        </>
    );
}

export default Navbar;
