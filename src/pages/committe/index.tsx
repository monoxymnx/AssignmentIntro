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
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

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
    progress: "100%",
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
];

export default function TableForCommitte() {
  const [filter, setFilter] = useState("ทั้งหมด");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: "#f5f7ff", minHeight: "100vh", py: 6 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              borderRadius: "16px",
              p: 3,
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 2, color: "#2D2C95" }}
              align="left"
            >
              รายการโครงงานสำหรับกรรมการ
            </Typography>

            {/* Dropdown Filter */}
            <Box mb={3}>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: "10px",
                  px: 2,
                  minWidth: 150,
                }}
              >
                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                <MenuItem value="พิเศษ">พิเศษ</MenuItem>
                <MenuItem value="ทั่วไป">ทั่วไป</MenuItem>
              </Select>
            </Box>

            {/* Table */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#e8ecff" }}>
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
                      <TableCell align="center">{row.type || "-"}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.owner}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.progress}</TableCell>
                      <TableCell align="center">
                        <Link
                          href="#"
                          underline="hover"
                          sx={{ color: "#2D2C95", fontWeight: 500 }}
                          onClick={() => navigate("/student-project")}
                        >
                          ดูเพิ่มเติม
                        </Link>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color:
                            row.status === "ยังไม่ยื่นสอบ"
                              ? "#d32f2f"
                              : row.status === "รอลงนาม"
                              ? "#2e7d32"
                              : "#ed6c02",
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
