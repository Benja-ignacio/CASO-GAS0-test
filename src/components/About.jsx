export default function About() {
  return (
    <section
      id="nosotros"
      className="w-full max-w-7xl mx-auto px-8 py-16 scroll-mt-20"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Sobre nosotros
        </h2>

        <p className="text-slate-600 leading-relaxed mb-8">
          <strong className="text-slate-900 font-semibold block mb-2">
            Calor y confianza para Chillán desde 1998
          </strong>
          En Distribuidora de Gas El Volcán llevamos más de 25 años abasteciendo
          de energía a las familias y comercios de Chillán y sus alrededores.
          Somos una empresa familiar que evoluciona contigo: combinamos la
          cercanía de siempre con una plataforma moderna para que pidas tus
          cilindros sin complicaciones y sigas la ruta de tu repartidor en
          tiempo real.
        </p>

        <a
          href="/legacy/pages/about.html"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-fg-brand hover:bg-fg-brand-hover text-white font-medium transition-colors shadow-sm"
        >
          Conoce más sobre nosotros
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
