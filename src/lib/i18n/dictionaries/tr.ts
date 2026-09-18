import type { Dictionary } from "./en";

/** Turkish — the default locale. */
const tr: Dictionary = {
  meta: {
    tagline: "Markalama ajansı",
    title: "Fourtune — Markanın tonunu bul",
    description:
      "Fourtune bağımsız bir markalama ajansı: strateji, kimlik, ürün ve hepsini birbirine bağlayan hareket.",
    ogAlt: "Fourtune — 4tune",
  },

  nav: {
    home: "Ana sayfa",
    work: "Portfolyo",
    services: "Hizmetler",
    studio: "Hikâyemiz",
    contact: "İletişim",
    menu: "Menü",
    close: "Kapat",
    startProject: "Projeye başla",
    skipToContent: "İçeriğe geç",
    theme: "Görünüm",
    themeLight: "Açık",
    themeDark: "Koyu",
    language: "Dil",
  },

  hero: {
    eyebrow: "2014'ten beri bağımsız",
    titleLead: "Markaların",
    titleAccent: "frekansını",
    titleTrail: "buluyoruz.",
    lead: "Fourtune bağımsız bir markalama ajansı. Konumlandırmayı, kimliği ve ürünü; bir şirket göründüğü her yerde aynı şeyi söyleyene kadar akort ediyoruz.",
    primary: "İşleri Gör",
    secondary: "Projeye Başla",
    scroll: "Kaydır",
  },

  showreel: {
    label: "Tanıtım filmi",
  },

  ghost: {
    label: "Duruşlar",
    sets: [
      ["Marka", "Ürün", "Hareket", "Sistem"],
      ["Daha", "Keskin", "Daha", "Net"],
      ["Önce", "Tonu", "Bul", "Sonra"],
    ],
  },

  toolsBand: {
    title: "**Fikirlerin** arkasındaki araçlar",
    description: "Strateji, tasarım, teknoloji ve yapay zekâ — birlikte çalışıyor.",
    footnote: "Ve daha fazlası. Her zaman yeninin peşindeyiz.",
  },

  marquee: {
    label: "Birlikte çalıştıklarımız",
    items: [
      "Northwind",
      "Be Oddly",
      "Kestrel",
      "Calc Marine",
      "Orbit Health",
      "Veridian",
      "Halo Audio",
      "Field Notes",
    ],
  },

  intro: {
    eyebrow: "Stüdyo",
    title: "Küçük ekip. Uzun dikkat süresi.",
    body: "Yılda az sayıda iş alıyoruz; böylece işi anlatan ekiple işi yapan ekip aynı oluyor. Devir teslim yok, araya giren müşteri katmanı yok — sadece ekip, problem ve doğru yapmaya yetecek zaman.",
    stats: [
      { value: "12", label: "Yıllık bağımsızlık" },
      { value: "140", label: "Tamamlanan proje" },
      { value: "28", label: "Kazanılan ödül" },
      { value: "9", label: "Toplam kişi" },
    ],
  },

  services: {
    eyebrow: "Ne yapıyoruz",
    title: "Fourtune Hizmetleri",
    lead: "Stratejiden içeriğe, performanstan dijital deneyimlere ve insanların saklamak isteyeceği markalı ürünlere kadar — hepsi tek ekip tarafından aynı frekansta.",
    viewAll: "Tüm Hizmetlerimiz",
    deliverablesLabel: "Kapsam",
    items: [
      {
        id: "digital-strategy",
        title: "Dijital Strateji",
        summary:
          "Büyük düşün. Akıllı hareket et. İçgörüleri, verileri ve fikirleri, sizi gerçekten bir yerlere götürecek dijital stratejilere dönüştürüyoruz.",
        deliverables: [
          "Dijital durum analizi ve fırsat haritası",
          "Hedef kitle, pazar ve rakip araştırması",
          "Müşteri yolculuğu ve kanal stratejisi",
          "Ölçümleme çerçevesi ve aksiyon yol haritası",
        ],
      },
      {
        id: "social-media",
        title: "Sosyal Medya",
        summary:
          "Markanı kaydırılması imkânsız hâle getir. İçerik planlamadan topluluk yönetimine kadar sosyal medyanızı canlı, güncel ve tamamen ‘siz’ hissettirecek şekilde yönetiyoruz. Sizin için buradayız!",
        deliverables: [
          "Sosyal medya stratejisi ve içerik takvimi",
          "Platforma özel yaratıcı içerik ve metin üretimi",
          "Topluluk yönetimi ve etkileşim",
          "Raporlama, sosyal dinleme ve optimizasyon",
        ],
      },
      {
        id: "creative-content",
        title: "Yaratıcı Fikir ve İçerik",
        summary:
          "Konuşulmaya değer fikirler. Marka kimlikleri oluşturuyor, hikâyeler yaratıyor ve prodüksiyon süreçlerini yönetiyoruz. Fikirlerinizi, insanların gerçekten görmek isteyeceği içeriklere dönüştürüyoruz.",
        deliverables: [
          "Yaratıcı konsept ve hikâye anlatımı",
          "Marka kimliği ve sanat yönetimi",
          "Fotoğraf, video ve prodüksiyon yönetimi",
          "Editoryal içerik sistemleri ve uyarlamalar",
        ],
      },
      {
        id: "performance-marketing",
        title: "Performans Pazarlaması",
        summary:
          "Daha az tahmin. Daha çok büyüme. Tıklamaları müşterilere, bütçeleri ise gerçek sonuçlara dönüştüren kampanyalar yaratıyor, test ediyor ve optimize ediyoruz.",
        deliverables: [
          "Ücretli arama ve sosyal medya kampanyaları",
          "Hedef kitle planlama ve yeniden hedefleme",
          "Yaratıcı içerik testleri ve dönüşüm iyileştirmesi",
          "Performans raporlama ve bütçe yönetimi",
        ],
      },
      {
        id: "web-digital-experience",
        title: "Web ve Dijital Deneyim",
        summary:
          "Dijital eviniz. Ama ikonik olanından. İyi görünen, akıcı hissettiren ve insanların içinde kalmak isteyeceği web siteleri ve dijital deneyimler yaratıyoruz. Tıpkı bizim web sitemiz gibi.",
        deliverables: [
          "Kullanıcı deneyimi araştırması ve bilgi mimarisi",
          "Kullanıcı arayüzü tasarımı ve ölçeklenebilir tasarım sistemleri",
          "Mobil uyumlu web sitesi ve ürün geliştirme",
          "Analitik, erişilebilirlik ve dönüşüm incelemeleri",
        ],
      },
      {
        id: "branding-campaign",
        title: "Markalama ve Kampanya",
        summary:
          "Markana bir kişilik kazandır. Büyük fikirden son kampanyaya kadar; bir sesi, bir havası ve söyleyecek bir şeyi olan markalar yaratıyoruz.",
        deliverables: [
          "Marka stratejisi ve konumlandırma",
          "Görsel ve sözel kimlik sistemleri",
          "Kampanya konsepti ve ana görsel tasarımı",
          "Lansman planlama ve kanal uyarlamaları",
        ],
      },
      {
        id: "branding-merchandise",
        title: "Markalı Ürünler",
        summary:
          "Markanı ortaya çıkar. Hem de kelimenin tam anlamıyla. Merch’lerden kişiselleştirilmiş ürünlere kadar, markanızı insanların gerçekten saklamak, kullanmak ve göstermek isteyeceği ürünlere dönüştürüyoruz. Kişiselleştirilmiş ürünlerinle markana aidiyet katabilirsin.",
        deliverables: [
          "Markalı ürün stratejisi ve ürün seçimi",
          "Kişiselleştirilmiş ürün ve tekstil tasarımı",
          "Ambalaj ve kutu açılış deneyimi",
          "Tedarikçi seçimi ve üretim yönetimi",
        ],
      },
    ],
  },

  work: {
    eyebrow: "Seçilmiş işler",
    title: "Yaptıklarımız ve nedenleri.",
    lead: "Kısa bir seçki. Her biri, çoğu vaka çalışmasının atladığı kısmı da içeriyor: doğruyu bulmadan önce neyi yanlış yaptığımızı.",
    viewAll: "Tüm İşler",
    viewCase: "Vakayı oku",
    allProjects: "Tüm Projeler",
    nextProject: "Sonraki Proje",
    backToWork: "İşlere dön",
    labels: {
      client: "Müşteri",
      year: "Yıl",
      disciplines: "Disiplinler",
      duration: "Süre",
    },
    sections: {
      challenge: "Problem",
      approach: "Ne yaptık",
      outcome: "Sonuç",
      results: "Rakamlar",
    },
  },

  process: {
    eyebrow: "Nasıl ilerliyor",
    title: "Dört aşama. Sürpriz yok.",
    lead: "Altı hafta da sürse altı ay da, her iş aynı şekilde ilerliyor. Hangi aşamada olduğunuzu ve sonunda elinize ne geçeceğini her zaman biliyorsunuz.",
    steps: [
      {
        n: "01",
        title: "Keşif",
        body: "İki hafta görüşme, denetim ve dürüst sorular. Sonunda yazılı bir görüş sunuyoruz — duymak istemeyebileceğiniz kısımlar dahil.",
      },
      {
        n: "02",
        title: "Yön",
        body: "Değerlendirilebilecek kadar ilerletilmiş iki ya da üç rota. Siz birini seçiyorsunuz; kurmaktan memnun olmayacağımız hiçbir şeyi sunmuyoruz.",
      },
      {
        n: "03",
        title: "Zanaat",
        body: "Uzun orta bölüm. Haftalık çalışma oturumları, gerçek bileşenler, gerçek içerik — çözülmemiş bir problemi gizleyen cilalı maketler yok.",
      },
      {
        n: "04",
        title: "Lansman",
        body: "Yayına alıyor, belgeliyor ve ekibinize öğretiyoruz. Sonra ilk çeyrek boyunca ulaşılabilir kalıyoruz; çünkü lansman hiçbir zaman son değildir.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Onların ifadesiyle",
    title: "Bizimle çalışmak nasıl bir şey?",
    items: [
{
        quote:
          "Önceki ajansımızın kırk kişiyle yaptığını dokuz kişi yaptı ve her aradığımızda telefona çıktılar.",
        name: "Marie Lambert",
        role: "Kurucu, Field Notes",
      },
    ],
  },

  studio: {
    eyebrow: "Stüdyo",
    previewEyebrow: "Ekibimiz",
    previewTitle: "Bizim hikayemiz",
    previewAction: "Birbirimizi tanıyalım",
    title: "4 zihin. Tek odak: **sen**.",
    lead: "Fourtune, dört kişiyle, ortak bir vizyonla ve her markanın duyulmayı bekleyen **benzersiz bir hikayesi** olduğu inancıyla başladı.",
    body: [
      "Bir takım olmanın öncesinde, dirsek dirseğe çalışan ekip arkadaşları olarak başarımızın sırrının yalnızca bireysel becerilerimizden değil, birbirimizi daha iyi versiyonumuza ulaşmak için zorlayan işbirliği biçimimizden ve fikirlerimizi etkili çözümlere dönüştürebilme becerimizden kaynaklandığını fark ettik.",
      "Bu farkındalık, kendimize ait bir ajans kurma fikrimizin tohumlarını attı.",
      "4tune ismi kim olduğumuzu temsil ediyor: aynı dili konuşan, ayrı güçler taşıyan ve **tutkuyla** yapılan işin sınır tanımadığına inanan dört zihin. Bir markanın ‘tune’unu bulma fikrinden ilham alarak, işletmelerin kendi seslerini keşfetmelerine ve anlamlı bağlar kurmalarına yardımcı oluyoruz.",
      "4tune olarak herkese uyan tek tip çözümlere inanmıyoruz. Bizim rolümüz ise ekibinizin bir uzantısı olarak çalışarak sizin fark yaratan hikayenizi dinlemek, hedeflerinizi anlamak ve özgün bir sesle, doğru kitleye, gerçek sonuçlar yaratacak şekilde anlatmak.",
      "Farklı uzmanlık alanlarını bir araya getirerek stratejik düşünceyi, yaratıcılığı, teknolojiyi ve insanlara dair derin bir anlayışı birleştiriyor; markaların sürekli değişen dijital dünyada büyümesine ve öne çıkmasına yardımcı oluyoruz.",
      "Bizim için marketing yalnızca görünür olmakla ilgili değil. Anlamlı bağlar kurmak, güven inşa etmek ve kalıcı bir iz bırakmakla ilgili. İster kimliğini inşa ediyor, ister varlığını güçlendiriyor, ister kitlenle bağlantı kurmanın yeni yollarını arıyor ol; biz markanın doğru tune’unu bulmak için buradayız.",
      "**4tune. Find the tune of your branding.**",
    ],
    valuesTitle: "Nasıl çalışıyoruz",
    values: [
      {
        title: "Söz vermeden önce prototiple",
        body: "Etkileşimli bir demo, bin durağan kareye bedel. Bir şeyi prototipte doğru hissettiremiyorsak sunuma koymuyoruz.",
      },
      {
        title: "Yokluk da tasarımdır",
        body: "Her öğe yerini hak eder. Kısıtlılık kendi başına bir minimalizm değil — önemli olanı bariz kılan şeydir.",
      },
      {
        title: "Her değeri savun",
        body: "Hiçbir şey rastgele değil. Bir boşluğun, bir sürenin ya da bir hizanın neden öyle olduğunu sorun, cevabı var.",
      },
      {
        title: "Yayına al, sonra kal",
        body: "Lansman hikâyenin ortası. İlk çeyrek boyunca yakın duruyoruz; gerçek geri bildirim tam o zaman geliyor.",
      },
    ],
    teamTitle: "Ekip",
    team: [
      { name: "Deniz Yalçın", role: "Kurucu, strateji" },
      { name: "Ayla Kurt", role: "Tasarım direktörü" },
      { name: "Tom Rehn", role: "Baş mühendis" },
      { name: "Nora Fischer", role: "Hareket direktörü" },
      { name: "Emre Solak", role: "Ürün tasarımı" },
      { name: "Julia Brandt", role: "Marka tasarımı" },
      { name: "Kaan Öz", role: "Ön yüz mühendisliği" },
      { name: "Léa Moreau", role: "İçerik ve editoryal" },
      { name: "Sara Kaya", role: "Stüdyo operasyonu" },
    ],
    officeTitle: "Neredeyiz",
  },

  contact: {
    eyebrow: "Merhaba deyin",
    title: "Ne kurduğunuzu anlatın.",
    lead: "Her mesajı kendimiz okuyor ve iki iş günü içinde yanıtlıyoruz. Doğru stüdyo biz değilsek bunu söyler, sizi daha iyi bir yere yönlendiririz.",
    formTitle: "Proje talebi",
    form: {
      name: "Adınız",
      namePlaceholder: "Ayşe Yılmaz",
      email: "E-posta",
      emailPlaceholder: "ayse@sirket.com",
      company: "Şirket",
      companyPlaceholder: "Şirket adı",
      budget: "Bütçe aralığı",
      budgetPlaceholder: "Bir aralık seçin",
      message: "Ne üzerinde çalışıyorsunuz?",
      messagePlaceholder:
        "Bir paragraf yeter. Problem ne ve ne zamana kadar çözülmesi gerekiyor?",
      submit: "Talebi gönder",
      sending: "Gönderiliyor…",
      optional: "isteğe bağlı",
      successTitle: "Mesaj gönderildi",
      successBody: "Teşekkürler — elimize ulaştı. İki iş günü içinde döneceğiz.",
      errorTitle: "Gönderilemedi",
      errorBody:
        "Bizim tarafta bir şeyler ters gitti. Doğrudan e-posta atın, oradan devam edelim.",
      sendAnother: "Yeni mesaj gönder",
    },
    budgets: [
      "25.000 € altı",
      "25.000 € – 60.000 €",
      "60.000 € – 150.000 €",
      "150.000 € üzeri",
      "Henüz belli değil",
    ],
    validation: {
      nameRequired: "Lütfen adınızı yazın.",
      emailRequired: "Yanıt verebilmek için bir e-posta gerekiyor.",
      emailInvalid: "Bu bir e-posta adresine benzemiyor.",
      messageRequired: "Başlamak için bir iki cümle yeterli.",
      messageShort: "Biraz daha ayrıntı işimizi kolaylaştırır.",
    },
    directTitle: "Ya da doğrudan ulaşın",
    officeTitle: "Stüdyo",
    hoursTitle: "Çalışma saatleri",
    hours: "Pazartesi – Cuma, 09.00 – 18.00 (GMT+3)",
    responseNote: "Ortalama yanıt süresi: 1,4 iş günü",
  },

  cta: {
    eyebrow: "Sıradaki adım",
    title: "Yapmaya değer bir şey mi var?",
    body: "Anlatın. En kötü ihtimalle, bunu daha önce yapmış insanlardan dürüst bir ikinci görüş almış olursunuz.",
    action: "Projeye başla",
    secondary: "E-posta gönder",
  },

  footer: {
    tagline: "İstanbul merkezli bağımsız bir tasarım ve teknoloji stüdyosu.",
    navTitle: "Site",
    socialTitle: "Diğer mecralar",
    contactTitle: "İletişim",
    rights: "Tüm hakları saklıdır.",
    colophon: "",
    backToTop: "Yukarı dön",
    localeTitle: "Dil",
  },

  projects: {
    "be-oddly": {
      "title": "Be Oddly — Kendine özgü bir karakter",
      "client": "Be Oddly",
      "category": "Sosyal medya içeriği",
      "duration": "",
      "summary": "Be Oddly için sosyal medya içerikleri.",
      "challenge": "",
      "approach": "",
      "outcome": "",
      "results": []
    },
    "calc-marine": {
      "title": "Calc Marine — Marka kimliği",
      "client": "Calc Marine",
      "category": "Marka kimliği",
      "duration": "",
      "summary": "Calc Marine için logo, kartvizit, dosya ve kurumsal belge tasarımları.",
      "challenge": "",
      "approach": "",
      "outcome": "",
      "results": []
    },
    vela: {
      title: "Göz kırpmadan açılan bir mağaza",
      client: "Veridian",
      category: "Ürün ve mühendislik",
      duration: "7 ay",
      summary:
        "Ağ katmanından itibaren yeniden kurulmuş bir vitrin; çünkü en hızlı arayüz, hâlihazırda orada olandır.",
      challenge:
        "Veridian'ın kataloğu güzeldi ve ofis wi-fi'ı dışında kullanılamıyordu. Mobil dönüşüm masaüstünün üçte biriydi ve aradaki farkın neredeyse tamamı yüklenme süresiydi.",
      approach:
        "Uçta render edilen bir katalogla Next.js üzerine yeniden kurduk, tasarım sistemini iki ekibin de sahiplenebileceği bir token katmanına taşıdık ve bekleten her spinner'ı zaten işe yarar bir şey gösteren bir durumla değiştirdik.",
      outcome:
        "Medyan mobil yüklenme bir saniyenin altına indi. Mobil dönüşüm, lansmandan iki ay sonra masaüstüyle arasındaki farkın büyük kısmını kapattı.",
      results: [
        { value: "0,9sn", label: "Medyan mobil yüklenme" },
        { value: "+%31", label: "Mobil dönüşüm" },
        { value: "100", label: "Lighthouse erişilebilirlik" },
      ],
    },
    tessera: {
      title: "Karşı kaldırımdan okunan bir müze",
      client: "Tessera",
      category: "Kimlik ve kampanya",
      duration: "5 ay",
      summary:
        "Tek bir modüler ızgaradan kurulmuş bir kimlik — on bir bölüme yetecek kadar esnek, tanınır kalacak kadar katı.",
      challenge:
        "On bir küratöryel bölüm yirmi yıl boyunca kendi görünüşünü ayrı ayrı yaptırmıştı. Ziyaretçiler tek bir müze değil, aynı çatıyı paylaşan on bir müze deneyimliyordu.",
      approach:
        "Tek bir karo ızgarası; afişten duvar etiketine, telefon ekranına kadar her yerleşimi üretiyor. Bölümler sistem içinde renk ve yoğunluk seçiyor; yani parçalanmadan kimlik kazanıyorlar.",
      outcome:
        "Yönlendirme, basılı işler, kampanya ve biletleme platformuna uygulandı. Bölümler sistemi gönüllü olarak benimsedi — önemli olan tek benimseme ölçütü de bu.",
      results: [
        { value: "11", label: "Birleşen bölüm" },
        { value: "+%24", label: "Bilet dönüşümü" },
        { value: "1", label: "Izgara, her yerde" },
      ],
    },
    halo: {
      title: "Görülebilen ses",
      client: "Halo Audio",
      category: "Ürün ve hareket",
      duration: "4 ay",
      summary:
        "Üst segment kulaklıklar için bir eşlikçi uygulama; arayüz, donanımın hissettirdiği gibi davranıyor.",
      challenge:
        "Halo olağanüstü bir donanım üretip yanına bir ayarlar menüsü koymuştu. 600 €'luk bir ürünün sahipleri markayla bir dizi anahtar üzerinden tanışıyordu.",
      approach:
        "Tüm arayüzü yaylar üzerine kurduk: sürükleyerek konumlandırdığınız uzamsal ses, parmağınızın momentumunu taşıyan EQ eğrileri ve dokunduğunuz kartın tam kendisinden açılan çalma ekranı.",
      outcome:
        "Uygulama, donanımın yanına iliştirilmiş bir ek olmaktan çıkıp onu satın alma gerekçesine dönüştü. İncelemeler ondan başlıyordu.",
      results: [
        { value: "4,9", label: "App Store puanı" },
        { value: "+%46", label: "Özellik kullanımı" },
        { value: "120fps", label: "Cihazda sürekli" },
      ],
    },
    fieldnotes: {
      title: "Rafını hak eden bir kırtasiye markası",
      client: "Field Notes Co.",
      category: "Kimlik ve kampanya",
      duration: "4 ay",
      summary:
        "Dokunulabilir ürünlerle yarışan bir kâğıt şirketi için önce perakendeyi düşünen bir kimlik.",
      challenge:
        "Field Notes yanındaki raftaki herkesten iyi defter üretiyor ve üçte biri kadar satıyordu. Tüm işi ürün yapıyor, ambalaj hiçbir şey yapmıyordu.",
      approach:
        "Ambalajı birincil mecra olarak tasarladık — kimlik, mağazada bir kol boyu mesafeden gördüğünüz şeydir — sonra onu geriye doğru dijital vitrine ve kampanyaya taşıdık.",
      outcome:
        "İki ülkede 300 satış noktasında yeniden lanse edildi. Raf devir hızı iki yeni ürün hattını finanse edecek kadar arttı.",
      results: [
        { value: "+%58", label: "Raf devir hızı" },
        { value: "300", label: "Satış noktası" },
        { value: "2", label: "Finanse edilen hat" },
      ],
    },
  },

  a11y: {
    scrollProgress: "Okuma ilerlemesi",
    openMenu: "Gezinme menüsünü aç",
    closeMenu: "Gezinme menüsünü kapat",
    toggleTheme: "Açık ve koyu görünüm arasında geçiş yap",
    previous: "Önceki",
    next: "Sonraki",
    pauseMarquee: "Kayan listeyi durdur",
    playMarquee: "Kayan listeyi devam ettir",
    pauseVideo: "Filmi duraklat",
    playVideo: "Filmi oynat",
    muteVideo: "Sesi kapat",
    unmuteVideo: "Sesi aç",
  },

  notFound: {
    title: "Opsss....",
    body: "Bağlantı ölmüş olabilir ama işler duruyor. Ajansımızın seçilmiş projelerine göz atın.",
    action: "Ana sayfaya dön",
  },
};

export default tr;
