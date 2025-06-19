# 🚀 Aplikasi Kompresi File

<div align="center">
  <img src="https://i.pinimg.com/originals/0c/8a/d9/0c8ad91e1c3bce47d4113c9bba63c57f.gif" alt="Animasi Kompresi File" width="700"/>
</div>

## ✨ Fitur-Fitur

<div align="center">
  <img src="https://i.pinimg.com/originals/e3/20/c1/e320c15d441957a2331d519f8c802120.gif" alt="Animasi Fitur" width="600"/>
</div>

- **💾 Dukungan Berbagai Jenis File**
  - Dokumen PDF (kompresi teroptimasi)
  - Gambar (JPG, PNG, WebP, BMP, GIF)
  - Dokumen Word (DOCX, DOC)
  - Jenis file lainnya dengan kompresi standar

- **⚡ Kompresi Cerdas**
  - Kompresi adaptif berdasarkan jenis file
  - Mengubah ukuran gambar besar dengan tetap menjaga kualitas
  - Optimasi PDF dengan menghapus metadata
  - Hanya menerapkan kompresi ketika benar-benar mengurangi ukuran file

- **🔄 Pelacakan Progres Secara Real-time**
  - Indikator progres unggah visual
  - Hasil kompresi terperinci
  - Statistik file-per-file

- **💻 Antarmuka Pengguna Modern**
  - Unggah file dengan drag and drop
  - Desain responsif untuk semua perangkat
  - Elemen animasi untuk pengalaman pengguna yang lebih baik

## 🛠️ Teknologi yang Digunakan

<div align="center">
  <img src="https://i.pinimg.com/originals/d9/48/79/d948798fecd706c7630a9fae1509400f.gif" alt="Animasi Teknologi" width="650"/>
</div>

### Frontend
- **React** - Library UI
- **JSZip** - Penanganan file ZIP di sisi klien
- **Axios** - Permintaan HTTP
- **React-Dropzone** - Fungsionalitas unggah file
- **File-Saver** - Penanganan unduhan

### Backend
- **Flask** - Framework web Python
- **Flask-CORS** - Pembagian sumber daya lintas asal
- **Pillow** - Pemrosesan gambar
- **PikePDF** - Optimasi PDF
- **ZLib** - Algoritma kompresi

## 📊 Metode Kompresi

<div align="center">
  <img src="https://i.pinimg.com/originals/07/b3/ee/07b3ee098f6e3caa13c424105cfe2293.gif" alt="Animasi Metode Kompresi" width="600"/>
</div>

### Kompresi PDF
- Kompresi aliran data
- Optimasi aliran objek
- Penghapusan metadata
- Kompresi aliran konten

### Kompresi Gambar
- Konversi format (bila bermanfaat)
- Pengurangan kualitas (dapat dikonfigurasi)
- Pengubahan ukuran untuk gambar besar
- Konversi mode untuk kompresi optimal

### Kompresi Dokumen
- Kompresi ZLib kustom dengan level maksimum
- Rekompresi ZIP untuk format yang sudah terkompresi

## 🚀 Memulai

### Prasyarat
- Node.js dan npm
- Python 3.8+

### Instalasi

#### Setup Frontend
```bash
# Navigasi ke direktori frontend
cd frontend

# Instal dependensi
npm install

# Mulai server pengembangan
npm start
```

#### Setup Backend
```bash
# Navigasi ke direktori backend
cd backend

# Buat dan aktifkan virtual environment (opsional tapi direkomendasikan)
python -m venv venv
source venv/bin/activate  # Pada Windows: venv\Scripts\activate

# Instal dependensi
pip install -r requirements.txt

# Mulai server Flask
python app.py
```

## 💡 Cara Kerja

<div align="center">
  <img src="https://i.pinimg.com/originals/0d/ac/06/0dac06a5332d13e2a4e2dc30ba0c6411.gif" alt="Animasi Cara Kerja" width="650"/>
</div>

1. **Unggah File**: Pengguna memilih atau melakukan drag and drop file ke aplikasi
2. **Pemrosesan**: File dikirim ke server backend
3. **Kompresi**: Setiap file dikompresi menggunakan algoritma optimal untuk jenisnya
4. **Hasil**: File terkompresi digabungkan dalam arsip ZIP dan dikirim kembali
5. **Analisis**: Pengguna menerima statistik kompresi terperinci untuk setiap file
6. **Unduh**: File ZIP terkompresi otomatis diunduh

## 🔍 Hasil Kompresi

Aplikasi menyediakan statistik terperinci untuk setiap file terkompresi:
- Nama file asli
- Ukuran file awal
- Ukuran file terkompresi
- Rasio kompresi
- Ruang yang dihemat

## 🙏 Ucapan Terima Kasih

- Teknik kompresi gambar terinspirasi dari praktik optimasi web modern
- Metodologi kompresi PDF berdasarkan dokumentasi library PikePDF
- Animasi UI dirancang dengan mempertimbangkan kinerja dan pengalaman pengguna

---

<div align="center">
  <img src="https://i.pinimg.com/originals/f6/c1/36/f6c1360c51af80c737307cad74dfc40e.gif" alt="Animasi Footer" width="400"/>
  <h3>Dikembangkan oleh Tim Squzeyy Compressor</h3>
  <p>© 2025 Squzeyy Compressor - Solusi Kompresi File Profesional</p>
</div>