Forex Trading Journal (Mini Project)

วิธีใช้งานแบบสรุป:

1) ติดตั้ง Node.js ก่อน (ถ้ายังไม่มี)
   ดาวน์โหลดจาก: https://nodejs.org/

2) เปิดโฟลเดอร์นี้ใน Terminal / CMD แล้วรัน:
   npm install

3) รัน server สำหรับอัปโหลดรูป:
   npm start
   หรือ
   node server.js

   ถ้าสำเร็จจะเห็นข้อความประมาณ:
   ✅ Server running on http://localhost:3000

4) เปิดไฟล์ index.html ใน browser (Chrome แนะนำ)
   - ดับเบิลคลิก index.html แล้วเลือกเปิดด้วย Chrome
   - หรือใช้ Live Server ของ VS Code ก็ได้

5) มุมขวาบนพิมพ์ชื่อผู้ใช้ (เช่น kung, test1) แล้วกด "เปลี่ยนผู้ใช้"
   จากนั้นลอง:
   - สร้างหัวข้อเทรด
   - เพิ่มรายการเทรด + จำนวนเงิน + อัปโหลดรูป (หลายรูปได้)
   - กดดูรูปเต็มหน้าจอ
   - ลบรูปทีละรูปจาก lightbox
   - แก้ไข/ลบรายการเทรด

ข้อมูลของแต่ละผู้ใช้จะถูกเก็บใน localStorage ของ browser แยกตามชื่อผู้ใช้
ไฟล์รูปจะถูกเซฟลงโฟลเดอร์ uploads/ ในเครื่องคุณเอง
