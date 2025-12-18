const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jadwal", (req, res) => {
  res.json({
    rute: [
      // PURWOKERTO ↔ JAKARTA
      { dari: "Purwokerto", tujuan: "Jakarta", jam: ["06:00", "08:00", "10:00", "12:00", "15:00", "18:00", "20:00"], nopol: "B 1234 XYZ", harga: 150000 },
      { dari: "Jakarta", tujuan: "Purwokerto", jam: ["05:00", "07:00", "09:00", "11:00", "14:00", "17:00", "21:00"], nopol: "R 8899 TGH", harga: 150000 },

      // YOGYAKARTA ↔ BANDUNG
      { dari: "Yogyakarta", tujuan: "Bandung", jam: ["06:30", "09:00", "12:00", "15:00", "18:30", "21:00"], nopol: "D 5678 ABC", harga: 180000 },
      { dari: "Bandung", tujuan: "Yogyakarta", jam: ["05:30", "08:00", "11:00", "14:00", "17:30", "20:00"], nopol: "AB 2211 KLM", harga: 180000 },

      // SEMARANG ↔ SURABAYA
      { dari: "Semarang", tujuan: "Surabaya", jam: ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00"], nopol: "L 9988 QWE", harga: 120000 },
      { dari: "Surabaya", tujuan: "Semarang", jam: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00"], nopol: "H 3344 ASD", harga: 120000 },

      // TAMBAHAN RUTE LAIN (BIAR LEBIH KAYA)
      { dari: "Solo", tujuan: "Jakarta", jam: ["06:00", "10:00", "14:00", "18:00"], nopol: "B 7788 UIO", harga: 200000 },
      { dari: "Jakarta", tujuan: "Solo", jam: ["07:00", "11:00", "15:00", "19:00"], nopol: "AD 4455 PQR", harga: 200000 },

      { dari: "Malang", tujuan: "Yogyakarta", jam: ["05:00", "09:00", "13:00", "17:00"], nopol: "N 1122 ZXC", harga: 160000 },
      { dari: "Yogyakarta", tujuan: "Malang", jam: ["06:00", "10:00", "14:00", "18:00"], nopol: "N 5566 VBN", harga: 160000 }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
