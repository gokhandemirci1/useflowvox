# Site Trafiği Kontrol Rehberi

## Yöntem 1: Vercel Analytics (Önerilen - Ücretsiz)

Vercel, deploy edilen siteler için ücretsiz analytics sağlar.

### Kurulum:

1. **Vercel Dashboard** → Projenize gidin
2. **Analytics** sekmesine tıklayın
3. **Enable Analytics** butonuna tıklayın
4. Analytics otomatik olarak aktif olur

### Görebileceğiniz Metrikler:

- **Page Views** - Sayfa görüntüleme sayısı
- **Unique Visitors** - Benzersiz ziyaretçi sayısı
- **Top Pages** - En çok ziyaret edilen sayfalar
- **Top Referrers** - Trafiğin geldiği kaynaklar
- **Top Countries** - Ziyaretçilerin ülkeleri
- **Top Devices** - Cihaz türleri (Desktop, Mobile, Tablet)
- **Top Browsers** - Tarayıcı türleri
- **Performance Metrics** - Sayfa yükleme süreleri

### Avantajlar:

- ✅ Ücretsiz
- ✅ Otomatik kurulum
- ✅ Gerçek zamanlı veriler
- ✅ Vercel ile entegre
- ✅ Privacy-friendly (GDPR uyumlu)

---

## Yöntem 2: Google Analytics 4 (GA4)

Google Analytics, en popüler ve detaylı analytics çözümüdür.

### Kurulum Adımları:

#### Adım 1: Google Analytics Hesabı Oluşturma

1. [analytics.google.com](https://analytics.google.com) adresine gidin
2. Hesap oluşturun veya giriş yapın
3. **Admin** → **Create Property** → **Web**
4. Site bilgilerini girin:
   - Property name: `FlowVox AI`
   - Website URL: `https://useflowvox.com`
   - Industry: Technology
   - Time zone: Türkiye (GMT+3)

#### Adım 2: Measurement ID Alma

1. **Admin** → **Data Streams** → **Add stream** → **Web**
2. Website URL: `https://useflowvox.com`
3. Stream name: `FlowVox Website`
4. **Create stream** butonuna tıklayın
5. **Measurement ID**'yi kopyalayın (örnek: `G-XXXXXXXXXX`)

#### Adım 3: React Projesine Ekleme

`index.html` dosyasına Google Analytics script'ini ekleyin.

---

## Yöntem 3: Vercel Web Analytics (Yeni - Ücretsiz)

Vercel'in yeni web analytics çözümü, daha hafif ve privacy-focused.

### Kurulum:

1. Vercel Dashboard → Projenize gidin
2. **Settings** → **Analytics**
3. **Web Analytics** bölümüne gidin
4. **Enable** butonuna tıklayın
5. Otomatik olarak aktif olur

---

## Hızlı Kurulum: Google Analytics

Kod zaten hazır! Sadece Measurement ID eklemeniz gerekiyor.

### Adım 1: Google Analytics'ten Measurement ID Alın

1. [analytics.google.com](https://analytics.google.com) → Hesap oluşturun
2. **Admin** → **Data Streams** → **Add stream** → **Web**
3. Website URL: `https://useflowvox.com`
4. **Measurement ID**'yi kopyalayın (örnek: `G-XXXXXXXXXX`)

### Adım 2: Environment Variable Ekleyin

1. Proje klasöründe `.env` dosyası oluşturun (eğer yoksa)
2. İçine şunu ekleyin:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
(XXXXXXXXXX yerine kendi Measurement ID'nizi yazın)

3. Vercel'de de ekleyin:
   - Vercel Dashboard → Settings → Environment Variables
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (kendi ID'niz)
   - Environment: Production, Preview, Development (hepsini seçin)

### Adım 3: Deploy Edin

1. Değişiklikleri GitHub'a push edin
2. Vercel otomatik deploy edecek
3. Google Analytics çalışmaya başlayacak

---

## Trafiği Görüntüleme

### Vercel Analytics:
1. Vercel Dashboard → Projenize gidin
2. **Analytics** sekmesine tıklayın
3. Gerçek zamanlı verileri görün

### Google Analytics:
1. [analytics.google.com](https://analytics.google.com) → Giriş yapın
2. **Reports** sekmesinden detaylı analizleri görün
3. **Realtime** → Anlık ziyaretçileri görün

---

## Görebileceğiniz Metrikler

### Temel Metrikler:
- **Users** - Toplam kullanıcı sayısı
- **Sessions** - Oturum sayısı
- **Page Views** - Sayfa görüntüleme
- **Bounce Rate** - Hemen çıkma oranı
- **Average Session Duration** - Ortalama oturum süresi

### Detaylı Analizler:
- **Traffic Sources** - Trafiğin geldiği kaynaklar (Google, Direct, Social Media)
- **User Demographics** - Yaş, cinsiyet, ilgi alanları
- **Device Categories** - Desktop, Mobile, Tablet
- **Geographic Data** - Ülke, şehir bazında ziyaretçiler
- **Page Performance** - Hangi sayfalar daha popüler
- **Conversion Tracking** - Form gönderimleri, buton tıklamaları

---

## Özel Event Takibi

Form gönderimlerini takip etmek için `ContactForm.jsx`'e event tracking eklenebilir:

```javascript
import { trackEvent } from '../hooks/useAnalytics'

// Form gönderildiğinde
trackEvent('form_submit', 'contact', 'contact_form', 1)
```

---

## Öneriler

1. **Vercel Analytics** - Hızlı ve kolay, hemen başlayın
2. **Google Analytics** - Detaylı analiz için, uzun vadeli
3. **Her ikisini birlikte** - En kapsamlı görünüm

---

## Privacy Notları

- Google Analytics GDPR uyumlu
- Vercel Analytics privacy-friendly
- Cookie consent gerekebilir (AB için)
- IP anonymization aktif (Google Analytics'te)

---

## Sorun Giderme

### Google Analytics çalışmıyor:
- Measurement ID doğru mu kontrol edin
- Environment variable doğru mu kontrol edin
- Browser console'da hata var mı kontrol edin (F12)

### Vercel Analytics görünmüyor:
- Analytics aktif mi kontrol edin (Settings → Analytics)
- Birkaç saat bekleyin (veri toplama başlaması zaman alabilir)

