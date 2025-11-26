# CNAME Sorunu Çözümü

## Durum
- ✅ A Record çalışıyor (`useflowvox.com` açılıyor)
- ❌ CNAME çalışmıyor (`www.useflowvox.com` açılmıyor)

## Çözüm Adımları

### Adım 1: Vercel'den Doğru CNAME Değerini Alın

1. **Vercel Dashboard** → Projenize gidin
2. **Settings** → **Domains** sekmesine tıklayın
3. `www.useflowvox.com` domain'ine tıklayın (veya `useflowvox.com` → Configuration)
4. **Configuration** veya **DNS Configuration** sekmesine gidin
5. CNAME için gösterilen değeri kopyalayın

**Vercel genellikle şunlardan birini gösterir:**
- `cname.vercel-dns.com`
- `[özel-hash].vercel-dns.com` (her domain için farklı)

### Adım 2: Domain Sağlayıcınızda CNAME'i Düzeltin

Domain sağlayıcınızın DNS panelinde (GoDaddy, Namecheap, vb.):

1. **Mevcut CNAME kaydını bulun** (`www` için)
2. **Silin veya düzenleyin**
3. **Yeni CNAME kaydı ekleyin:**

```
Type: CNAME
Host: www
Value: [Vercel'den aldığınız değer]
TTL: 3600 veya Automatic
```

**ÖNEMLİ:**
- Host kısmına sadece `www` yazın (nokta veya domain adı eklemeyin)
- Value kısmına Vercel'den aldığınız tam değeri yazın
- Sonunda nokta (.) varsa kaldırın veya olduğu gibi bırakın (sağlayıcıya göre değişir)

### Adım 3: Alternatif Çözüm - A Record Kullanın

Eğer CNAME çalışmıyorsa, `www` için de A Record kullanabilirsiniz:

1. Domain sağlayıcınızda CNAME'i silin
2. Yeni A Record ekleyin:

```
Type: A
Host: www
Value: [A Record ile aynı IP - genellikle 76.76.21.21]
TTL: 3600
```

**Not:** Bu yöntem çalışır ama CNAME daha esnek olduğu için tercih edilir.

### Adım 4: Bekleyin ve Kontrol Edin

1. **DNS yayılması 1-24 saat sürebilir**
2. Kontrol edin: [whatsmydns.net](https://www.whatsmydns.net/#CNAME/www.useflowvox.com)
3. Tüm lokasyonlarda aynı değer görünmeli

## Yaygın CNAME Hataları

### Hata 1: Host Kısmı Yanlış

❌ **Yanlış:**
```
Host: www.useflowvox.com
```

✅ **Doğru:**
```
Host: www
```

### Hata 2: Value Kısmı Yanlış

❌ **Yanlış:**
```
Value: vercel-dns.com
Value: www.vercel-dns.com
```

✅ **Doğru:**
```
Value: cname.vercel-dns.com
Value: [Vercel'in verdiği özel değer]
```

### Hata 3: Sonunda Nokta (.)

Bazı sağlayıcılar sonunda nokta ister, bazıları istemez:

**Deneyin:**
```
Value: cname.vercel-dns.com
```
VEYA
```
Value: cname.vercel-dns.com.
```

### Hata 4: TTL Çok Yüksek

❌ **Yanlış:**
```
TTL: 86400 (24 saat)
```

✅ **Doğru:**
```
TTL: 3600 (1 saat) veya Automatic
```

## Hızlı Test

### Terminal ile Test

```bash
# Windows PowerShell
nslookup -type=CNAME www.useflowvox.com

# Linux/Mac
dig CNAME www.useflowvox.com
```

**Beklenen Sonuç:**
```
www.useflowvox.com canonical name = cname.vercel-dns.com
```

### Online Test

1. [whatsmydns.net](https://www.whatsmydns.net/#CNAME/www.useflowvox.com)
2. `www.useflowvox.com` için CNAME kontrolü yapın
3. Tüm lokasyonlarda aynı değer görünmeli

## Vercel'de www Yönlendirmesi

Vercel otomatik olarak `useflowvox.com` → `www.useflowvox.com` yönlendirmesi yapabilir. Bu durumda:

1. Vercel Dashboard → Settings → Domains
2. `useflowvox.com` domain'ine tıklayın
3. **Redirect** ayarlarını kontrol edin
4. Gerekirse `www.useflowvox.com`'a yönlendirme ekleyin

## Hala Çalışmıyorsa

1. **Domain sağlayıcınızın support'u ile iletişime geçin**
2. **CNAME kaydını screenshot ile paylaşın**
3. **Vercel Support:** [vercel.com/support](https://vercel.com/support)

## Önemli Notlar

1. **CNAME sadece subdomain için:** `www` için CNAME, ana domain için A Record
2. **Vercel'in verdiği değeri kullanın:** Her domain için farklı olabilir
3. **DNS yayılması zaman alır:** 1-24 saat sürebilir
4. **TTL değeri:** Düşük TTL (3600) daha hızlı güncelleme sağlar




