
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
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Dropdown Filter */}
        <Box mb={2}>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{ bgcolor: "#f5f5f5", borderRadius: "10px", px: 2 }}
          >
            <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
            <MenuItem value="พิเศษ">พิเศษ</MenuItem>
            <MenuItem value="ทั่วไป">ทั่วไป</MenuItem>
          </Select>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f0f4ff" }}>
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
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.owner}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.progress}</TableCell>
                  <TableCell align="center">
                    <Link href="#" underline="hover" sx={{ color: "blue" }} onClick={() => navigate("/instructor-projectinfo")}>
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
                            : "orange",
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
      </Container>
    </>
  );
}
