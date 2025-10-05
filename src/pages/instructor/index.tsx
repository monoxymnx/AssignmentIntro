import {
  Box,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Select,
  MenuItem,
  Pagination,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

interface Project {
  id: number;
  type: string;
  name: string;
  owner: string;
  date: string;
  progress: string;
  status: string;
}

const mockData: Project[] = [
  {
    id: 1,
    type: "พิเศษ",
    name: "ระบบรักษาความปลอดภัย",
    owner: "ปุลินภัทร",
    date: "2/4/68",
    progress: "20%",
    status: "ยังไม่ยื่นสอบ",
  },
  {
    id: 2,
    type: "",
    name: "ระบบรักษาความสะอาด",
    owner: "ศุภนิดา",
    date: "21/6/68",
    progress: "100%",
    status: "รอลงนาม",
  },
  {
    id: 3,
    type: "",
    name: "ระบบรักษาความสุข",
    owner: "วัจน์กร",
    date: "25/7/68",
    progress: "100%",
    status: "รอสอบ",
  },
  {
    id: 4,
    type: "",
    name: "ซุปเปอร์ถังขยะ",
    owner: "วีรชัยะ",
    date: "21/6/68",
    progress: "50%",
    status: "ยังไม่ยื่นสอบ",
  },
  {
    id: 5,
    type: "",
    name: "เครื่องตรวจจับคนเข้าออก",
    owner: "ศุภกิติ",
    date: "25/7/68",
    progress: "79%",
    status: "ยังไม่ยื่นสอบ",
  },
];

export default function TableForInstructor() {
  const [filter, setFilter] = useState("ทั้งหมด");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* 🔹 พื้นหลังทั้งหน้า */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5f7ff", // โทนเดียวกับ ProjectInfoForCommit
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* 🔹 กล่องหลัก (Paper) */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: "20px",
              backgroundColor: "#ffffff",
            }}
          >
            {/* หัวเรื่อง */}
            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 3, fontWeight: "bold", color: "#2D2C95" }}
            >
              ตารางข้อมูลโครงงานนักศึกษา
            </Typography>

            {/* Dropdown Filter */}
            <Box mb={2} display="flex" justifyContent="flex-end">
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: "10px",
                  px: 2,
                  minWidth: 120,
                }}
              >
                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                <MenuItem value="พิเศษ">พิเศษ</MenuItem>
                <MenuItem value="ทั่วไป">ทั่วไป</MenuItem>
              </Select>
            </Box>

            {/* ตารางข้อมูล */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#e8ebff" }}>
                    <TableCell align="center">ลำดับ</TableCell>
                    <TableCell align="center">ประเภทโครงงาน</TableCell>
                    <TableCell align="center">ชื่อโครงงาน</TableCell>
                    <TableCell align="center">รายชื่อผู้จัดทำ</TableCell>
                    <TableCell align="center">วันที่เพิ่ม</TableCell>
                    <TableCell align="center">% ความก้าวหน้า</TableCell>
                    <TableCell align="center">รายละเอียด</TableCell>
                    <TableCell align="center">สถานะ</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {mockData.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.owner}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.progress}</TableCell>
                      <TableCell align="center">
                        <Link
                          href="#"
                          underline="hover"
                          sx={{ color: "#2D2C95", fontWeight: 500 }}
                          onClick={() => navigate("/instructor-projectinfo")}
                        >
                          ดูเพิ่มเติม
                        </Link>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color:
                            row.status === "ยังไม่ยื่นสอบ"
                              ? "red"
                              : row.status === "รอลงนาม"
                              ? "green"
                              : "#f0ad00",
                          fontWeight: 600,
                        }}
                      >
                        {row.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <Box display="flex" justifyContent="center" mt={3}>
              <Pagination count={10} page={1} color="primary" />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
