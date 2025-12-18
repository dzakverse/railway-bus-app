# Sistem Informasi Tiket Bus – PO.Budigirls

Aplikasi web untuk menampilkan informasi rute, jadwal keberangkatan, harga tiket, dan detail bus.  
Dibangun menggunakan **Node.js + Express**, dengan tampilan modern dan responsif.  
Aplikasi ini juga sudah **siap deploy** ke Railway atau Render.

---

## ✨ Fitur Utama

- Tampilan awal (Hero Section) dengan tombol **Lihat Jadwal**
- Form pemilihan rute dengan urutan wajib:
  1. Lokasi keberangkatan  
  2. Tujuan perjalanan  
  3. Jam keberangkatan  
- Informasi perjalanan otomatis muncul setelah jam dipilih
- Data rute dinamis dari API Express
- Footer informatif berisi kontak & informasi perusahaan
- Desain responsif dan mudah digunakan

---

## 🗂️ Struktur Folder

```
project/
│ package.json
│ server.js
└── public/
    │ index.html
    │ style.css
    │ script.js
```

---

## 🛠️ Teknologi yang Digunakan

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript DOM
- Railway (Deployment)

---

## 🚀 Cara Menjalankan di Lokal

1. Clone repository:
   ```
   git clone <url-repo-kamu>
   ```

2. Masuk ke folder project:
   ```
   cd project
   ```

3. Install dependency:
   ```
   npm install
   ```

4. Jalankan server:
   ```
   npm start
   ```

5. Buka di browser:
   ```
   http://localhost:3000
   ```

---

## 🌐 Endpoint API

### **GET /api/jadwal**

Mengembalikan daftar rute bus:

```json
{
  "rute": [
    {
      "dari": "Purwokerto",
      "tujuan": "Jakarta",
      "jam": ["06:00", "08:00", "10:00"],
      "nopol": "B 1234 XYZ",
      "harga": 150000
    }
  ]
}
```

---

## ☁️ Cara Deploy ke Railway

1. Upload project ke GitHub  
2. Masuk ke Railway → **New Project → Deploy from GitHub**  
3. Pilih repository  
4. Railway otomatis build & deploy  
5. Ambil URL publik dari halaman service

---
