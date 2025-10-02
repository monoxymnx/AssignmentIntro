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
                    <Box sx={{ flexGrow: 1 }} />
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
            <Toolbar />
        </>
    );
}

export default Navbar;
