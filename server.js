// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// ใช้ PORT จากระบบ (เวลาอยู่บน Render) ถ้าไม่มีให้ใช้ 3000 เวลา run ในเครื่อง
const PORT = process.env.PORT || 3000;

// ✅ เสิร์ฟไฟล์หน้าเว็บ (index.html, css, js ฯลฯ) จากโฟลเดอร์นี้เลย
app.use(express.static(path.join(__dirname)));

// เปิด CORS เผื่อในอนาคตแยก frontend/backed
app.use(cors());

// โฟลเดอร์เก็บรูป
const uploadsDir = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsDir));

// ถ้าไม่มีโฟลเดอร์ uploads ให้สร้าง
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ตั้งค่า multer สำหรับอัปโหลดรูป
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path
      .basename(file.originalname, ext)
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, "");
    cb(null, Date.now() + "-" + base + ext);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
    files: 10,
  },
});

// endpoint สำหรับอัปโหลดรูป
app.post("/upload", upload.array("images", 10), (req, res) => {
  const files = req.files || [];
  const urls = files.map((file) => {
    const relativePath = "/uploads/" + file.filename;
    const fullUrl =
      req.protocol + "://" + req.get("host") + relativePath;
    return fullUrl;
  });

  res.json({
    success: true,
    urls,
  });
});

// ถ้า path ไหนไม่แมตช์ (เช่น กด refresh) ให้เสิร์ฟ index.html กลับไป
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📂 Upload directory: ${uploadsDir}`);
});
