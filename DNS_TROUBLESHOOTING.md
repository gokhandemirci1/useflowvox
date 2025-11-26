# DNS Sorun Giderme Rehberi

## Mevcut DNS Kayıtlarınız

Resimde görünen kayıtlar:
- A Record: `@` → `216.198.79.1`
- CNAME Record: `www` → `4a46f5429b3ab70f.vercel-dns-017.com.`

## Sorun: Vercel DNS Kayıtları Farklı Olabilir

Vercel, her domain için özel DNS kayıtları verir. Mevcut kayıtlarınız Vercel'den gelmemiş olabilir.

## Çözüm Adımları

### 1. Vercel'den Doğru DNS Kayıtlarını Alın

1. Vercel Dashboard'a gidin
2. Projenize tıklayın
3. **Settings** > **Domains** sekmesine gidin
4. `useflowvox.com` domain'inin yanında **DNS Configuration** veya **Configure** butonuna tıklayın
5. Vercel size şu kayıtları gösterecek:
   - **A Record** için IP adresi (genellikle `76.76.21.21` veya farklı bir IP)
   - **CNAME Record** için Vercel DNS adresi

### 2. Eski DNS Kayıtlarını Silin

Domain sağlayıcınızın DNS panelinde:
1. Mevcut A Record'u silin (`216.198.79.1`)
2. Mevcut CNAME Record'u silin (`4a46f5429b3ab70f.vercel-dns-017.com.`)

### 3. Vercel'den Gelen Yeni Kayıtları Ekleyin

Vercel'den aldığınız kayıtları ekleyin. Genellikle şöyle olur:

**A Record:**
```
Type: A
Host: @
Value: 76.76.21.21 (Vercel'in verdiği IP)
TTL: Automatic veya 3600
```

**CNAME Record:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com (veya Vercel'in verdiği değer)
TTL: Automatic veya 3600
```

### 4. Alternatif: Vercel Nameservers Kullanın

Eğer domain sağlayıcınız nameserver değişikliğine izin veriyorsa:

1. Vercel'de domain ayarlarına gidin
2. **Nameservers** bölümünü bulun
3. Vercel'in verdiği nameserver'ları kopyalayın (genellikle şöyle):
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

4. Domain sağlayıcınızda:
   - Nameserver ayarlarına gidin
   - Vercel nameserver'larını ekleyin
   - Bu durumda DNS kayıtlarını manuel eklemenize gerek kalmaz

## Kontrol Adımları

### DNS Yayılmasını Kontrol Edin

1. [whatsmydns.net](https://www.whatsmydns.net) adresine gidin
2. `useflowvox.com` domain'ini kontrol edin
3. A Record'un doğru IP'yi gösterdiğini kontrol edin

### Vercel'de Domain Durumunu Kontrol Edin

1. Vercel Dashboard > Settings > Domains
2. Domain'in yanında durum gösterilir:
   - ✅ **Valid Configuration**: DNS doğru ayarlanmış
   - ⚠️ **Invalid Configuration**: DNS kayıtları yanlış
   - ⏳ **Pending**: DNS yayılması bekleniyor (24-48 saat)

## Yaygın Sorunlar ve Çözümleri

### Sorun 1: "Invalid Configuration" Hatası

**Çözüm:**
- DNS kayıtlarının Vercel'den geldiğinden emin olun
- TTL değerini düşürün (3600 veya daha az)
- DNS kayıtlarını tekrar kontrol edin

### Sorun 2: Site Açılmıyor

**Çözüm:**
- DNS yayılması 24-48 saat sürebilir, bekleyin
- Tarayıcı cache'ini temizleyin (Ctrl+Shift+Delete)
- Farklı bir tarayıcı veya cihazdan deneyin
- `https://useflowvox.vercel.app` adresinin çalıştığını kontrol edin

### Sorun 3: SSL Sertifikası Aktif Değil

**Çözüm:**
- DNS kayıtları doğru ayarlandıktan sonra SSL otomatik aktif olur
- 1-2 saat bekleyin
- Vercel dashboard'da SSL durumunu kontrol edin

## Hızlı Test

Terminal'de şu komutu çalıştırarak DNS kayıtlarını kontrol edin:

```bash
# A Record kontrolü
nslookup useflowvox.com

# CNAME kontrolü  
nslookup www.useflowvox.com
```

Veya online araçlar:
- [mxtoolbox.com](https://mxtoolbox.com/DNSLookup.aspx)
- [dnschecker.org](https://dnschecker.org)

## Önemli Notlar

1. **DNS yayılması zaman alır**: Değişiklikler 24-48 saat içinde tüm dünyada yayılır
2. **TTL değeri**: Düşük TTL (3600) daha hızlı güncelleme sağlar
3. **Cache**: Tarayıcı ve DNS cache'leri eski kayıtları gösterebilir
4. **Vercel IP değişebilir**: Her domain için farklı IP olabilir, mutlaka Vercel'den alın

## Hala Çalışmıyorsa

1. Vercel Support'a başvurun: [vercel.com/support](https://vercel.com/support)
2. Domain sağlayıcınızın support'u ile iletişime geçin
3. DNS kayıtlarını ekran görüntüsü ile paylaşın


