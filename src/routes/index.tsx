import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Award,
  Users,
  CheckCircle,
  Shield,
  Building,
  DoorOpen,
  LayoutGrid,
  ImageIcon,
  Wrench,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const WHATSAPP_LINK =
  "https://wa.me/554133292000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <DifferentialsSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "servicos" },
    { label: "Galeria", href: "galeria" },
    { label: "Depoimentos", href: "depoimentos" },
    { label: "Contato", href: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-petroleum">
            <span className="font-serif text-lg font-bold text-white">CG</span>
          </div>
          <span
            className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? "text-petroleum" : "text-white"
            }`}
          >
            Center Glass
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => smoothScrollTo(link.href)}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-graphite" : "text-white/90"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-gold text-graphite hover:bg-gold-dark font-semibold"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <X className={`h-6 w-6 ${scrolled ? "text-petroleum" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-petroleum" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setOpen(false);
                  smoothScrollTo(link.href);
                }}
                className="text-left text-base font-medium text-graphite hover:text-gold"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-gold text-graphite hover:bg-gold-dark font-semibold">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Box de banheiro em vidro temperado"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-petroleum/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Center Glass
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Vidraçaria no Rebouças: Soluções sob medida em Vidros Temperados em Curitiba
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            Referência em vidros e espelhos em Curitiba. Atendemos Rebouças
            e toda a região com qualidade reconhecida e preço justo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gold text-graphite hover:bg-gold-dark font-semibold text-base px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Peça seu orçamento
              </Button>
            </a>
            <button
              onClick={() => smoothScrollTo("servicos")}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOCIAL PROOF ---------- */
function SocialProofSection() {
  return (
    <section className="bg-white py-12 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-cream px-6 py-8 md:flex-row md:gap-10 md:py-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < 4 ? "fill-gold text-gold" : "fill-gold/60 text-gold/60"
                  }`}
                />
              ))}
              <span className="ml-2 text-lg font-bold text-graphite">4.7</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Avaliação média no Google
            </p>
          </div>

          <div className="hidden h-12 w-px bg-border md:block" />

          <div className="text-center md:text-left">
            <p className="text-3xl font-bold text-petroleum md:text-4xl">+50</p>
            <p className="text-sm font-medium text-muted-foreground">
              Avaliações positivas no Google
            </p>
          </div>

          <div className="hidden h-12 w-px bg-border md:block" />

          <div className="text-center md:text-left">
            <p className="text-3xl font-bold text-petroleum md:text-4xl">15+</p>
            <p className="text-sm font-medium text-muted-foreground">
              Anos de experiência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function ServicesSection() {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vidro Temperado",
      description:
        "Vidros de segurança com alta resistência térmica e mecânica. Ideal para portas, janelas e divisórias.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Box de Banheiro",
      description:
        "Boxes sob medida com acabamento impecável. Vidro de qualidade com ferragens duráveis e garantia.",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Espelhos",
      description:
        "Espelhos bisotados, decorativos e sob medida para ambientes residenciais e comerciais.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Fachadas",
      description:
        "Envidraçamento de fachadas comerciais e residenciais. Projetos modernos com execução precisa.",
    },
    {
      icon: <DoorOpen className="h-8 w-8" />,
      title: "Portas de Vidro",
      description:
        "Portas de correr, pivotantes e de abrir em vidro temperado. Design elegante para qualquer ambiente.",
    },
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Janelas e Esquadrias",
      description:
        "Esquadrias de alumínio e vidro sob medida. Instalação profissional com vedação perfeita.",
    },
  ];

  return (
    <section id="servicos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Nossos Serviços
          </p>
          <h2 className="mt-3 text-3xl font-bold text-petroleum md:text-4xl">
            Soluções completas em vidro e esquadria
          </h2>
          <p className="mt-4 text-muted-foreground">
        Orçamento sob consulta. Cada projeto é único e avaliado com atenção aos detalhes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center rounded-lg bg-petroleum/10 p-3 text-petroleum transition-colors group-hover:bg-petroleum group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function GallerySection() {
  const images = [
    { src: gallery1, alt: "Fachada comercial em vidro" },
    { src: gallery2, alt: "Box de banheiro em vidro temperado" },
    { src: gallery3, alt: "Espelho decorativo em sala de estar" },
    { src: gallery4, alt: "Porta de vidro para loja comercial" },
    { src: gallery5, alt: "Janela de alumínio e vidro" },
    { src: gallery6, alt: "Guarda-corpo de vidro em escada" },
  ];

  return (
    <section id="galeria" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Galeria de Projetos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-petroleum md:text-4xl">
            Trabalhos que nos orgulham
          </h2>
          <p className="mt-4 text-muted-foreground">
            Projetos residenciais e comerciais realizados com excelência técnica.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petroleum/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mariana Souza",
      service: "Box de banheiro",
      text: "O box ficou perfeito! A equipe foi super pontual e o acabamento impecável. Indico para todos do bairro.",
      rating: 5,
    },
    {
      name: "Carlos Henrique",
      service: "Fachada comercial",
      text: "Transformaram a fachada da minha loja. O atendimento foi ágil e o resultado superou minhas expectativas.",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      service: "Espelhos e portas",
      text: "Solicitei espelhos e portas de vidro para minha casa. Tudo entregue no prazo com excelente qualidade.",
      rating: 4,
    },
  ];

  return (
    <section id="depoimentos" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-petroleum md:text-4xl">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-white p-6"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-gold text-gold"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                "{t.text}"
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DIFFERENTIALS ---------- */
function DifferentialsSection() {
  const items = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Atendimento Ágil",
      description: "Orçamento rápido e instalação no prazo combinado.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Preço Justo",
      description: "Custo-benefício excelente sem comprometer a qualidade.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Qualidade Reconhecida",
      description: "Mais de 400 avaliações positivas no Google.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Profissionais Experientes",
      description: "Equipe técnica com anos de experiência no mercado.",
    },
  ];

  return (
    <section className="bg-petroleum py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Por que escolher a Center Glass
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Diferenciais que fazem a diferença
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-gold">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactSection() {
  return (
    <section id="contato" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Contato
          </p>
          <h2 className="mt-3 text-3xl font-bold text-petroleum md:text-4xl">
            Visite nossa loja
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estamos localizados no bairro Boqueirão, em Curitiba, prontos para
            atender você.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-petroleum/10 text-petroleum">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Endereço</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Boqueirão, Curitiba - PR
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-petroleum/10 text-petroleum">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  (41) 3329-2000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-petroleum/10 text-petroleum">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Segunda a Sexta: 09:00 - 17:00
                </p>
                <p className="text-sm text-muted-foreground">
                  Sábado: 09:00 - 12:00
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-gold text-graphite hover:bg-gold-dark font-semibold py-6 text-base">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

{/* Map */}
  <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
    <iframe
      title="Localização da Vidraçaria"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.526433651317!2d-49.26630290000001!3d-25.454091400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3cc7f38db43%3A0x462c710582a511d7!2sVIDRA%C3%87ARIA%20CENTER%20GLASS%20-%20Vidros%20Temperados%20e%20Espelhos!5e0!3m2!1spt-BR!2sbr!4v1783699325678!5m2!1spt-BR!2sbr" 
      width="100%" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
</div>
</div>
</section>
);
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-3xl font-bold text-petroleum md:text-4xl">
          Fale agora e receba seu orçamento sem compromisso
        </h2>
        <p className="mt-4 text-muted-foreground">
          Atendemos Curitiba e região com a qualidade que você merece. Solicite
          seu orçamento pelo WhatsApp e responderemos em poucos minutos.
        </p>
        <div className="mt-8">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gold text-graphite hover:bg-gold-dark font-semibold text-base px-10 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Pedir orçamento pelo WhatsApp
            </Button>
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Resposta rápida de segunda a sábado
        </p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-petroleum py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <span className="font-serif text-base font-bold text-white">VR</span>
            </div>
            <span className="font-serif text-base font-semibold text-white">
              Center Glass
            </span>
          </div>
          <p className="text-center text-sm text-white/60">
            Rebouças, Curitiba - PR · (41) 3329-2000
          </p>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- BACK TO TOP ---------- */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-graphite shadow-lg transition-all hover:bg-gold-dark ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
