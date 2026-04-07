# Net Worth Tracker

**Kalkulator net worth sederhana untuk menghitung total aset, utang, dan kekayaan bersih secara realtime.**

Catat aset, hitung utang, lalu lihat posisi keuanganmu dalam satu layar. Semua data tersimpan di browser kamu dan tidak dikirim ke server manapun.

---

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Keamanan & Privasi](#keamanan--privasi)
- [Cara Menggunakan](#cara-menggunakan)
- [Fitur Mobile](#fitur-mobile)
- [Penyimpanan Data](#penyimpanan-data)
- [Format Kategori](#format-kategori)
- [Riwayat & Proyeksi](#riwayat--proyeksi)
- [Troubleshooting](#troubleshooting)
- [Browser Support](#browser-support)

---

## 🎯 Fitur Utama

### Perhitungan Realtime
- **Hitung otomatis** total aset, utang, dan net worth saat kamu ketik
- **Update instan** - tidak perlu klik tombol hitung
- **Breakdown komposisi** - lihat berapa persen setiap kategori dari total

### Kategorisasi Fleksibel
- Buat kategori custom sesuai kebutuhan (bukan template kaku)
- Subaset untuk kategori - pisahkan misalnya "Saham" dan "Reksadana" dalam kategori "Investasi"
- Kelompok aset dan utang terpisah untuk kemudahan tracking

### Target & Proyeksi
- Set target net worth yang ingin dicapai
- Lihat persentase progress menuju target
- Proyeksi dengan growth rate - estimasi kapan target tercapai
- Visual progress bar untuk motivasi

### Prioritas Utang
- Prioritas eksplisit untuk utang (1, 2, 3, dst)
- Atur urutan pembayaran yang strategis
- Lihat utang dalam daftar berdasarkan prioritas

### Profil & Fokus
- Template profil siap pakai (Minimalis, Standar, Komprehensif, Professional)
- Mask mode untuk privasi (sembunyikan angka sensitif)
- Fokus pada kategori tertentu untuk simplifikasi tampilan

### Riwayat & Tracking
- Simpan snapshot net worth per bulan/periode
- Bandingkan posisi keuangan dari waktu ke waktu
- Lihat tren perubahan aset dan utang
- Highlight pencapaian milestone

### Tools & Data Management
- Import/export data dalam format JSON
- Reset all data dengan safety warning
- Download data untuk backup offline
- Private mode (session storage) untuk privasi lebih

---

## 🔒 Keamanan & Privasi

### ✅ Yang Aman
- **Semua data di browser lokal** - tidak ada server eksternal
- **Tidak ada koneksi internet** untuk data keuangan
- **Tidak ada cloud sync** - data tetap di perangkatmu
- **Tidak ada tracking** atau analytics data keuangan
- **Tidak ada cookie** untuk sharing data

### ⚠️ Yang Perlu Diperhatikan
1. **Perangkat Bersama**: Jika perangkat digunakan banyak orang, data akan terlihat
   - Gunakan Private Mode untuk sesi sementara
   - Clear browser data jika khawatir

2. **Browser Security**: Data tersimpan di localStorage browser
   - Jaga password/PIN perangkat tetap aman
   - Jangan buka di public WiFi dengan akun lokal terbuka

3. **Backup Manual**: Browser bisa clear data jika:
   - Cache dibersihkan
   - Browser di-uninstall
   - Storage quota penuh
   - Jangan lupa export/backup data secara berkala

### Privacy Notice
Aplikasi ini ditampilkan pada pembukaan pertama untuk mengingatkan pengguna tentang keamanan data.

---

## 📱 Cara Menggunakan

### 1. Mulai Cepat
1. Buka aplikasi
2. Klik **"Isi contoh"** untuk melihat demo data
3. Klik **"Reset data"** jika ingin mulai bersih

### 2. Input Data Aset
1. Buka section **"Input Keuangan"**
2. Scroll ke kategori **Aset**
3. Ketik nama subaset (contoh: "Tabungan Bank A", "Laptop", "Mobil")
4. Input jumlah nominal
5. Nilai akan otomatis terhitung dan ditambah ke total aset

### 3. Input Data Utang
1. Sama seperti aset, tapi di section **Utang**
2. Opsional: Set **Prioritas** (1, 2, 3, dst) untuk urutan pembayaran
3. Net worth = Total Aset - Total Utang (otomatis terhitung)

### 4. Set Target
1. Buka **"Target & Proyeksi"**
2. Input **Target Net Worth** yang ingin dicapai
3. Input **Growth Rate (%)** per bulan
4. Lihat estimasi berapa bulan untuk capai target

### 5. Profil & Fokus
1. Buka **"Profil & Fokus"**
2. Pilih template yang sesuai (Minimalis, Standar, Komprehensif, Professional)
3. Aktifkan **Mask Mode** jika ingin sembunyikan angka
4. Pilih kategori fokus untuk tampilan simplified

### 6. Lihat Komposisi
- **"Komposisi Aset"** - persentase setiap kategori aset
- **"Posisi Aset vs Utang"** - pie chart aset vs utang
- **"Prioritas Utang"** - daftar utang berdasarkan prioritas

### 7. Tracking Riwayat
1. Buka **"Riwayat"**
2. Klik **"Catat Snapshot"** untuk simpan posisi saat ini
3. Lihat perubahan net worth dari waktu ke waktu
4. Bandingkan dengan periode sebelumnya

---

## 📱 Fitur Mobile

### Navigasi Mobile-Friendly
- **Hamburger Menu** (≡ icon top-left) - akses quick navigation
- **Jump Links** - lompat langsung ke setiap section
- **Auto-close Drawer** - menu otomatis tutup setelah klik link

### Responsive Design
- Optimal layout untuk mobile, tablet, dan desktop
- Touch-friendly buttons dan input
- Smooth scrolling ke section target
- Sticky topbar dengan hamburger menu

### One-Screen Navigation
Tidak perlu scroll jauh - gunakan hamburger menu untuk:
- 🏠 Net Worth Tracker (ke hero)
- 📝 Input Keuangan
- 👤 Profil & Fokus
- 📊 Perencanaan
- 📈 Komposisi Aset
- ⚖️ Posisi Aset vs Utang
- ⚠️ Prioritas Utang
- 🎯 Target & Proyeksi
- 📅 Riwayat
- ⚙️ Tools & Data

---

## 💾 Penyimpanan Data

### Local Storage (Default)
- **Persisten** - data tersimpan permanant hingga di-clear manual
- **Otomatis save** - perubahan otomatis disimpan tanpa klik tombol
- **Kapasitas** - biasanya 5-10MB per domain
- **Auto-backup** - semua perubahan auto-save ke localStorage

### Private/Session Mode
- **Sementara** - data hanya berlaku untuk sesi browser saat ini
- **Auto-clear** - terhapus saat tab ditutup
- **Keamanan** - lebih privat untuk perangkat bersama
- Aktifkan di **"Tools & Data"** → toggle "Private Mode"

### Export Data
- Klik **"Download Data"** untuk export JSON
- Bisa digunakan untuk:
  - Backup offline
  - Share data (hati-hati privasi!)
  - Transfer ke perangkat lain
  - Arsip riwayat

### Import Data
- Klik **"Pilih File"** dan select JSON export sebelumnya
- Data existing akan **REPLACE** dengan data dari file
- Gunakan untuk restore backup atau migrasi data

---

## 📊 Format Kategori

### Kategori Bawaan

#### Aset
- **Kas & Bank**: Tabungan, rekening giro, cash on hand
- **Investasi**: Saham, reksadana, bonds, cryptocurrency
- **Properti**: Rumah, tanah, gedung (use fair value)
- **Kendaraan**: Mobil, motor, sepeda
- **Koleksi & Barang**: Perhiasan, seni, koleksi bernilai
- **Lainnya**: Pinjaman ke orang lain, dll

#### Utang
- **Utang Bank**: KPR, KTP, Kredit Mobil
- **Utang Pribadi**: Utang ke teman/keluarga
- **Kartu Kredit**: Outstanding CC balance
- **Cicilan Lainnya**: Gadai, cicilan toko, dll
- **Utang Lainnya**: Pajak, denda, dll

### Custom Kategori
Bisa tambah kategori sendiri sesuai kebutuhan. Kategori otomatis muncul saat ada sub-item.

### Cara Kerja
- Setiap sub-item (misalnya "Tabungan BCA") masuk dalam kategori
- Kategori otomatis sum semua sub-itemnya
- Ubah kategori dengan prefix naming (contoh: "Properti > Rumah Jakarta")

---

## 📈 Riwayat & Proyeksi

### Snapshot Riwayat
- **Catat Snapshot** - save net worth di suatu waktu
- **Highlight Label** - berikan label custom (misal "Bonus tahun ini")
- **Timestamp** - otomatis catat tanggal/waktu
- **Unlimited snapshots** - simpan sebanyak mungkin

### Analisis Trend
- **Lihat perubahan** net worth period ke period
- **Highlight change** - lihat pertumbuhan atau penurunan
- **Clear History** - reset semua riwayat jika perlu

### Target Proyeksi
- Input **Monthly Growth Rate (%)** berdasarkan planning
- Auto-calculate berapa bulan sampai **Target Net Worth**
- Update otomatis saat net worth atau target berubah
- Gunakan untuk motivasi dan planning jangka panjang

---

## 🛠️ Tools & Data Management

### Import/Export
- **Download Data** - export ke JSON (backup offline)
- **Import Data** - restore dari JSON sebelumnya
- **Safety confirmation** - warning sebelum replace data

### Reset
- **Reset All Data** - hapus semua data dengan warning
- **Use with caution** - tidak bisa undo!
- Pastikan backup dulu jika ingin keep data

### Private Mode
- Toggle antara Local Storage dan Session Storage
- **Session** = auto-clear saat tab tutup (lebih privat)
- **Local** = persist sampai manual clear (lebih praktis)

### Mask Mode
- Toggle di **"Profil & Fokus"**
- Sembunyikan nilai nominal (show "*" instead)
- Tetap lihat persentase dan tren
- Berguna untuk screenshot/share dengan orang lain

---

## ⚡ Troubleshooting

### Data Tidak Muncul
**Masalah**: Input tapi tidak muncul di dashboard  
**Solusi**:
- Pastikan sudah input nama dan nominal
- Refresh browser (Ctrl+R / Cmd+R)
- Cek localStorage tidak full
- Jika masih error, clear cache dan refresh

### Kategori Tidak Muncul
**Masalah**: Kategori baru tidak keluar  
**Solusi**:
- Kategori otomatis muncul saat input sub-item
- Refresh page jika belum muncul
- Pastikan naming format correct

### Data Hilang Setelah Clear Browser
**Masalah**: Semua data hilang  
**Solusi**:
- Restore dari JSON export jika ada backup
- Klik "Import Data" dan pilih file backup
- Lebih hati-hati clearing browser data di masa depan

### Performance Lambat
**Masalah**: Interface lag atau slow saat input banyak data  
**Solusi**:
- Gunakan Profile yang lebih sederhana (Minimalis)
- Aktifkan Fokus Mode untuk kategori tertentu
- Clear browser cache
- Update browser ke versi terbaru

### Snapshot Tidak Tersimpan
**Masalah**: Catat snapshot tapi tidak muncul di riwayat  
**Solusi**:
- Cek localStorage support di browser
- Refresh page setelah catat snapshot
- Pastikan browser tidak sedang private mode jika pakai local storage

---

## 🌐 Browser Support

### Supported Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Requirements
- **localStorage/sessionStorage** support
- **JavaScript** enabled
- **CSS Grid & Flexbox** support
- **No plugins** needed

### Best Experience
- Desktop: Chrome atau Firefox (terbaru)
- Mobile: Native browser (Safari iOS, Chrome Android)
- Screen: Minimal 320px width (mobile) hingga 4K desktop

---

## 🚀 Tips & Tricks

### Produktivitas
- **Gunakan template profil** sesuai kebutuhan detail
- **Set target realistis** dengan growth rate yang achievable
- **Review riwayat** setiap bulan untuk motivasi
- **Export data** secara berkala untuk backup

### Akurasi Data
- **Update regular** - jangan biarkan data lama
- **Fair value property** - gunakan harga pasar, bukan beli
- **Include hidden assets** - jangan lupa aset kecil
- **Realistic priority utang** - prioritas yang logis untuk payoff

### Privacy
- **Gunakan Private Mode** jika di perangkat bersama
- **Backup regular** - export data setiap bulan
- **Clear session** saat selesai pakai di public device
- **Jangan share screenshot** dengan nominal sensitif

---

## 📞 Support & Feedback

Aplikasi ini dibangun untuk membantu tracking keuangan pribadi. Jika ada pertanyaan atau saran, silakan review dokumentasi di atas atau check code di repository.

**Ingat**: Semua data tetap aman di perangkatmu. Tidak ada data yang dikirim ke server manapun.

---

## 📜 License

Aplikasi ini dibuat untuk tracking keuangan personal. Gunakan sesuai kebutuhan.

---

**Version**: 1.0  
**Last Updated**: 2026-04-07  
**Language**: Bahasa Indonesia (Indonesian)
