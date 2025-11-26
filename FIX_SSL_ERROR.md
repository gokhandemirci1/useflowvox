# ERR_SSL_UNRECOGNIZED_NAME_ALERT Hatası Çözümü

## Hata Açıklaması
Bu hata, SSL sertifikasının domain adıyla eşleşmediği anlamına gelir. Genellikle CNAME kaydı yanlış veya SSL sertifikası henüz oluşturulmamıştır.

## Hemen Kontrol Edin

### 1. Ana Domain Testi

Önce ana domain'i test edin:
```
https://useflowvox.com
```

**Sonuç:**
- ✅ **Çalışıyorsa** → CNAME/SSL sorunu (www için)
- ❌ **Çalışmıyorsa** → Genel DNS/SSL sorunu

### 2. Vercel'de Domain Durumunu Kontrol Edin

1. Vercel Dashboard → Settings → Domains
2. `www.useflowvox.com` domain'ine tıklayın
3. Durumu kontrol edin:
   - ✅ **Valid Configuration** → DNS doğru, SSL bekleniyor
   - ⚠️ **Generating SSL Certificate** → SSL oluşturuluyor (5-15 dakika)
   - ❌ **Invalid Configuration** → DNS kayıtları yanlış

## Çözüm Adımları

### Çözüm 1: CNAME Kaydını Düzeltin

`www.useflowvox.com` için CNAME kaydı yanlış olabilir.

1. **Vercel Dashboard** → Settings → Domains
2. `www.useflowvox.com` domain'ine tıklayın
3. **Configuration** sekmesine gidin
4. **CNAME değerini** kopyalayın

5. **Domain sağlayıcınızın DNS panelinde:**
   - Mevcut CNAME kaydını bulun (`www` için)
   - Silin veya düzenleyin
   - Yeni CNAME ekleyin:

```
Type: CNAME
Host: www
Value: [Vercel'den aldığınız CNAME değeri]
TTL: 3600
```

**ÖNEMLİ:**
- Host: Sadece `www` (nokta veya domain adı eklemeyin)
- Value: Vercel'den aldığınız tam değer

### Çözüm 2: SSL Sertifikasının Oluşturulmasını Bekleyin

1. CNAME kaydını düzelttikten sonra
2. Vercel otomatik olarak SSL sertifikası oluşturur
3. **5-15 dakika bekleyin**
4. Vercel Dashboard'da "Generating SSL Certificate" → "Valid Configuration" olmalı

### Çözüm 3: Vercel'de Domain'i Yenileyin

1. Vercel Dashboard → Settings → Domains
2. `www.useflowvox.com` domain'ine tıklayın
3. **Refresh** butonuna tıklayın
4. Vercel DNS kayıtlarını tekrar kontrol edecek

### Çözüm 4: Alternatif - A Record Kullanın

CNAME çalışmıyorsa, `www` için de A Record kullanabilirsiniz:

```
Type: A
Host: www
Value: 216.198.79.1 (A Record ile aynı IP)
TTL: 3600
```

**Not:** Bu yöntem çalışır ama CNAME daha esnek olduğu için tercih edilir.

## Adım Adım Düzeltme

### Adım 1: Vercel'den CNAME Değerini Alın

1. Vercel Dashboard → Settings → Domains
2. `www.useflowvox.com` → Configuration
3. CNAME değerini kopyalayın

### Adım 2: DNS Panelinde Güncelleyin

1. Domain sağlayıcınızın DNS panelinde
2. Mevcut CNAME'i silin
3. Yeni CNAME ekleyin (Vercel'den aldığınız değerle)

### Adım 3: Bekleyin

1. **DNS yayılması:** 1-24 saat
2. **SSL oluşturulması:** 5-15 dakika
3. Vercel Dashboard'da durumu kontrol edin

### Adım 4: Test Edin

1. `https://www.useflowvox.com` adresini açın
2. SSL hatası kaybolmalı
3. Site çalışmalı

## Kontrol Listesi

- [ ] `https://useflowvox.com` çalışıyor mu? (Ana domain)
- [ ] Vercel'de `www.useflowvox.com` durumu ne?
- [ ] CNAME kaydı doğru mu? (Vercel'den kontrol)
- [ ] DNS yayılması tamamlandı mı? ([whatsmydns.net](https://www.whatsmydns.net/#CNAME/www.useflowvox.com))
- [ ] SSL sertifikası oluşturuldu mu? (Vercel Dashboard'da kontrol)

## Yaygın Hatalar

### Hata 1: CNAME Host Yanlış

❌ **Yanlış:**
```
Host: www.useflowvox.com
```

✅ **Doğru:**
```
Host: www
```

### Hata 2: CNAME Value Yanlış

❌ **Yanlış:**
```
Value: vercel-dns.com
```

✅ **Doğru:**
```
Value: [Vercel'den aldığınız tam değer]
```

### Hata 3: SSL Henüz Oluşturulmamış

**Çözüm:** 5-15 dakika bekleyin, Vercel otomatik oluşturur.

## Hızlı Test

### Terminal ile CNAME Kontrolü

```bash
# Windows PowerShell
nslookup -type=CNAME www.useflowvox.com

# Linux/Mac
dig CNAME www.useflowvox.com
```

**Beklenen Sonuç:**
```
www.useflowvox.com canonical name = [Vercel CNAME değeri]
```

### Online DNS Kontrolü

1. [whatsmydns.net](https://www.whatsmydns.net/#CNAME/www.useflowvox.com)
2. `www.useflowvox.com` için CNAME kontrolü
3. Tüm lokasyonlarda aynı değer görünmeli

## Önemli Notlar

1. **CNAME sadece subdomain için:** `www` için CNAME, ana domain için A Record
2. **SSL otomatik oluşturulur:** DNS doğru olduktan sonra 5-15 dakika
3. **DNS yayılması zaman alır:** 1-24 saat sürebilir
4. **Vercel'in verdiği değeri kullanın:** Her domain için farklı olabilir

## Hala Çalışmıyorsa

1. **Vercel Support:** [vercel.com/support](https://vercel.com/support)
2. **Domain sağlayıcınızın support'u** ile iletişime geçin
3. **Screenshot'lar paylaşın:**
   - Vercel domain durumu
   - DNS kayıtları
   - Browser console hataları


