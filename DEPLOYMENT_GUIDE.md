# FlowVox Site Deployment Rehberi

Bu rehber, sitenizi https://useflowvox.com adresine deploy etmek için adım adım talimatlar içerir.

## Yöntem 1: Vercel ile Deploy (Önerilen - En Kolay)

Vercel, React ve Vite projeleri için mükemmel bir hosting servisidir ve ücretsiz plan sunar.

### Adım 1: Vercel Hesabı Oluşturma

1. [https://vercel.com](https://vercel.com) adresine gidin
2. **Sign Up** butonuna tıklayın
3. **Continue with GitHub** seçeneğini seçin
4. GitHub hesabınızla giriş yapın ve izinleri onaylayın

### Adım 2: Projeyi Vercel'e Bağlama

1. Vercel dashboard'da **Add New...** > **Project** butonuna tıklayın
2. GitHub repository'lerinizden **useflowvox** projesini bulun
3. **Import** butonuna tıklayın

### Adım 3: Build Ayarları

Vercel otomatik olarak Vite projesini algılayacaktır, ancak kontrol edin:

- **Framework Preset**: Vite
- **Root Directory**: `./` (kök dizin)
- **Build Command**: `npm run build` (otomatik algılanır)
- **Output Directory**: `dist` (otomatik algılanır)
- **Install Command**: `npm install` (otomatik algılanır)

### Adım 4: Environment Variables (Gerekirse)

Eğer `.env` dosyası kullanıyorsanız:
1. **Environment Variables** bölümüne gidin
2. Gerekli değişkenleri ekleyin (örneğin: `VITE_GOOGLE_SHEETS_URL`)

### Adım 5: Deploy

1. **Deploy** butonuna tıklayın
2. Build işlemi başlayacak (2-3 dakika sürebilir)
3. Build tamamlandığında, siteniz otomatik olarak bir Vercel URL'sinde yayınlanacak
   - Örnek: `useflowvox.vercel.app`

### Adım 6: Custom Domain Ekleme (useflowvox.com)

1. Vercel dashboard'da projenize gidin
2. **Settings** > **Domains** sekmesine tıklayın
3. **Add Domain** butonuna tıklayın
4. `useflowvox.com` yazın ve **Add** butonuna tıklayın

### Adım 7: DNS Ayarları

Vercel size DNS kayıtlarını gösterecek. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) şu kayıtları ekleyin:

**Eğer domain'iniz zaten başka bir yerdeyse:**

1. Vercel'den verilen DNS kayıtlarını kopyalayın (genellikle şunlar):
   - **A Record**: `76.76.21.21` (Vercel IP)
   - **CNAME Record**: `cname.vercel-dns.com`

2. Domain sağlayıcınızın DNS ayarlarına gidin:
   - GoDaddy: Domain Manager > DNS Settings
   - Namecheap: Domain List > Manage > Advanced DNS
   - Google Domains: DNS > Custom Records

3. Şu kayıtları ekleyin:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: Auto
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Auto
   ```

**Eğer domain'i Vercel üzerinden satın alacaksanız:**

1. Vercel'de **Domains** > **Buy Domain** seçeneğini kullanın
2. `useflowvox.com` için fiyat kontrolü yapın
3. Satın alın ve otomatik olarak bağlanacaktır

### Adım 8: SSL Sertifikası

Vercel otomatik olarak ücretsiz SSL sertifikası sağlar (Let's Encrypt). Domain bağlandıktan birkaç dakika içinde HTTPS aktif olacaktır.

### Adım 9: Doğrulama

1. `https://useflowvox.com` adresini tarayıcıda açın
2. Site çalışıyorsa başarılı!
3. Her GitHub push'unda otomatik olarak yeniden deploy edilecektir

---

## Yöntem 2: Netlify ile Deploy

### Adım 1: Netlify Hesabı

1. [https://netlify.com](https://netlify.com) adresine gidin
2. **Sign up** > **GitHub** ile giriş yapın

### Adım 2: Projeyi Bağlama

1. **Add new site** > **Import an existing project**
2. **GitHub** seçin ve **useflowvox** repository'sini seçin
3. Build ayarları:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Adım 3: Custom Domain

1. **Site settings** > **Domain management**
2. **Add custom domain** > `useflowvox.com` yazın
3. DNS kayıtlarını ekleyin (Netlify size gösterecek)

---

## Yöntem 3: GitHub Pages (Ücretsiz ama daha karmaşık)

GitHub Pages statik siteler için ücretsiz hosting sağlar, ancak React Router için ekstra yapılandırma gerekir.

### Adım 1: GitHub Actions Workflow

`.github/workflows/deploy.yml` dosyası oluşturun (bu dosyayı oluşturabilirim)

### Adım 2: Vite Config Güncelleme

`vite.config.js` dosyasına `base: '/useflowvox/'` ekleyin (repository adı)

### Adım 3: GitHub Pages Ayarları

1. Repository > **Settings** > **Pages**
2. Source: **GitHub Actions** seçin
3. Deploy otomatik başlayacak

**Not**: GitHub Pages custom domain için DNS ayarları gerekir.

---

## Önerilen: Vercel

Vercel en kolay ve en hızlı seçenektir çünkü:
- ✅ Otomatik HTTPS
- ✅ Otomatik deploy (her push'ta)
- ✅ Kolay domain yönetimi
- ✅ Ücretsiz plan
- ✅ Hızlı CDN
- ✅ React Router desteği (ekstra yapılandırma gerekmez)

---

## Deployment Sonrası Kontrol Listesi

- [ ] Site `https://useflowvox.com` adresinde açılıyor
- [ ] Tüm sayfalar çalışıyor (Home, Services, About, Contact)
- [ ] Form Google Sheets'e veri gönderiyor
- [ ] Dil değiştirme çalışıyor
- [ ] Mobil görünüm düzgün
- [ ] Favicon görünüyor
- [ ] SEO meta tag'leri doğru

---

## Sorun Giderme

### Build Hatası
- `npm run build` komutunu lokal olarak çalıştırıp hataları kontrol edin
- Node.js versiyonunun uyumlu olduğundan emin olun

### Domain Bağlanmıyor
- DNS kayıtlarının 24-48 saat içinde yayılmasını bekleyin
- DNS checker araçları kullanın: [whatsmydns.net](https://www.whatsmydns.net)

### 404 Hatası (React Router)
- Vercel'de `vercel.json` dosyası oluşturun (gerekirse ekleyebilirim)

---

## İletişim

Sorun yaşarsanız veya yardıma ihtiyacınız olursa, GitHub Issues üzerinden iletişime geçebilirsiniz.


