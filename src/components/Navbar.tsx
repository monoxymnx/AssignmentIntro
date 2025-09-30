import React from "react";
import {
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Typography,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // mapping path -> tab index
    const paths = ["/project-info", "/project-update", "/profile"];
    const currentTab = paths.indexOf(location.pathname);

    return (
        <AppBar position="static" sx={{ background: "#2D2C95" }}>
            <Toolbar>

                <Tabs
                    value={currentTab === -1 ? 0 : currentTab}
                    onChange={(_, newValue) => navigate(paths[newValue])}
                    textColor="inherit"
                    indicatorColor="secondary"
                >
                    <Tab label="โครงงาน"  onClick={() => navigate("/project-info")}/>
                    <Tab label="บันทึกความก้าวหน้า" onClick={() => navigate("/project-update")} />
                    <Tab label="Profile" onClick={() => navigate("/profile")} />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
