# Google Sheets Entegrasyonu Kurulum Rehberi

## Adım 1: Google Sheets Tablosu Oluşturma

1. Google Drive'da yeni bir Google Sheets oluşturun
2. İlk satıra başlıkları ekleyin:
   - Timestamp (Tarih/Saat)
   - First Name
   - Last Name
   - Work Email
   - Job Title
   - Phone Number
   - Country

## Adım 2: Google Apps Script Oluşturma

1. Google Sheets'te **Extensions** > **Apps Script** menüsüne gidin
2. Açılan editöre aşağıdaki kodu yapıştırın:

```javascript
function doPost(e) {
  try {
    // Google Sheets'i aç
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Gelen veriyi parse et
    const data = JSON.parse(e.postData.contents);
    
    // Yeni satır ekle
    const row = [
      new Date(), // Timestamp
      data.firstName || '',
      data.lastName || '',
      data.workEmail || '',
      data.jobTitle || '',
      data.phoneNumber || '',
      data.country || ''
    ];
    
    sheet.appendRow(row);
    
    // Başarılı yanıt döndür
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Hata durumunda
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Test için GET isteği
  return ContentService
    .createTextOutput('Google Sheets API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. **File** > **Save** ile kaydedin
4. Projeye bir isim verin (örn: "Contact Form Handler")

## Adım 3: Web App Olarak Deploy Etme

1. Sağ üstteki **Deploy** > **New deployment** butonuna tıklayın
2. **Select type** kısmında **Web app** seçin
3. Ayarları yapın:
   - **Description**: "Contact Form Webhook" (isteğe bağlı)
   - **Execute as**: "Me" seçin
   - **Who has access**: "Anyone" seçin (önemli!)
4. **Deploy** butonuna tıklayın
5. İlk kez deploy ediyorsanız, izinleri onaylamanız istenecek:
   - **Authorize access** butonuna tıklayın
   - Google hesabınızı seçin
   - **Advanced** > **Go to [Project Name] (unsafe)** tıklayın
   - **Allow** butonuna tıklayın
6. Deployment tamamlandığında bir **Web App URL** göreceksiniz
7. Bu URL'yi kopyalayın (örnek: `https://script.google.com/macros/s/AKfycby.../exec`)

## Adım 4: Environment Variable Oluşturma

1. Proje klasörünüzde `.env` dosyası oluşturun
2. İçine şunu ekleyin:
```
VITE_GOOGLE_SHEETS_URL=YOUR_WEB_APP_URL_BURAYA
```

**ÖNEMLİ:** `.env` dosyasını `.gitignore`'a ekleyin (eğer yoksa)

## Adım 5: Frontend Kodunu Güncelleme

ContactForm.jsx dosyasındaki `handleSubmit` fonksiyonu güncellenecek ve Google Sheets'e veri gönderecek.

## Güvenlik Notları

- Web App URL'nizi kimseyle paylaşmayın
- Production'da rate limiting ekleyebilirsiniz
- İsteğe bağlı olarak bir API key ekleyebilirsiniz (daha güvenli)

## Test Etme

1. Formu doldurup gönderin
2. Google Sheets'te yeni bir satırın eklendiğini kontrol edin
3. Hata olursa browser console'u kontrol edin

