import { useState, useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  ChevronDown,
  Menu,
  X,
  Wrench,
  Zap,
  Shield,
  Settings,
  Battery,
  Droplets,
  Wind,
  AlertTriangle,
  MessageCircle,
  ArrowRight,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  Play,
} from "lucide-react";

// ── Social icons not in lucide-react as SVGs ───────────────────────────
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.17 8.17 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Droplets,
    title: "Ganti Oli & Filter",
    desc: "Ganti oli mesin, oli gardan, dan filter udara menggunakan produk berkualitas tinggi sesuai spesifikasi motor Anda.",
    price: "Mulai Rp 100.000",
  },
  {
    icon: Settings,
    title: "Tune Up Lengkap",
    desc: "Servis besar mencakup busi, karburator/injeksi, klep, rantai, dan semua komponen penting agar performa motor optimal.",
    price: "Mulai Rp 150.000",
  },
  {
    icon: Battery,
    title: "Ganti Aki & Kelistrikan",
    desc: "Penggantian aki dan perbaikan kelistrikan motor seperti lampu, klakson, starter, dan sistem pengisian daya.",
    price: "Mulai Rp 150.000",
  },
  {
    icon: Wind,
    title: "Ganti Ban Tubeless",
    desc: "Ganti ban depan maupun belakang, balancing roda, dan pemasangan ban tubeless untuk kenyamanan berkendara.",
    price: "Mulai Rp 100.000",
  },
  {
    icon: AlertTriangle,
    title: "Perbaikan Rem & Kampas",
    desc: "Penggantian kampas rem, minyak rem, kabel rem, serta penyetelan rem agar tetap pakem dan aman dikendarai.",
    price: "Mulai Rp 100.000",
  },
  {
    icon: Wrench,
    title: "Perbaikan Mesin",
    desc: "Diagnosa dan perbaikan mesin menyeluruh: bore-up, overhaul, bongkar mesin, hingga ganti piston dan ring piston.",
    price: "Mulai Rp 250.000",
  },
  {
    icon: Zap,
    title: "Servis Karburator/Injeksi",
    desc: "Bersih-bersih karburator, kalibrasi injeksi (ECU reset), penggantian nozzle, dan penyetelan idle mesin.",
    price: "Mulai Rp 150.000",
  },
  {
    icon: Shield,
    title: "Inspeksi & Diagnosis",
    desc: "Cek menyeluruh kondisi motor menggunakan alat diagnosis modern, termasuk laporan kondisi dan estimasi servis.",
    price: "Gratis konsultasi",
  },
];

const AREAS = [
  "Jakarta Timur",
  "Jakarta Selatan",
  "Jakarta Utara",
  "Jakarta Barat",
  "Jakarta Pusat",
  "Depok",
  "Bekasi",
  "Tangerang",
  "Tangerang Selatan",
  "Bogor",
];

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    area: "Cibubur, Jakarta Timur",
    rating: 5,
    text: "Motor saya mogok mendadak pagi-pagi mau berangkat kerja. Langsung WA servismotor, 30 menit teknisinya sudah sampai. Masalah kelistrikan langsung beres di tempat. Harga transparan, tidak ada biaya tersembunyi. Highly recommended!",
    vehicle: "Honda Vario 125",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Sari Dewi",
    area: "Cimanggis, Depok",
    rating: 5,
    text: "Sebagai ibu rumah tangga, saya sering khawatir kalau motor tiba-tiba bermasalah. servismotor memberikan layanan yang sangat profesional dan teknisinya ramah. Nggak perlu dorong motor jauh-jauh ke bengkel lagi!",
    vehicle: "Yamaha Mio M3",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Ahmad Fauzi",
    area: "Bekasi Barat",
    rating: 5,
    text: "Sudah 3 kali pakai jasa servismotor untuk servis rutin Honda CBR saya. Hasil kerjanya rapih, spare part ori, dan tepat waktu. Sudah jadi langganan tetap. Teknisinya juga mau jelasin detail kondisi motor kita.",
    vehicle: "Honda CBR 150R",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Rina Wulandari",
    area: "Serpong, Tangerang Selatan",
    rating: 5,
    text: "Ban motor saya bocor di tengah jalan pas hujan deras. Panik banget. Langsung hubungi servismotor dan dalam 25 menit teknisi sudah datang dengan perlengkapan lengkap. Sangat menolong, terima kasih banyak!",
    vehicle: "Yamaha NMAX",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format",
  },
];

const TEAM = [
  {
    name: "Hendra Kusuma",
    role: "Kepala Mekanik & Founder",
    exp: "15 tahun pengalaman",
    spec: "Spesialis mesin & injeksi",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Rizky Pratama",
    role: "Mekanik Senior",
    exp: "10 tahun pengalaman",
    spec: "Spesialis kelistrikan motor",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Dian Purnama",
    role: "Mekanik Senior",
    exp: "8 tahun pengalaman",
    spec: "Spesialis ban & suspensi",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Fajar Nugroho",
    role: "Mekanik",
    exp: "5 tahun pengalaman",
    spec: "Tune up & servis berkala",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&auto=format",
  },
];

const FAQS = [
  {
    q: "Berapa lama waktu tunggu setelah pesan layanan?",
    a: "Kami berkomitmen datang dalam waktu 15-45 menit tergantung lokasi dan kepadatan jadwal. Untuk area Jakarta pusat umumnya lebih cepat. Kami akan konfirmasi estimasi waktu kedatangan segera setelah Anda menghubungi kami.",
  },
  {
    q: "Apakah spare part yang digunakan ori atau KW?",
    a: "Kami hanya menggunakan spare part original (OEM) atau spare part branded berkualitas tinggi. Setiap penggantian part disertai struk pembelian dan Anda dapat memilih merek part yang diinginkan.",
  },
  {
    q: "Bagaimana cara memesan layanan bengkel panggilan?",
    a: "Sangat mudah! Hubungi kami via WhatsApp di 085199558339, sampaikan jenis motor, keluhan, dan lokasi Anda. Tim kami akan segera merespons dan mengirim teknisi terdekat ke lokasi Anda.",
  },
  {
    q: "Apakah ada biaya tambahan selain servis?",
    a: "Tidak ada biaya tersembunyi. Kami akan memberikan estimasi biaya sebelum pekerjaan dimulai. Biaya yang Anda bayar hanya untuk jasa servis dan spare part yang digunakan. Ongkos panggilan gratis untuk area layanan kami.",
  },
  {
    q: "Motor merek apa saja yang bisa ditangani?",
    a: "Kami menangani semua merek motor populer di Indonesia: Honda, Yamaha, Suzuki, Kawasaki, TVS, dan merek lainnya. Baik matik, bebek, maupun sport. Teknisi kami berpengalaman dan terlatih untuk semua jenis motor.",
  },
  {
    q: "Apakah ada garansi setelah servis?",
    a: "Ya! Kami memberikan garansi jasa servis selama 10 hari dan garansi spare part sesuai ketentuan produsen. Jika ada masalah setelah servis dalam periode garansi, kami akan datang kembali tanpa biaya tambahan.",
  },
  {
    q: "Jam operasional bengkel panggilan ini?",
    a: "Kami beroperasi setiap hari Senin–Sabtu pukul 07.00–20.00 WIB. Untuk kondisi darurat di luar jam operasional, silakan hubungi kami via WhatsApp dan kami akan berusaha membantu semaksimal mungkin.",
  },
];

const CLIENTS = [
  "Gojek",
  "Grab",
  "Shopee",
  "Tokopedia",
  "JNE",
  "J&T Express",
  "SiCepat",
  "Anteraja",
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/montirmotorcom", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/montirmotor", label: "Twitter / X" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577896539396", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/in/montirmotor", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@montirmotor-com", label: "YouTube" },
  { icon: TiktokIcon, href: "https://www.tiktok.com/@montirmotor.com", label: "TikTok" },
  { icon: PinterestIcon, href: "https://www.pinterest.com/servismotor", label: "Pinterest" },
];

// ── JSON-LD Schema ─────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "servismotor",
  "alternateName": "Servis Motor Panggilan Jakarta",
  "description": "Servis Motor panggilan terpercaya di Jakarta, Depok, Bekasi, Tangerang, dan Bogor. Teknisi berpengalaman datang ke lokasi Anda. Servis cepat, harga transparan, spare part ori.",
  "url": "https://servismotor.biz.id",
  "telephone": "+6285199558339",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Al-Bariyah, Kampung Tengah, Kramat Jati",
    "addressLocality": "Jakarta Timur",
    "addressRegion": "DKI Jakarta",
    "addressCountry": "ID",
    "postalCode": "13540",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.2615",
    "longitude": "106.8710",
  },
  "areaServed": [
    "Jakarta Timur", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Pusat",
    "Depok", "Bekasi", "Tangerang", "Tangerang Selatan", "Bogor",
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "20:00",
    },
  ],
  "priceRange": "Rp 100.000 - Rp 500.000",
  "currenciesAccepted": "IDR",
  "paymentAccepted": "Cash, Transfer Bank, QRIS, GoPay, OVO",
  "sameAs": [
    "https://www.instagram.com/montirmotorcom",
    "https://www.facebook.com/profile.php?id=61577896539396",
    "https://montirmotor.com",
  ],
};

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

// ── Component ──────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", vehicle: "", message: "" });

  useEffect(() => {
    // SEO meta tags
    document.title = "ServisMotor | Servis Motor Panggilan Jakarta, Depok, Bekasi, Tangerang, Bogor";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "ServisMotor - Servis Motor panggilan profesional di Jakarta, Depok, Bekasi, Tangerang, dan Bogor. Teknisi berpengalaman datang ke lokasi Anda. Satu Panggilan, Motor Langsung Jalan! Hubungi 085199558339.");
    setMeta("keywords", "Servis Motor panggilan, servis motor panggilan Jakarta, Servis Motor keliling, mekanik motor datang ke rumah, servis motor Jakarta Timur, bengkel panggilan Depok Bekasi Tangerang Bogor");
    setMeta("robots", "index, follow");
    setMeta("author", "servismotor");
    setMeta("geo.region", "ID-JK");
    setMeta("geo.placename", "Jakarta, Indonesia");
    setMeta("og:title", "servismotor | Servis Motor Panggilan Jabodetabek", true);
    setMeta("og:description", "Satu Panggilan, Motor Langsung Jalan! Teknisi profesional datang ke lokasi Anda di Jakarta, Depok, Bekasi, Tangerang, dan Bogor.", true);
    setMeta("og:url", "https://servismotor.biz.id", true);
    setMeta("og:type", "website", true);

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://servismotor.biz.id");

    // JSON-LD
    const addSchema = (data: object, id: string) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };
    addSchema(schemaData, "schema-local-business");
    addSchema(faqSchemaData, "schema-faq");

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const waLink = "https://wa.me/6285199558339";
  const waLinkWithMsg = (msg: string) =>
    `https://wa.me/6285199558339?text=${encodeURIComponent(msg)}`;

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo servismotor! Saya ${contactForm.name}, ingin servis motor ${contactForm.vehicle}.\n\nNomor HP: ${contactForm.phone}\n\nPesan: ${contactForm.message}`;
    window.open(waLinkWithMsg(msg), "_blank");
  };

  const navItems = [
    { label: "Layanan", id: "layanan" },
    { label: "Testimoni", id: "testimoni" },
    { label: "Tim Kami", id: "tim" },
    { label: "Tentang", id: "tentang" },
    { label: "FAQ", id: "faq" },
    { label: "Kontak", id: "kontak" },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* ── Navbar ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-background/95 backdrop-blur-sm shadow-md border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="https://montirmotor.com"
            className="flex items-center gap-2"
            aria-label="servismotor - Home"
          >
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <span
              className="font-extrabold text-lg leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              <span style={{ color: "#268BD2" }}>Bengkel</span>
              <span style={{ color: "#CB4B16" }}>Motor</span>
              <span style={{ color: "#073642" }}>Panggilan</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-[#1ebe5d] transition-colors"
            >
              <WhatsAppIcon />
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-full hover:bg-[#1ebe5d] transition-colors mt-2"
            >
              <WhatsAppIcon />
              Hubungi via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&auto=format"
            alt="Teknisi Servis Motor profesional sedang bekerja"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,48,71,0.88) 0%, rgba(7,54,66,0.75) 50%, rgba(38,139,210,0.45) 100%)",
            }}
          />
        </div>

        {/* Decorative accent */}
        <div
          className="absolute top-24 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "#CB4B16" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "#268BD2" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#859900] rounded-full animate-pulse" />
              Melayani Jabodetabek · Buka Setiap Hari
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span style={{ color: "#FDF6E3" }}>Satu Panggilan,</span>
              <br />
              <span style={{ color: "#CB4B16" }}>Motor</span>
              <span style={{ color: "#268BD2" }}> Langsung</span>
              <br />
              <span style={{ color: "#FDF6E3" }}>Jalan!</span>
            </h1>

            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
              <strong className="text-white">servismotor</strong> - layanan servis
              motor profesional yang langsung datang ke lokasi Anda. Teknisi bersertifikat,
              spare part original, harga transparan. Melayani Jakarta, Depok, Bekasi,
              Tangerang &amp; Bogor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLinkWithMsg("Halo servismotor! Saya butuh servis motor segera. Tolong kirim teknisi ke lokasi saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-[#1ebe5d] transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon />
                Pesan Sekarang
              </a>
              <a
                href="https://wa.me/6285199558339"
                className="flex items-center justify-center gap-3 bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-white/25 transition-all"
              >
                <Phone className="w-5 h-5" />
                0851-9955-8339
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
              {[
                { num: "2.500+", label: "Motor Selesai Diservis" },
                { num: "15–45", label: "Menit Waktu Tiba" },
                { num: "98%", label: "Tingkat Kepuasan" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-extrabold text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="hidden md:block">
            <div
              className="rounded-3xl p-8 border border-white/20 backdrop-blur-sm"
              style={{ background: "rgba(253,246,227,0.1)" }}
            >
              <h2
                className="text-white font-extrabold text-2xl mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Kenapa Pilih Kami?
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Solusi servis motor paling praktis di Jabodetabek
              </p>
              {[
                { icon: CheckCircle, text: "Teknisi datang ke lokasi Anda dalam 15–45 menit" },
                { icon: Shield, text: "Garansi jasa servis 10 hari + spare part ori" },
                { icon: Clock, text: "Buka Senin–Sabtu, 07.00–20.00 WIB" },
                { icon: CheckCircle, text: "Harga transparan, estimasi sebelum kerja mulai" },
                { icon: MapPin, text: "Melayani kota di wilayah Jabodetabek" },
                { icon: Wrench, text: "Mekanik bersertifikat & berpengalaman 5–15 tahun" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#859900" }} />
                  <span className="text-white/90 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ── Coverage Banner ─────────────────────────────────── */}
      <div
        className="border-y border-border py-4 overflow-hidden"
        style={{ background: "#EEE8D5" }}
        aria-label="Area layanan"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mr-2">
              Area Layanan:
            </span>
            {AREAS.map((area, i) => (
              <span key={area} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#073642" }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: "#268BD2" }} />
                {area}
                {i < AREAS.length - 1 && (
                  <span className="text-border hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Layanan ─────────────────────────────────────────── */}
      <section id="layanan" className="py-20 px-4 sm:px-6" aria-labelledby="layanan-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full"
              style={{ background: "#EEE8D5", color: "#CB4B16" }}
            >
              Layanan Kami
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              id="layanan-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Semua Kebutuhan Motor,{" "}
              <span style={{ color: "#268BD2" }}>Kami Tangani</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dari servis ringan hingga perbaikan mesin berat, teknisi kami siap datang ke
              lokasi Anda dengan peralatan lengkap dan spare part berkualitas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => (
              <article
                key={i}
                className="group rounded-2xl p-6 border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary"
                  style={{ background: "#EEE8D5" }}
                >
                  <svc.icon
                    className="w-6 h-6 transition-colors group-hover:text-white"
                    style={{ color: "#268BD2" }}
                  />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  itemProp="name"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3" itemProp="description">
                  {svc.desc}
                </p>
                <span
                  className="text-xs font-bold"
                  itemProp="offers"
                  style={{ color: "#CB4B16" }}
                >
                  {svc.price}
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={waLinkWithMsg("Halo! Saya ingin tanya lebih lanjut tentang layanan servismotor.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "#268BD2" }}
            >
              Tanya Layanan Lainnya
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Our Clients ─────────────────────────────────────── */}
      <section
        id="klien"
        className="py-16 px-4 sm:px-6 border-y border-border"
        style={{ background: "#EEE8D5" }}
        aria-labelledby="klien-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-background"
              style={{ color: "#268BD2" }}
            >
              Klien & Mitra Kami
            </span>
            <h2
              className="text-2xl sm:text-3xl font-extrabold"
              id="klien-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Dipercaya oleh Perusahaan Logistik &amp; Kurir Terkemuka
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="bg-background rounded-xl py-5 px-4 flex items-center justify-center border border-border"
              >
                <span
                  className="font-extrabold text-lg tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#657B83" }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimoni ───────────────────────────────────────── */}
      <section id="testimoni" className="py-20 px-4 sm:px-6" aria-labelledby="testi-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full"
              style={{ background: "#EEE8D5", color: "#CB4B16" }}
            >
              Testimoni Pelanggan
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              id="testi-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Apa Kata Pelanggan <span style={{ color: "#268BD2" }}>Kami?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ribuan pelanggan puas telah mempercayakan perawatan motor mereka kepada
              servismotor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6" itemScope itemType="https://schema.org/ItemList">
            {TESTIMONIALS.map((testi, i) => (
              <article
                key={i}
                className="rounded-2xl p-7 border border-border bg-card"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-start gap-1 mb-4">
                  {Array.from({ length: testi.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#B58900" }} />
                  ))}
                </div>
                <blockquote
                  className="text-foreground/90 leading-relaxed mb-6 italic"
                  itemProp="reviewBody"
                >
                  &ldquo;{testi.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testi.photo}
                    alt={`Foto ${testi.name}`}
                    className="w-11 h-11 rounded-full object-cover bg-muted"
                    loading="lazy"
                  />
                  <div>
                    <div
                      className="font-bold text-sm"
                      itemProp="author"
                      style={{ color: "#073642", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {testi.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testi.area} · {testi.vehicle}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Average rating */}
          <div
            className="mt-10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
            style={{ background: "#EEE8D5" }}
          >
            <div>
              <div
                className="text-5xl font-extrabold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
              >
                4.9
              </div>
              <div className="flex justify-center gap-0.5 my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#B58900" }} />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Rating rata-rata</div>
            </div>
            <div className="w-px h-16 bg-border hidden sm:block" />
            <div>
              <div
                className="text-5xl font-extrabold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
              >
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Ulasan positif</div>
            </div>
            <div className="w-px h-16 bg-border hidden sm:block" />
            <div>
              <div
                className="text-5xl font-extrabold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
              >
                98%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Pelanggan repeat order</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tim Kami ─────────────────────────────────────────── */}
      <section
        id="tim"
        className="py-20 px-4 sm:px-6 border-t border-border"
        style={{ background: "#EEE8D5" }}
        aria-labelledby="tim-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-background"
              style={{ color: "#CB4B16" }}
            >
              Tim Profesional
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              id="tim-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Kenali <span style={{ color: "#268BD2" }}>Mekanik Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Teknisi kami adalah lulusan SMK/STM Otomotif bersertifikat, telah terlatih
              dan berpengalaman menangani berbagai merek dan tipe motor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <article key={i} className="rounded-2xl overflow-hidden bg-background border border-border group">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={`Foto ${member.name}, ${member.role} servismotor`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: "#268BD2" }}
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="font-extrabold text-base"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: "#268BD2" }}>
                    {member.role}
                  </p>
                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: "#859900" }} />
                      {member.exp}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" style={{ color: "#859900" }} />
                      {member.spec}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tentang Kami ─────────────────────────────────────── */}
      <section id="tentang" className="py-20 px-4 sm:px-6" aria-labelledby="tentang-heading">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-muted">
              <img
                src="https://images.unsplash.com/photo-1568772585407-9f217254e8ab?w=700&h=525&fit=crop&auto=format"
                alt="Teknisi servismotor sedang memperbaiki motor di lokasi pelanggan"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-xl border border-border"
              style={{ background: "#FDF6E3" }}
            >
              <div
                className="text-3xl font-extrabold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
              >
                2025
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Berdiri sejak</div>
            </div>
          </div>

          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full"
              style={{ background: "#EEE8D5", color: "#CB4B16" }}
            >
              Tentang Kami
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight"
              id="tentang-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Servis Motor Panggilan{" "}
              <span style={{ color: "#268BD2" }}>Terpercaya</span> di Jabodetabek
            </h2>
            <div
              className="prose prose-sm max-w-none space-y-4"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <p className="text-muted-foreground leading-relaxed">
                <strong itemProp="name" className="text-foreground">servismotor</strong>{" "}
                lahir dari keprihatinan kami melihat betapa sulitnya warga Jakarta mendorong
                motor rusak ke bengkel di tengah kemacetan. Sejak 2018, kami hadir sebagai
                solusi servis motor yang praktis dan terpercaya.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beralamat di{" "}
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Jl. Al-Bariyah, Kampung Tengah, Kramat Jati</span>,{" "}
                  <span itemProp="addressLocality">Jakarta Timur</span>,{" "}
                  <span itemProp="addressRegion">DKI Jakarta</span>
                </span>
                , tim mekanik kami bergerak ke seluruh wilayah Jabodetabek membawa peralatan
                lengkap dan spare part berkualitas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami percaya bahwa servis motor yang baik harus transparan, cepat, dan
                terjangkau - tanpa perlu repot. Itulah janji kami kepada setiap pelanggan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Jam Operasional", val: "Sen–Sab, 07.00–20.00" },
                { label: "Wilayah Layanan", val: "10 Kota Jabodetabek" },
                { label: "Pembayaran", val: "Cash, Transfer, QRIS" },
                { label: "Garansi Servis", val: "10 Hari Garansi" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 border border-border bg-card">
                  <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-bold text-sm" style={{ color: "#073642", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 font-bold px-7 py-3.5 rounded-2xl text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "#268BD2" }}
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA Banner ──────────────────────────────── */}
      <section
        className="py-16 px-4 sm:px-6 mx-4 sm:mx-6 my-4 rounded-3xl overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #073642 0%, #002B36 100%)" }}
        aria-label="Call to action WhatsApp"
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "#268BD2" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl"
          style={{ background: "#CB4B16" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Motor Anda Bermasalah <span style={{ color: "#CB4B16" }}>Sekarang?</span>
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Jangan tunda lagi! Hubungi kami via WhatsApp dan teknisi kami akan segera hadir
            ke lokasi Anda. Tanpa biaya panggilan, estimasi harga transparan sebelum servis dimulai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLinkWithMsg("Halo servismotor! Motor saya bermasalah dan butuh teknisi segera. Bisa datang ke lokasi saya?")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-[#1ebe5d] transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <WhatsAppIcon />
              Chat WhatsApp Sekarang
            </a>
            <a
              href="https://wa.me/6285199558339"
              className="flex items-center justify-center gap-3 border-2 border-white/30 text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-6 h-6" />
              0851-9955-8339
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="py-20 px-4 sm:px-6" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full"
              style={{ background: "#EEE8D5", color: "#CB4B16" }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              id="faq-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Pertanyaan yang{" "}
              <span style={{ color: "#268BD2" }}>Sering Ditanyakan</span>
            </h2>
          </div>

          <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span
                    className="font-bold text-sm sm:text-base flex-1"
                    itemProp="name"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                      }`}
                    style={{ color: "#268BD2" }}
                  />
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed" itemProp="text">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Masih punya pertanyaan?{" "}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
              style={{ color: "#268BD2" }}
            >
              Tanya langsung via WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* ── Kontak ──────────────────────────────────────────── */}
      <section
        id="kontak"
        className="py-20 px-4 sm:px-6 border-t border-border"
        style={{ background: "#EEE8D5" }}
        aria-labelledby="kontak-heading"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-background"
              style={{ color: "#CB4B16" }}
            >
              Hubungi Kami
            </span>
            <h2
              className="text-3xl font-extrabold mb-6"
              id="kontak-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Siap Melayani Anda Setiap Saat
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Alamat Kantor",
                  val: "Jl. Al-Bariyah, Kampung Tengah, Kramat Jati, Jakarta Timur, DKI Jakarta",
                },
                { icon: Phone, label: "Nomor Telepon / WhatsApp", val: "0851-9955-8339" },
                { icon: Clock, label: "Jam Operasional", val: "Senin – Sabtu: 07.00 – 20.00 WIB" },
                { icon: MessageCircle, label: "Website", val: "servismotor.biz.id" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#268BD2" }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="font-semibold text-sm" style={{ color: "#073642" }}>
                      {item.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sosmed */}
            <div className="mt-8">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Ikuti Kami di Media Sosial
              </div>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-background border border-border hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form → WA */}
          <div className="bg-background rounded-3xl p-8 border border-border">
            <h3
              className="font-extrabold text-xl mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#073642" }}
            >
              Kirim Pesan via WhatsApp
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Isi form di bawah dan kami akan langsung menghubungi Anda via WhatsApp.
            </p>
            <form onSubmit={handleContact} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5" htmlFor="name">
                  Nama Lengkap *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5" htmlFor="phone">
                  Nomor HP *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Contoh: 08123456789"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5" htmlFor="vehicle">
                  Jenis Motor
                </label>
                <input
                  id="vehicle"
                  type="text"
                  placeholder="Contoh: Honda Vario 125 2022"
                  value={contactForm.vehicle}
                  onChange={(e) => setContactForm({ ...contactForm, vehicle: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5" htmlFor="message">
                  Keluhan / Pesan *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Ceritakan keluhan motor Anda dan lokasi Anda saat ini..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 font-bold py-4 rounded-2xl text-white text-base transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIcon />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer
        className="py-12 px-4 sm:px-6 border-t border-border/40"
        style={{ background: "#002B36", color: "#93A1A1" }}
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span
                  className="font-extrabold text-lg"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span style={{ color: "#268BD2" }}>Bengkel</span>
                  <span style={{ color: "#CB4B16" }}>Motor</span>
                  <span className="text-white">Panggilan</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs">
                <em style={{ color: "#EEE8D5" }}>"Satu Panggilan, Motor Langsung Jalan!"</em>
                <br />
                Layanan servis motor panggilan profesional wilayah Jabodetabek. Teknisi
                bersertifikat, spare part ori, harga transparan.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-primary/60 hover:text-primary transition-colors"
                    style={{ color: "#657B83" }}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4
                className="text-white font-bold text-sm mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Layanan
              </h4>
              <ul className="space-y-2.5 text-sm">
                {["Ganti Oli & Filter", "Tune Up Lengkap", "Ganti Aki", "Ganti Ban", "Perbaikan Rem", "Servis Mesin", "Servis Injeksi", "Inspeksi Motor"].map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo("layanan")}
                      className="hover:text-white transition-colors text-left"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white font-bold text-sm mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Kontak
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#268BD2" }} />
                  <span>Jl. Al-Bariyah, Kampung Tengah, Kramat Jati, Jakarta Timur</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#268BD2" }} />
                  <a href="https://wa.me/6285199558339" className="hover:text-white transition-colors">
                    0851-9955-8339
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "#268BD2" }} />
                  <span>Sen–Sab: 07.00–20.00 WIB</span>
                </li>
                <li className="mt-4">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#1ebe5d] transition-colors"
                  >
                    <WhatsAppIcon />
                    Chat Sekarang
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://servismotor.biz.id"
                className="hover:text-white transition-colors"
              >
                servismotor
              </a>
            </span>
            <div className="flex items-center gap-3">
              <a href="https://montirmotor.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                MontirMotor.com
              </a>
              <span>·</span>
              <a href="https://servismotor.biz.id" className="hover:text-white transition-colors">
                servismotor.biz.id
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp button ──────────────────────────── */}
      <a
        href={waLinkWithMsg("Halo servismotor! Saya butuh bantuan servis motor.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp servismotor"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        style={{ boxShadow: "0 4px 24px rgba(37,211,102,0.4)" }}
      >
        <WhatsAppIcon />
        <span
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
        >
          1
        </span>
      </a>
    </div>
  );
}
