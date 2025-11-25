# CNAME DNS Kayıtları - Doğru Yapılandırma

## Vercel için CNAME Kayıtları

### Doğru CNAME Yapılandırması

Vercel'de domain ayarlarınızı kontrol edin ve şu kayıtları ekleyin:

#### 1. www Subdomain için CNAME

**Domain sağlayıcınızda (GoDaddy, Namecheap, vb.):**

```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600 (veya Automatic)
```

**VEYA Vercel'in size verdiği özel CNAME değeri:**
```
Type: CNAME
Host: www
Value: [Vercel'in verdiği özel CNAME değeri]
TTL: 3600
```

### 2. Ana Domain için A Record

Ana domain (`@`) için CNAME kullanılamaz, A Record kullanılmalı:

```
Type: A
Host: @
Value: 76.76.21.21 (veya Vercel'in verdiği IP)
TTL: 3600
```

## Vercel'den Doğru CNAME Değerini Alma

1. **Vercel Dashboard** → Projenize gidin
2. **Settings** → **Domains** sekmesine tıklayın
3. `useflowvox.com` domain'ine tıklayın
4. **Configuration** veya **DNS Configuration** sekmesine gidin
5. Vercel size şunu gösterecek:
   - **A Record** için IP adresi
   - **CNAME Record** için değer (genellikle `cname.vercel-dns.com` veya özel bir değer)

## DNS Kayıtlarını Kontrol Etme

### Online DNS Checker Kullanın

1. [whatsmydns.net](https://www.whatsmydns.net/#CNAME/www.useflowvox.com)
2. `www.useflowvox.com` için CNAME kontrolü yapın
3. Tüm lokasyonlarda aynı değer görünmeli

### Terminal ile Kontrol

```bash
# Windows PowerShell
nslookup -type=CNAME www.useflowvox.com

# Linux/Mac
dig CNAME www.useflowvox.com
```

## Yaygın Hatalar

### Hata 1: Yanlış CNAME Değeri

❌ **Yanlış:**
```
Type: CNAME
Host: www
Value: 4a46f5429b3ab70f.vercel-dns-017.com
```

✅ **Doğru:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

**Not:** Vercel'in verdiği özel CNAME değeri farklı olabilir, mutlaka Vercel dashboard'dan kontrol edin.

### Hata 2: Ana Domain için CNAME Kullanımı

❌ **Yanlış:**
```
Type: CNAME
Host: @
Value: cname.vercel-dns.com
```

✅ **Doğru:**
```
Type: A
Host: @
Value: 76.76.21.21
```

Ana domain (`@`) için mutlaka A Record kullanılmalı, CNAME kullanılamaz.

### Hata 3: TTL Değeri Çok Yüksek

❌ **Yanlış:**
```
TTL: 86400 (24 saat)
```

✅ **Doğru:**
```
TTL: 3600 (1 saat) veya Automatic
```

Düşük TTL değeri daha hızlı güncelleme sağlar.

## Adım Adım Düzeltme

### Adım 1: Mevcut Kayıtları Silin

Domain sağlayıcınızın DNS panelinde:
1. Mevcut CNAME kaydını bulun (`www` için)
2. Silin veya düzenleyin

### Adım 2: Vercel'den Doğru Değerleri Alın

1. Vercel Dashboard → Settings → Domains
2. Domain'e tıklayın → Configuration
3. CNAME değerini kopyalayın

### Adım 3: Yeni Kayıtları Ekleyin

Domain sağlayıcınızda:
1. **CNAME Record** ekleyin:
   - Host: `www`
   - Value: Vercel'den aldığınız değer
   - TTL: `3600` veya `Automatic`

2. **A Record** ekleyin (eğer yoksa):
   - Host: `@`
   - Value: Vercel'den aldığınız IP (genellikle `76.76.21.21`)
   - TTL: `3600` veya `Automatic`

### Adım 4: Bekleyin ve Kontrol Edin

1. **24-48 saat bekleyin** (DNS yayılması)
2. [whatsmydns.net](https://www.whatsmydns.net) ile kontrol edin
3. Tüm lokasyonlarda aynı değer görünmeli

## Hızlı Test

```bash
# CNAME kontrolü
nslookup -type=CNAME www.useflowvox.com

# A Record kontrolü
nslookup useflowvox.com
```

## Önemli Notlar

1. **CNAME sadece subdomain için:** `www` için CNAME, ana domain için A Record
2. **Vercel'in verdiği değerleri kullanın:** Her domain için farklı olabilir
3. **DNS yayılması zaman alır:** 24-48 saat sürebilir
4. **TTL değeri:** Düşük TTL (3600) daha hızlı güncelleme sağlar

## Hala Çalışmıyorsa

1. Vercel Support: [vercel.com/support](https://vercel.com/support)
2. Domain sağlayıcınızın support'u ile iletişime geçin
3. DNS kayıtlarını screenshot ile paylaşın

