import { CollectionItem, CraftsmanshipStep, WhyUsCard, ContactInfo, FaqItem, TestimonialItem } from '../types';

export const BRAND_NAME = "İrem Comfort";
export const BRAND_TAGLINE = "Hakiki Deri Bayan Comfort Sandalet & Terlik İmalatı";
export const BRAND_ESTABLISHED = "1994";

export const CONTACT_DATA: ContactInfo = {
  phone: "+905330297125",
  phoneDisplay: "0533 029 71 25",
  whatsapp: "905330297125",
  whatsappDisplay: "0533 029 71 25",
  instagram: "@irem.comfort",
  instagramUrl: "https://www.instagram.com/irem.comfort",
  instagramVerified: true,
  email: "info@iremcomfort.com",
  address: "Manisa Ayakkabıcılar Sitesi (Güzelyurt Mahallesi) 5757.Sokak No:21/A Yunusemre / Manisa 45030",
  showroomHours: "Pzt - Cmt: 08:30 - 19:00 | Pazar: Özel Randevu İle",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%C4%B0rem+Comfort+Manisa+Ayakkab%C4%B1c%C4%B1lar+Sitesi"
};

export const ANNOUNCEMENT_TICKER = [
  "YENİ SEZON HAKİKİ DERİ BAYAN COMFORT SANDALET VE TERLİK KOLEKSİYONU ÇIKTI",
  "ANATOMİK TABANLI YUMUŞAK SAYA BAYAN TERLİK VE SABO İMALATI",
  "YENİ SEZON KATALOĞU VE TOPTAN / PERAKENDE BİLGİ HATTI: 0533 029 71 25",
  "MANİSA AYAKKABICILAR SİTESİ ÜRETİM ATÖLYEMİZDEN DOĞRUDAN DANIŞMA"
];

export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: 'cift-tokali-comfort-terlik',
    name: 'İrem Comfort Çift Tokalı Hakiki Deri Terlik',
    subtitle: 'Anatomik Yumuşak Tabanlı Bayan Terliği',
    category: 'Bayan Comfort Terlik',
    tagline: 'Gün boyu yumuşak adımlar için %100 hakiki deri saya ve esnek taban',
    description: 'İrem Comfort un en çok tercih edilen klasiği. Ayarlanabilir metal kemer tokaları sayesinde her ayak tipine mükemmel uyum sağlar. Hakiki deri iç ve dış kaplaması terlemeyi önler, anatomik taban desteğiyle gün boyu konfor sunar.',
    image: '',
    secondaryImage: '',
    materials: ['%100 Hakiki Yumuşak Dana Derisi', 'Anatomik Poliüretan Taban', 'Hakiki Deri İç Astar'],
    dimensions: 'Numara Aralığı: 36 - 41 | Taban Yüksekliği: 3.5 cm',
    leatherGrades: ['Yumuşak Hakiki Nappa', 'Anilin Hakiki Deri'],
    colors: [
      { name: 'Siyah Klasik', hex: '#1C1C1C' },
      { name: 'Taba Bronz', hex: '#8B5A2B' },
      { name: 'Vizon Krem', hex: '#D2C4B2' },
      { name: 'Beyaz Saf', hex: '#FFFFFF' }
    ],
    features: [
      'Anatomik kavisli özel taban desteği',
      '%100 Nefes alan hakiki deri iç kaplama',
      'Paslanmaz ayarlanabilir metal tokalar',
      'Hafif ve darbe emici poliüretan taban'
    ],
    isFeatured: true
  },
  {
    id: 'ortopedik-sabo-terlik',
    name: 'İrem Comfort Hakiki Deri Ortopedik Sabo Terlik',
    subtitle: 'Nefes Alan Gözenekli İş ve Günlük Terliği',
    category: 'Sabo & Ortopedik Terlik',
    tagline: 'Sağlık çalışanları ve ayakta çalışan kadınlar için özel konfor',
    description: 'Uzun saatler ayakta kalan kadınlar için özel olarak geliştirilmiş ortopedik sabo modeli. Lamine hakiki deri saya üzerindeki özel hava delikleri sirkülasyon sağlar. Özel pedli dolgulu tabanı topuk ve bel yükünü hafifletir.',
    image: '',
    secondaryImage: '',
    materials: ['Perfore Hakiki Deri', 'Ortopedik Jel Pedli Taban', 'Kaymaz Taban Kaplaması'],
    dimensions: 'Numara Aralığı: 36 - 41 | Topuk Yüksekliği: 4.5 cm',
    leatherGrades: ['Perfore Hava Delikli Deri'],
    colors: [
      { name: 'Beyaz Medikal', hex: '#F8F9FA' },
      { name: 'Gece Siyahı', hex: '#111111' },
      { name: 'Lacivert', hex: '#0A2D6F' }
    ],
    features: [
      'Topuk dikeni ve nasır önleyici ortopedik iç taban',
      'Sürekli havalandırma sağlayan perfore saya',
      'Islak ve kuru zeminlerde kaymayan taban',
      'Kolay temizlenebilir leke tutmaz hakiki deri'
    ],
    isFeatured: true
  },
  {
    id: 'capraz-bant-sandalet',
    name: 'İrem Comfort Çapraz Bantlı Hakiki Deri Sandalet',
    subtitle: 'Zarif & Şık Yazlık Bayan Sandalet',
    category: 'Bayan Comfort Sandalet',
    tagline: 'Yazın sıcak günlerinde hem şıklık hem anatomik konfor',
    description: 'Yumuşacık çapraz deri bantları ve bilekten cırtlı/tokalı kilit mekanizması ile ayağı güvenle sarar. Ayak tabanının doğal yapısını destekleyen hafif esnek tabanı sayesinde uzun yürüyüşlerde yorgunluk hissettirmez.',
    image: '',
    secondaryImage: '',
    materials: ['Süper Yumuşak Dana Derisi', 'Anatomik Esnek Taban', 'Deri Kaplı Soft Tabanlık'],
    dimensions: 'Numara Aralığı: 36 - 40 | Taban Yüksekliği: 3 cm',
    leatherGrades: ['Nappa Yumuşak Deri'],
    colors: [
      { name: 'Konyak Taba', hex: '#9E5B2B' },
      { name: 'Gece Siyahı', hex: '#111111' },
      { name: 'Kum Beji', hex: '#E2D3C1' }
    ],
    features: [
      'Bileği rahatsız etmeyen özel yumuşatılmış deri bantlar',
      'Sürtünmeyi ve vurmayı önleyen kesintisiz dikiş yapısı',
      'Esnek ve hafif ergonomik yazlık taban',
      'Şok emici topuk dolgusu'
    ],
    isFeatured: true
  },
  {
    id: 'mantar-taban-comfort-terlik',
    name: 'İrem Comfort Doğal Mantar Taban Hakiki Deri Terlik',
    subtitle: 'Hakiki Süet Astar Kaplamalı Anatomik Terlik',
    category: 'Mantar Taban Terlik',
    tagline: 'Doğal mantar esnekliği ve süet dokusunun eşsiz uyumu',
    description: 'Doğal mantar ve kauçuk karışımı özel tabanlık, giyildikçe ayağınızın formunu alarak kişiselleştirilmiş bir konfor sunar. Üst saya hakiki deriden üretilmiş olup iç tabanlığı hakiki süet deri ile kaplanmıştır.',
    image: '',
    secondaryImage: '',
    materials: ['Hakiki Deri Saya', 'Doğal Mantar-Lateks Taban', 'Hakiki Süet İç Astar'],
    dimensions: 'Numara Aralığı: 36 - 41 | Taban Yüksekliği: 2.5 cm',
    leatherGrades: ['Hakiki Deri & Süet Astar'],
    colors: [
      { name: 'Toprak Taba', hex: '#8B5A2B' },
      { name: 'Zeytin Yeşili', hex: '#556B2F' },
      { name: 'Mat Siyah', hex: '#2B2B2B' }
    ],
    features: [
      'Ayağın şeklini alan doğal mantar taban çekirdeği',
      'Nem emici hakiki süet deri iç kaplama',
      'Kaymayı önleyen alt kauçuk EVA taban',
      'Ayarlanabilir kemer tokası'
    ],
    isFeatured: true
  },
  {
    id: 'dolgu-topuk-sandalet',
    name: 'İrem Comfort Dolgu Topuk Hakiki Deri Sandalet',
    subtitle: 'Ortopedik Dolgu Tabanlı Şık Sandalet',
    category: 'Bayan Comfort Sandalet',
    tagline: 'Yükseklik ve zarafet arayanlar için dengeli dolgu taban',
    description: 'Ayağı yormayan ideal eğime sahip dolgu topuklu özel tasarım. Ön bantlarındaki yumuşatılmış deri kaplama parmak sürtünmelerini engeller. Hem günlük elbiselerle hem şık kombinlerle rahatça kullanılabilir.',
    image: '',
    secondaryImage: '',
    materials: ['Hakiki Deri Saya', 'Hafif Poliüretan Dolgu Taban', 'Soft Pedli Tabanlık'],
    dimensions: 'Numara Aralığı: 36 - 40 | Topuk Yüksekliği: 6 cm (Ön Platform: 2 cm)',
    leatherGrades: ['Nappa & Anilin Deri'],
    colors: [
      { name: 'Asil Siyah', hex: '#111111' },
      { name: 'Altın Vizon', hex: '#C5A059' },
      { name: 'Sütlü Kahve', hex: '#8C6D58' }
    ],
    features: [
      'Ağırlığı öne bindirmeyen dengeli dolgu kalıbı',
      'Yumuşak sünger destekli deri iç taban',
      'Bileği sağlam kavrayan esnek tokalı bant',
      'Sarsıntı önleyici hafif poliüretan gövde'
    ]
  },
  {
    id: 'cirt-cirtli-genis-terlik',
    name: 'İrem Comfort Cırt Cırtlı Genişletilebilir Comfort Terlik',
    subtitle: 'Taraklı & Hassas Ayaklar İçin Özel Terlik',
    category: 'Bayan Comfort Terlik',
    tagline: 'Ödemli veya taraklı ayaklar için kolayca genişleyen hakiki deri',
    description: 'Ayağında tarak, ödem veya hassasiyet bulunan kadınlar için özel olarak tasarlanmıştır. Geniş cırt bantları sayesinde ayağın şişliğine göre milimetrik olarak ayarlanabilir. İçi ekstra yumuşak jel dolguludur.',
    image: '',
    secondaryImage: '',
    materials: ['Geniş Esnek Hakiki Deri', 'Jel Dolgulu Anatomik Taban', 'Cırt Cırtlı Bant'],
    dimensions: 'Numara Aralığı: 36 - 41 | Taban Yüksekliği: 3.5 cm',
    leatherGrades: ['Yumuşak Hakiki Deri'],
    colors: [
      { name: 'Bordo Gül', hex: '#800020' },
      { name: 'Klasik Siyah', hex: '#1C1C1C' },
      { name: 'Bej Bronz', hex: '#D2B48C' }
    ],
    features: [
      'Milimetrik cırt cırt genişlik ayarı',
      'Taraklı ve hassas ayaklara tam uyum',
      'Darbe emici jel destekli iç tabanık',
      'Ekstra esnek yan deri kaplamalar'
    ]
  }
];

export const CRAFTSMANSHIP_STEPS: CraftsmanshipStep[] = [
  {
    number: '01',
    title: 'Hakiki Deri Seçimi',
    subtitle: 'En Üst Kalite Anilin & Nappa Dana Derileri',
    description: 'İrem Comfort imalatında sadece yumuşak, gözenekli ve nefes alan %100 hakiki deri tabakaları seçilir. Sentetik kaplamalı suni deriler kesinlikle imalathanemize giremez.',
    detailPoints: [
      '%100 Hakiki dana ve kuzu derisi saya kalitesi',
      'Nefes alabilen terleme ve koku önleyici gözenekler',
      'Ayak yapısına hızla esneyip uyum sağlayan yumuşak doku',
      'Yırtılma ve dikiş mukavemet testlerinden geçmiş hakiki deriler'
    ],
    image: '',
    iconName: 'ShieldCheck'
  },
  {
    number: '02',
    title: 'Hassas Kesim ve Saya Dikişi',
    subtitle: 'Manisa Atölyemizde Usta Zanaatkarların Dokunuşu',
    description: 'Seçilen deriler ayakkabı kalıplarına uygun olarak milimetrik hassasiyetle kesilir. Saya parçaları dayanıklı iplerle elde ve özel dikiş makinelerinde titizlikle birleştirilir.',
    detailPoints: [
      'Ayağı vurmayan gizli dikiş ve biye teknikleri',
      'Aşınmaya dayanıklı yüksek mukavemetli iplikler',
      'Ayarlanabilir kemer ve tokalı montaj detayları',
      'Her numaraya özel anatomik saya kalıp uyumu'
    ],
    image: '',
    iconName: 'Sparkles'
  },
  {
    number: '03',
    title: 'Anatomik Taban Montajı',
    subtitle: 'Ortopedik Kavis ve Jel Ped Desteği',
    description: 'Terlik ve sandaletlerimizin rahatlığının kalbinde anatomik taban teknolojisi yatar. Ayak kavislerini destekleyen poliüretan ve mantar tabanlıklar saya ile birleştirilir.',
    detailPoints: [
      'Aksis ve kavis destekli anatomik iç tabanlık',
      'Topuk dikeni ve nasır baskısını azaltan özel jel dolgu',
      'Darbe ve sarsıntıları emen esnek poliüretan alt taban',
      'Kaymaz alt taban deseni'
    ],
    image: '',
    iconName: 'Cpu'
  },
  {
    number: '04',
    title: 'Final Kalite Kontrolü',
    subtitle: 'Manisa Ayakkabıcılar Sitesi İmalat Güvencesi',
    description: 'Üretim bandından çıkan her bir terlik ve sandalet teker teker incelenir. Deri yüzeyi temizlenir, kalıp kontrolleri yapılır ve ambalajlanarak sevkiyata hazırlanır.',
    detailPoints: [
      'Dikiş, yapıştırma ve taban mukavemet kontrolü',
      'Çiftler arası renk ve ton uyum incelemesi',
      'Doğal deri bakım spreyi ile parlaklık verme',
      '%100 Yerli İmalat ve Üretici Güvencesi'
    ],
    image: '',
    iconName: 'Award'
  }
];

export const WHY_US_CARDS: WhyUsCard[] = [
  {
    id: 'leather',
    title: '%100 Hakiki Deri',
    subtitle: 'Kaliteli Saya & İç Astar',
    description: 'Tüm bayan comfort terlik ve sandaletlerimizde %100 hakiki deri kullanıyoruz. Nefes alan yapısıyla koku ve terlemeyi önler.',
    metric: '%100',
    metricLabel: 'Hakiki Deri Garantisi',
    iconName: 'Layers'
  },
  {
    id: 'handcrafted',
    title: 'Manisa İmalatı',
    subtitle: 'Ayakkabıcılar Sitesi Atölyesi',
    description: 'Manisa Ayakkabıcılar Sitesindeki atölyemizde tecrübeli ustalarımız tarafından doğrudan imal edilir. Aracı olmadan üretici kalitesi sunuyoruz.',
    metric: 'Manisa',
    metricLabel: 'Yerli İmalat Atölyesi',
    iconName: 'Hammer'
  },
  {
    id: 'comfort',
    title: 'Anatomik Konfor',
    subtitle: 'Ortopedik Taban Desteği',
    description: 'Ayağın doğal kavislerine uyum sağlayan özel tabanlıklar sayesinde gün boyu ayakta kalsanız dahi yorgunluk hissetmezsiniz.',
    metric: 'Anatomik',
    metricLabel: 'Yumuşak Taban',
    iconName: 'HeartPulse'
  },
  {
    id: 'design',
    title: 'Zamansız Model Seçenekleri',
    subtitle: 'Sandalet, Sabo & Terlik',
    description: 'Çift tokalı klasiklerden ortopedik sabo ve yazlık sandaletlere kadar zengin model ve renk çeşitliliği sunuyoruz.',
    metric: 'Zengin',
    metricLabel: 'Renk & Model Çeşitliliği',
    iconName: 'Compass'
  },
  {
    id: 'quality',
    title: 'Toptan & Perakende',
    subtitle: 'Müşteri Memnuniyeti Güvencesi',
    description: 'Türkiye genelinde mağaza tedariği, toptan satış ve perakende sipariş imkanı ile doğrudan imalatçı avantajı.',
    metric: 'İmalatçı',
    metricLabel: 'Doğrudan Sipariş',
    iconName: 'ShieldCheck'
  }
];

export const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  { id:'faq-1', category:'toptan', question:'Toptan sipariş için minimum adet nedir?', answer:'Toptan siparişler seri ve model bazında planlanır. Minimum sipariş miktarı seçilen modele, renge ve numara dağılımına göre değişebilir. İhtiyacınızı iletin; ekibimiz size uygun seri planını paylaşsın.', isPopular:true, isActive:true },
  { id:'faq-2', category:'toptan', question:'Üretim ve sipariş termin süresi ne kadar?', answer:'Toptan siparişlerde üretim ve hazırlık termini siparişin kapsamına göre 15–75 gün arasında değişir. Model, renk, adet ve üretim planı netleştiğinde tahmini termin karşılıklı olarak teyit edilir.', isPopular:true, isActive:true },
  { id:'faq-3', category:'toptan', question:'Kendi markam için özel üretim yaptırabilir miyim?', answer:'Özel marka, renk ve model talepleri değerlendirilebilir. Uygunluk; istenen model, malzeme, renk ve üretim adedine göre belirlenir. Ayrıntıları toptan satış ekibimizle görüşebilirsiniz.', isPopular:true, isActive:true },
  { id:'faq-4', category:'toptan', question:'Toptan ürün kataloğunu ve fiyat bilgisini nasıl alabilirim?', answer:'Web sitemizdeki Teklif Sepeti veya İletişim/WhatsApp kanalı üzerinden ilgilendiğiniz modelleri iletebilirsiniz. Ekibimiz güncel katalog ve fiyat bilgisi için sizinle iletişime geçer.', isPopular:true, isActive:true },
  { id:'faq-5', category:'toptan', question:'Renk ve numara dağılımını siparişte belirleyebilir miyim?', answer:'Modelin üretim ve seri seçeneklerine bağlı olarak renk ve numara dağılımı sipariş aşamasında birlikte planlanır. İstediğiniz dağılımı teklif talebinizde belirtmeniz yeterlidir.', isPopular:false, isActive:true },
  { id:'faq-6', category:'kargo', question:'Yurt dışına gönderim yapıyor musunuz?', answer:'İhracat ve yurt dışı gönderim taleplerinizi ülke, ürün ve sipariş kapsamıyla birlikte ekibimize iletebilirsiniz. Uygun gönderim ve teslim koşulları talep bazında değerlendirilir.', isPopular:true, isActive:true },
  { id:'faq-7', category:'kargo', question:'Siparişimin teslimat süreci nasıl belirleniyor?', answer:'Toptan siparişlerde teslimat planı 15–75 günlük üretim/termin aralığı ve sipariş kapsamı dikkate alınarak oluşturulur. Net plan, sipariş detayları karşılıklı teyit edildiğinde paylaşılır.', isPopular:false, isActive:true },
  { id:'faq-8', category:'bakim', question:'Hakiki deri terlik ve sandaletlerin bakımını nasıl yapmalıyım?', answer:'Deri yüzeyini yumuşak, hafif nemli bir bezle nazikçe silin. Ürünü suya batırmayın; doğrudan güneş, kalorifer veya yüksek ısıyla kurutmayın. Gerektiğinde hakiki deriye uygun bakım ürünü kullanın.', isPopular:true, isActive:true },
  { id:'faq-9', category:'bakim', question:'Deri ürün ıslanırsa ne yapmalıyım?', answer:'Fazla nemi kuru ve yumuşak bir bezle alın. Ürünü oda sıcaklığında, doğrudan ısıdan uzakta kurumaya bırakın. Islak deriyi fön makinesi veya kaloriferle kurutmayın.', isPopular:false, isActive:true },
  { id:'faq-10', category:'kalip', question:'Hangi numaralar mevcut?', answer:'Numara aralığı modele göre değişebilir. İlgilendiğiniz modelin ürün detayındaki renk ve numara seçeneklerini inceleyebilir veya ekibimizden model bazında bilgi alabilirsiniz.', isPopular:true, isActive:true },
  { id:'faq-11', category:'kalip', question:'Ayak numaramdan emin değilsem nasıl seçim yapmalıyım?', answer:'Daha önce rahat kullandığınız ayakkabı numarasını başlangıç noktası olarak alın. Ayak yapınız genişse veya iki numara arasında kalıyorsanız, model adını belirterek ekibimizden kalıp önerisi isteyin.', isPopular:false, isActive:true },
  { id:'faq-12', category:'genel', question:'Ürünleri yakından görmek için atölyeyi ziyaret edebilir miyim?', answer:'Atölye ve koleksiyon görüşmeleri için Randevu sayfasından talep oluşturabilir veya iletişim hattımızdan uygun zamanı birlikte planlayabilirsiniz.', isPopular:false, isActive:true },
  { id:'faq-13', category:'genel', question:'Bir model hakkında özel soru nasıl iletebilirim?', answer:'Ürün detayındaki Teklif Sepeti veya WhatsApp/İletişim kanallarını kullanabilirsiniz. Model adını, istediğiniz rengi ve varsa numara/adet ihtiyacınızı yazmanız yanıt sürecini hızlandırır.', isPopular:true, isActive:true }
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Selin Yıldırım — Elegance Butik',
    role: 'Toptan Mağaza İşletmecisi',
    location: 'İzmir, Alsancak',
    rating: 5,
    comment: '3 sezondur mağazamız için İrem Comfort’tan toptan sandalet ve terlik alıyoruz. Müşterilerimiz kalıbına ve derisinin yumuşaklığına bayılıyor. Seri teslimatlar zamanında yapılıyor, Manisa atölye ekibine teşekkürler.',
    productName: 'İrem Comfort Çift Tokalı Hakiki Deri Terlik',
    date: '12 Mayıs 2026',
    type: 'toptan',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Op. Dr. Aysel B.',
    role: 'Bireysel Müşteri (Ortopedik Sabo)',
    location: 'İstanbul',
    rating: 5,
    comment: 'Hastanede 12 saatlik nöbetlerimde ayak tabanlarım ciddi şekilde ağrıyordu. İrem Comfort ortopedik deri sabo terliği tavsiye üzerine aldım. İlk günden beri topuk ağrım bitti. Derisi nefes alıyor, terleme sıfır.',
    productName: 'Hakiki Deri Ortopedik Sabo Terlik',
    date: '28 Nisan 2026',
    type: 'perakende',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Murat Kundura & Ayakkabı',
    role: 'Toplu Mağaza Siparişi',
    location: 'Ankara',
    rating: 5,
    comment: 'Ankara’daki ayakkabı mağazalarımız için verdiğimiz serili siparişlerde dikiş kalitesi ve deri işçiliği mükemmel. Fuar vesilesiyle tanışmıştık, yıllardır kesintisiz çalışıyoruz.',
    productName: 'Çapraz Bantlı Hakiki Deri Sandalet',
    date: '04 Haziran 2026',
    type: 'toptan',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Zeynep K.',
    role: 'Günlük Kullanıcı',
    location: 'Bursa',
    rating: 5,
    comment: 'Trendyol Anavelle mağazanızdan sipariş verdim. Ertesi gün kargolandı. Kutuyu açtığımda mis gibi gerçek deri kokuyordu. Tabanı tam ortopedik, tatile giderken yanımdan ayırmayacağım.',
    productName: 'İrem Comfort Çift Tokalı Terlik (Taba)',
    date: '18 Haziran 2026',
    type: 'perakende',
    verified: true
  }
];




// Premium product fallbacks used only when the media library does not yet contain a product image.
export const PREMIUM_PRODUCT_IMAGE_FALLBACKS: string[] = [
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=85&w=1200'
];
