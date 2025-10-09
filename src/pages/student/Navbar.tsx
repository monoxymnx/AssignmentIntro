import {
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Box,
    Button,
    Typography,
    MenuItem,
    Menu,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import fitmLogo from "../../assets/fitmLogo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // In a real app, you would get the user's name from state or context
    const userName = "นายวัจน์กร อินยู่";

    const paths = ["/project-info", "/project-update", "/profile"];
    const currentTab = paths.indexOf(location.pathname);

    const handleLogout = () => {
        navigate("/");
    };

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
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
                                    color: "#e6e6ffff",
                                    transform: "scale(1.05)",
                                },
                                "& .Mui-selected": {
                                    backgroundColor: "#fff !important",
                                    borderRadius: "10px",
                                    color: "#2D2C95 !important",
                                },
                            }}
                        >
                            <Tab label="โครงงาน" />
                            <Tab label="บันทึกความก้าวหน้า" />
                            <Tab label="Profile" />
                        </Tabs>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* ปุ่มชื่อผู้ใช้ + Dropdown */}
                        <Button
                            id="user-button"
                            onClick={handleClick}
                            aria-controls={open ? 'user-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            sx={{
                                color: "white",
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                borderRadius: "25px",
                                px: 2.5,
                                py: 0.8,
                                background: "#4B49C7",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                                "&:hover": {
                                    background: "#6d6afdff ",
                                    transform: "scale(1.02)",
                                    transition: "all 0.2s ease",
                                },
                            }}
                        >
                            <AccountCircleIcon sx={{ mr: 1 }} />
                            {userName}
                            <ArrowDropDownIcon sx={{ ml: 0.5 }} />
                        </Button>

                        {/* เมนู Dropdown */}
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'user-button',
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            PaperProps={{
                                elevation: 3,
                                sx: {
                                    mt: 1,
                                    borderRadius: "15px",
                                    minWidth: 180,
                                    backgroundColor: "#f9f9ff",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                    "& .MuiMenuItem-root": {
                                        fontWeight: "500",
                                        color: "#2D2C95",
                                        fontSize: "0.95rem",
                                        py: 1.2,
                                        borderRadius: "10px",
                                        mx: 1,
                                        my: 0.5,
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            backgroundColor: "#E3EAFD",
                                            transform: "scale(1.02)",
                                        },
                                    },
                                },
                            }}
                        >
                            <MenuItem>ตั้งค่า</MenuItem>
                        </Menu>
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
                    </Box>


                </Toolbar>
            </AppBar>

            <Toolbar />
        </>
    );
}

export default Navbar;