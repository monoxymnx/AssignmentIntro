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
} from "@mui/material";
import Navbar from "../../components/Navbar";

export default function ProjectPage() {
    return (
        <>
            {/* Navbar แยกออกมาไม่อยู่ใน Container */}
            <Navbar />

            {/* เนื้อหาเต็มจอ */}
            <Container maxWidth={false} disableGutters>
                <Box p={4}>
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                    >
                        รายละเอียดโครงงานที่ลงทะเบียนไว้
                    </Typography>

                    <Box ml={10} mb={4}>
                        <Typography>ชื่อโครงงาน : ฝนกระเทียม</Typography>
                        <Typography>ประเภทโครงงาน : ทดลอง</Typography>
                        <Typography>
                            ชื่อที่ปรึกษาโครงงาน : รศ.ปุณจันทร์ ประสิทธิยอด (ยังไม่ยืนยัน)
                        </Typography>
                        <Typography>วันสอบโครงงาน : -</Typography>
                        <Typography>
                            สถานะโครงงาน : เกือบผ่าน{" "}
                            <Chip label="ยังไม่ตรวจสอบ" size="small" color="info" />
                        </Typography>
                    </Box>

                    {/* ส่วนหัวตาราง */}
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                    >
                        สถานะโครงงานที่ส่งความก้าวหน้า
                    </Typography>

                    {/* ตาราง */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>สัปดาห์ที่</TableCell>
                                    <TableCell>วันที่ส่งความก้าวหน้า</TableCell>
                                    <TableCell>% ความก้าวหน้า</TableCell>
                                    <TableCell>รายละเอียด</TableCell>
                                    <TableCell>ไฟล์งาน</TableCell>
                                    <TableCell>สถานะ</TableCell>
                                    <TableCell>ดูคอมเม้นต์</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>อาจารย์ที่ปรึกษา กลับไปแก้ส่วนนี้มาใหม่</TableCell>
                                    <TableCell>อาจารย์ประจำภาค</TableCell>
                                    <TableCell>
                                        <Chip label="ผ่าน" color="success" size="small" />
                                    </TableCell>
                                    <TableCell>สู้ๆ นศ</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>
                                        <Chip label="ผ่าน" color="success" size="small" />
                                    </TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* ปุ่ม
                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2" mb={1}>
                            ปุ่มนี้จะขึ้นก็ต่อเมื่อความก้าวหน้า 100%
                        </Typography>
                        <Button variant="contained" color="primary">
                            ยื่นสอบโครงงาน
                        </Button>
                    </Box> */}
                </Box>
            </Container>
        </>
    );
}
