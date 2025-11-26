# ERR_CONNECTION_TIMED_OUT Hatası Çözümü

## Hata Açıklaması
"ERR_CONNECTION_TIMED_OUT" hatası, tarayıcının sunucuya ulaşamadığı anlamına gelir.

## Hemen Kontrol Edin

### 1. Vercel URL Testi (EN ÖNEMLİ!)

Önce şu adresi tarayıcıda açın:
```
https://useflowvox.vercel.app
```

**Sonuç:**
- ✅ **Çalışıyorsa** → DNS sorunu (A Record IP'si yanlış veya henüz yayılmamış)
- ❌ **Çalışmıyorsa** → Deployment/Build sorunu

### 2. Vercel Deployment Durumu

1. Vercel Dashboard → Projenize gidin
2. **Deployments** sekmesine tıklayın
3. En son deployment'ın durumunu kontrol edin:
   - ✅ **Ready** (Yeşil) → Deployment başarılı
   - ❌ **Error** (Kırmızı) → Build hatası var
   - ⏳ **Building** → Hala build ediliyor

## Çözüm Adımları

### Çözüm 1: DNS A Record IP'sini Kontrol Edin

Eğer `useflowvox.vercel.app` çalışıyorsa ama `useflowvox.com` çalışmıyorsa:

1. **Vercel Dashboard** → Settings → Domains
2. `useflowvox.com` domain'ine tıklayın
3. **Configuration** sekmesine gidin
4. **A Record için IP adresini** kopyalayın

5. **Domain sağlayıcınızın DNS panelinde:**
   - Mevcut A Record'u kontrol edin
   - IP adresinin Vercel'den aldığınız IP ile aynı olduğundan emin olun
   - Farklıysa düzeltin:

```
Type: A
Host: @
Value: [Vercel'den aldığınız IP - genellikle 76.76.21.21]
TTL: 3600
```

### Çözüm 2: DNS Yayılmasını Kontrol Edin

1. [whatsmydns.net](https://www.whatsmydns.net/#A/useflowvox.com) adresine gidin
2. `useflowvox.com` yazın
3. Tüm lokasyonlarda aynı IP görünmeli
4. Farklı IP'ler görünüyorsa → DNS henüz yayılmamış (24-48 saat bekleyin)

### Çözüm 3: DNS Cache Temizleme

**Windows:**
```powershell
ipconfig /flushdns
```

**Tarayıcı Cache:**
- Chrome: `Ctrl + Shift + Delete` → "Cached images and files" → Clear
- Firefox: `Ctrl + Shift + Delete` → "Cache" → Clear

### Çözüm 4: Farklı Yollarla Test Edin

1. **Farklı tarayıcı:** Chrome, Firefox, Edge
2. **Gizli mod:** `Ctrl + Shift + N`
3. **Farklı cihaz:** Telefon, tablet
4. **VPN:** Farklı lokasyondan test edin

### Çözüm 5: Build Hatası Varsa

Eğer Vercel'de deployment **Error** gösteriyorsa:

1. Deployment'a tıklayın
2. **Build Logs** sekmesine gidin
3. Hata mesajını okuyun
4. Lokal olarak test edin:
   ```bash
   npm run build
   ```

### Çözüm 6: Yeniden Deploy

1. Vercel Dashboard → Deployments
2. En son deployment'a tıklayın
3. **Redeploy** butonuna tıklayın
4. Bekleyin ve tekrar test edin

## Yaygın Sorunlar

### Sorun 1: Yanlış A Record IP'si

**Kontrol:**
```bash
nslookup useflowvox.com
```

**Beklenen:** Vercel'in IP'si görünmeli (genellikle `76.76.21.21`)

**Çözüm:** Domain sağlayıcınızda A Record IP'sini Vercel'den aldığınız IP ile değiştirin

### Sorun 2: DNS Henüz Yayılmamış

**Kontrol:** [whatsmydns.net](https://www.whatsmydns.net/#A/useflowvox.com)

**Çözüm:** 24-48 saat bekleyin, DNS yayılması zaman alır

### Sorun 3: Deployment Başarısız

**Kontrol:** Vercel Dashboard → Deployments → Build Logs

**Çözüm:** Build hatalarını düzeltin ve yeniden deploy edin

## Hızlı Test Komutları

### Windows PowerShell

```powershell
# DNS cache temizle
ipconfig /flushdns

# A Record kontrolü
nslookup useflowvox.com

# CNAME kontrolü
nslookup -type=CNAME www.useflowvox.com

# Ping testi (Vercel IP'sine)
ping 76.76.21.21
```

## Adım Adım Kontrol Listesi

- [ ] `https://useflowvox.vercel.app` çalışıyor mu?
- [ ] Vercel'de deployment durumu ne? (Ready/Error)
- [ ] A Record IP'si doğru mu? (Vercel'den kontrol edin)
- [ ] DNS yayılması tamamlandı mı? ([whatsmydns.net](https://www.whatsmydns.net))
- [ ] DNS cache temizlendi mi?
- [ ] Farklı tarayıcı/cihaz denendi mi?

## Hala Çalışmıyorsa

1. **Vercel Support:** [vercel.com/support](https://vercel.com/support)
2. **Domain sağlayıcınızın support'u** ile iletişime geçin
3. **Screenshot'lar paylaşın:**
   - Vercel deployment durumu
   - DNS kayıtları
   - Browser console hataları

## Önemli Notlar

1. **DNS yayılması 24-48 saat sürebilir**
2. **Vercel URL çalışıyorsa** → DNS sorunu
3. **Vercel URL çalışmıyorsa** → Build/Deployment sorunu
4. **A Record IP'si mutlaka Vercel'den alınmalı**


