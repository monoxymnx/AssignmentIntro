import React from "react";
import {
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Box,
    Button,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const paths = ["/project-info", "/project-update", "/profile"];
    const currentTab = paths.indexOf(location.pathname);

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <>
            <AppBar position="fixed" sx={{ background: "#2D2C95", width: "100%" }}>
                <Toolbar>
                    {/* Tabs ด้านซ้าย */}
                    <Tabs
                        value={currentTab === -1 ? 0 : currentTab}
                        onChange={(_, newValue) => navigate(paths[newValue])}
                        textColor="inherit"
                        indicatorColor="secondary"
                    >
                        <Tab label="โครงงาน" />
                        <Tab label="บันทึกความก้าวหน้า" />
                        <Tab label="Profile" />
                    </Tabs>

                    {/* ดันปุ่มไปขวาสุด */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* ปุ่ม Logout */}
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Spacer กันทับเนื้อหา */}
            <Toolbar />
        </>
    );
}

export default Navbar;
