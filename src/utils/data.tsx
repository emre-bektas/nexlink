export const featuresText = [
    {
        title : "Gelişmiş İstatistikler",
        description : "Link başına tıklanma ile görüntülenme sayıları ve coğrafi dağılım.",
        href : "/",
    },
    {
        title : "API Güvenliği",
        description : "Güçlü kimlik doğrulama ve güvenlik protokolleri.",
        href : "/",
    },
    {
        title : "Yüksek Uyumluluk",
        description : "Çeşitli programlama dilleri ve platformlar ile uyum.",
        href : "/",
    },
]

export const errorCodes = [
    {
        "code": "rate_limit_exceeded",
        "status": "429",
        "title": "Oran Limiti Aşımı",
        "message": "Bu saat için istek kotanızı aştınız. Lütfen daha sonra tekrar deneyin.",
        "description": "Kullanıcı belirlenen zaman aralığında izin verilenden daha fazla istek yapmıştır. Limit sıfırlanana kadar lütfen bekleyiniz.",
        "solution": "Lütfen belirtilen süre boyunca bekleyin ve daha sonra tekrar deneyin. Eğer sık sık bu hatayı alıyorsanız, isteklerinizi daha düşük bir sıklıkta göndermeyi düşünün veya daha yüksek bir kotaya sahip bir plana geçmeyi değerlendirin."
    },
    {
        "code": "authorization_error",
        "status": "401",
        "title": "Yetkilendirme Hatası",
        "message": "Geçersiz veya eksik yetkilendirme bilgileri.",
        "description": "İstek, geçerli yetkilendirme bilgilerini içermiyor veya API anahtarı hatalı. API anahtarınızı kontrol edin ve tekrar deneyin.",
        "solution": "API anahtarınızı kontrol edin ve doğru olduğundan emin olun. Eğer anahtarınızı kaybettiyseniz veya unuttuysanız, yeni bir anahtar oluşturmayı deneyin."
    },
    {
        "code": "bad_request",
        "status": "400",
        "title": "Geçersiz İstek",
        "message": "İstek yapısal olarak hatalı veya gerekli parametreler eksik.",
        "description": "Gönderilen istek, beklenen parametreleri içermiyor veya parametre formatı yanlış. İstek yapısını ve içeriğini kontrol edip düzeltin.",
        "solution": "İstek yapısını ve gönderilen verileri kontrol edin. Gerekli tüm parametrelerin doğru formatlarda olduğundan ve eksiksiz gönderildiğinden emin olun."
    },
    {
        "code": "resource_not_found",
        "status": "404",
        "title": "Kaynak Bulunamadı",
        "message": "İstenen kaynak bulunamadı.",
        "description": "İstek yapılan URL ya da kaynak mevcut değil. URL'yi kontrol edin veya kaynağın varlığını doğrulayın.",
        "solution": "URL'yi kontrol edin ve doğru olduğundan emin olun. Eğer URL doğruysa, kaynağın halen mevcut olup olmadığını kontrol edin."
    },
    {
        "code": "internal_server_error",
        "status": "500",
        "title": "Sunucu Hatası",
        "message": "Sunucuda beklenmeyen bir hata oluştu.",
        "description": "İstek işlenirken sunucuda beklenmeyen bir durum oluştu. Sorun devam ederse, teknik destekle iletişime geçin.",
        "solution": "Birkaç dakika bekleyip isteği tekrar göndermeyi deneyin. Eğer sorun devam ederse, teknik desteğe başvurun."
    },
    {
        "code": "method_not_allowed",
        "status": "405",
        "title": "Yöntem İzin Verilmedi",
        "message": "Kullanılan HTTP metodu bu kaynak için desteklenmiyor.",
        "description": "İstekte kullanılan HTTP metodu, hedeflenen kaynak için izin verilmeyen bir metot. Doğru HTTP metodunu kullandığınızdan emin olun (örn., GET, POST).",
        "solution": "HTTP metodunu kontrol edin ve desteklenen bir metodu kullanarak tekrar deneyin. Desteklenen metodlar genellikle API dokümantasyonunda belirtilir."
    },
    {
        "code": "request_timeout",
        "status": "408",
        "title": "İstek Zaman Aşımına Uğradı",
        "message": "İstek zaman aşımına uğradı.",
        "description": "Sunucu, isteğin tamamlanması için beklerken zaman aşımına uğradı. İsteği zamanında gönderdiğinizden ve gerekiyorsa veri boyutlarını azaltmayı düşündüğünüzden emin olun.",
        "solution": "İsteği daha hızlı bir ağ bağlantısı üzerinden tekrar göndermeyi deneyin. Büyük veri gönderiyorsanız, veri boyutunu azaltmayı veya istekleri daha küçük parçalara bölerek göndermeyi düşünün."
    },
    {
        "code": "conflict",
        "status": "409",
        "title": "Çakışma",
        "message": "İstek, kaynağın mevcut durumu ile çakıştığı için tamamlanamadı.",
        "description": "İstek, sunucunun mevcut durumuyla çakışıyor, örneğin, zaten mevcut olan bir kaynağı tekrar oluşturmaya çalışmak gibi.",
        "solution": "Çakışmanın nedenini belirleyin ve çözüm için kaynağın mevcut durumunu kontrol edin. Eğer bir kaynağı yeniden oluşturmaya çalışıyorsanız, kaynağın zaten mevcut olup olmadığını kontrol edin."
    }
]
