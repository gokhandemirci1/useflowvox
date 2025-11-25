# Site Çalışmıyor - Sorun Giderme

## Hızlı Kontrol Listesi

### 1. Vercel Deployment Durumunu Kontrol Edin

1. Vercel Dashboard'da projenize gidin
2. **Deployments** sekmesine tıklayın
3. En son deployment'ın durumunu kontrol edin:
   - ✅ **Ready** (Yeşil) → Deployment başarılı
   - ⚠️ **Building** → Hala build ediliyor, bekleyin
   - ❌ **Error** → Build hatası var, logları kontrol edin

### 2. Build Loglarını Kontrol Edin

1. Deployment'a tıklayın
2. **Build Logs** sekmesine gidin
3. Hata var mı kontrol edin

**Yaygın Build Hataları:**
- `Module not found` → Bağımlılık eksik
- `Syntax error` → Kod hatası
- `Build failed` → Genel build hatası

### 3. Siteyi Farklı Yollarla Test Edin

**Test 1: Vercel URL**
```
https://useflowvox.vercel.app
```
Bu çalışıyorsa → DNS sorunu
Bu çalışmıyorsa → Build/Deployment sorunu

**Test 2: www Domain**
```
https://www.useflowvox.com
```

**Test 3: Ana Domain**
```
https://useflowvox.com
```

**Test 4: Farklı Tarayıcı**
- Chrome, Firefox, Edge'de deneyin
- Gizli mod (Incognito) kullanın

### 4. DNS Yayılmasını Kontrol Edin

1. [whatsmydns.net](https://www.whatsmydns.net/#A/useflowvox.com) adresine gidin
2. `useflowvox.com` yazın
3. Tüm lokasyonlarda aynı IP görünmeli
4. Farklı IP'ler görünüyorsa → DNS henüz yayılmamış (24-48 saat bekleyin)

### 5. Tarayıcı Cache ve DNS Cache Temizleme

**Windows:**
```powershell
# DNS Cache temizle
ipconfig /flushdns
```

**Tarayıcı Cache:**
- Chrome: `Ctrl + Shift + Delete` → "Cached images and files" seç → Clear
- Firefox: `Ctrl + Shift + Delete` → "Cache" seç → Clear

### 6. React Router Sorunu Kontrolü

Eğer 404 hatası alıyorsanız, `vercel.json` dosyasının doğru olduğundan emin olun.

### 7. Console Hatalarını Kontrol Edin

1. Siteyi açın (F12)
2. **Console** sekmesine gidin
3. Kırmızı hatalar var mı kontrol edin
4. **Network** sekmesinde failed request'ler var mı kontrol edin

## Yaygın Sorunlar ve Çözümleri

### Sorun 1: "This site can't be reached"

**Olası Nedenler:**
- DNS henüz yayılmamış
- DNS kayıtları yanlış

**Çözüm:**
- 24-48 saat bekleyin
- DNS kayıtlarını tekrar kontrol edin
- `useflowvox.vercel.app` çalışıyorsa DNS sorunudur

### Sorun 2: "404 Not Found"

**Olası Nedenler:**
- React Router yapılandırması eksik
- `vercel.json` dosyası yok veya yanlış

**Çözüm:**
- `vercel.json` dosyasının projede olduğundan emin olun
- GitHub'a push edildiğinden emin olun

### Sorun 3: "SSL Certificate Error"

**Olası Nedenler:**
- SSL henüz oluşturulmamış
- DNS yanlış yapılandırılmış

**Çözüm:**
- Vercel'de SSL durumunu kontrol edin
- "Valid Configuration" olana kadar bekleyin

### Sorun 4: Site Boş Görünüyor / Beyaz Sayfa

**Olası Nedenler:**
- JavaScript hatası
- Build hatası
- Asset yolu sorunu

**Çözüm:**
- Browser console'u kontrol edin
- Build loglarını kontrol edin
- `vite.config.js` base path'i kontrol edin

## Manuel Test Adımları

### Adım 1: Vercel URL Testi
```bash
# Tarayıcıda açın
https://useflowvox.vercel.app
```

### Adım 2: DNS Testi
```bash
# Terminal'de
nslookup useflowvox.com
nslookup www.useflowvox.com
```

### Adım 3: Build Testi (Lokal)
```bash
npm run build
npm run preview
```

Eğer lokal build çalışıyorsa → Vercel deployment sorunu
Eğer lokal build çalışmıyorsa → Kod sorunu

## Acil Çözüm: Yeniden Deploy

1. Vercel Dashboard → Deployments
2. En son deployment'a tıklayın
3. **Redeploy** butonuna tıklayın
4. Bekleyin ve tekrar test edin

## Hala Çalışmıyorsa

1. **Vercel Support:** [vercel.com/support](https://vercel.com/support)
2. **Build Loglarını Paylaşın:** Hata mesajlarını screenshot ile
3. **Browser Console Loglarını Paylaşın:** F12 → Console → Screenshot

