import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';

const ebooks = [
  { title: 'Guía de Derecho Laboral', desc: 'Tus derechos en el ámbito laboral, desde la contratación hasta el despido.', area: 'Laboral' },
  { title: 'Manual de Contratos', desc: 'Cómo redactar y revisar contratos sólidos para proteger tus intereses.', area: 'Contratos' },
  { title: 'Constitución de Sociedades', desc: 'Pasos legales para constituir tu sociedad, asociación o cooperativa.', area: 'Societario' },
  { title: 'Defensa Penal: Lo que debes saber', desc: 'Tus derechos y garantías frente a un proceso penal.', area: 'Penal' },
  { title: 'Accidentes de Tránsito', desc: 'Qué hacer y cómo reclamar ante un accidente vial.', area: 'Civil' },
  { title: 'Derecho Tributario para Emprendedores', desc: 'Obligaciones fiscales clave para tu negocio.', area: 'Tributario' },
  { title: 'Asistencia Legal para Startups', desc: 'Marco legal para emprendimientos en etapa temprana.', area: 'Comercial' },
  { title: 'Derecho Administrativo Práctico', desc: 'Cómo relacionarte legalmente con el Estado.', area: 'Administrativo' },
  { title: 'Mediación y Resolución de Conflictos', desc: 'Alternativas extrajudiciales para resolver disputas.', area: 'General' },
  { title: 'Glosario Jurídico Esencial', desc: 'Los términos legales más usados, explicados con claridad.', area: 'General' },
];

const Biblioteca = () => {
  const whatsappBase = 'https://api.whatsapp.com/send/?phone=5493764327285&type=phone_number&app_absent=0&text=';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container-legal">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>

          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-3 text-sm font-body font-medium text-muted-foreground tracking-widest uppercase mb-6">
              <span className="decorative-line bg-muted-foreground/60"></span>
              Biblioteca
            </span>
            <h1 className="font-display text-5xl lg:text-6xl leading-[1.1] mb-6">
              Ebooks de <em className="font-light">Derecho</em>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Recursos prácticos y descargables, redactados por nuestro estudio para ayudarte a comprender la ley y tomar mejores decisiones. Solicita el que necesites por WhatsApp y lo recibirás al instante.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook) => (
              <article key={ebook.title} className="group relative bg-secondary border border-border p-8 card-lift flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    <BookOpen className="w-7 h-7" strokeWidth={1.2} />
                  </div>
                  <span className="text-[10px] font-body font-medium tracking-widest uppercase text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                    {ebook.area}
                  </span>
                </div>
                <h2 className="font-display text-2xl leading-tight mb-3">{ebook.title}</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{ebook.desc}</p>
                <a
                  href={`${whatsappBase}${encodeURIComponent(`Hola! Quiero acceder al Ebook: ${ebook.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-foreground/85 transition-all duration-300"
                >
                  <Download className="w-4 h-4" /> Solicitar Ebook
                </a>
              </article>
            ))}
          </div>

          <div className="mt-20 p-10 lg:p-14 bg-legal-dark text-primary-foreground rounded-2xl text-center">
            <FileText className="w-10 h-10 mx-auto mb-5 opacity-80" strokeWidth={1.2} />
            <h3 className="font-display text-3xl lg:text-4xl mb-4">¿Necesitas asesoría personalizada?</h3>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Nuestros Ebooks son una guía, pero cada caso es único. Conversemos sobre el tuyo.
            </p>
            <a
              href={`${whatsappBase}${encodeURIComponent('Hola! Necesito reservar un turno para consulta!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-foreground text-foreground font-body text-sm font-medium hover:bg-primary-foreground/90 transition-all"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Biblioteca;
