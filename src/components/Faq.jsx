const FAQS = [
  {
    question: "¿En qué sectores realizan entregas?",
    answer: (
      <>
        Entregamos a domicilio en toda la comuna de{" "}
        <strong className="text-slate-800">Chillán y comunas aledañas</strong>{" "}
        dentro de la Región de Ñuble.
      </>
    ),
  },
  {
    question: "¿Cuánto tarda en llegar mi pedido?",
    answer: (
      <>
        Al realizar tu pedido desde nuestra web, podrás hacer un{" "}
        <strong className="text-slate-800">
          seguimiento en tiempo real sobre el mapa
        </strong>{" "}
        para ver el recorrido de tu repartidor y el estado exacto de tu entrega.
      </>
    ),
  },
  {
    question: "¿Cuáles son los medios de pago disponibles?",
    answer: (
      <>
        El pago se realiza directamente al momento de recibir el cilindro.
        Aceptamos <strong className="text-slate-800">pago en efectivo</strong> y
        transferencias.
      </>
    ),
  },
  {
    question: "¿Es necesario registrarse para pedir cilindros?",
    answer: (
      <>
        Puedes ingresar tus datos de despacho directamente al solicitar tu
        pedido para un proceso ágil, o crear una cuenta para guardar tus
        direcciones y revisar tu historial de compras.
      </>
    ),
  },
];

function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="w-full max-w-7xl mx-auto px-8 py-16 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Encuentra respuestas a las preguntas más comunes sobre nuestros
          productos y servicios.
        </p>
      </div>

      {/* Grid 2x2 en pantallas medianas y grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto items-start">
        {FAQS.map(({ question, answer }) => (
          <details
            key={question}
            className="group bg-white border border-slate-200/80 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden transition-all shadow-sm hover:shadow-md h-fit"
          >
            <summary className="flex items-center justify-between font-semibold text-lg text-slate-900 group-hover:text-fg-brand group-open:text-fg-brand gap-2 transition-colors cursor-pointer">
              <span>{question}</span>
              <span className="transition group-open:rotate-180 shrink-0 text-slate-400 group-hover:text-fg-brand group-open:text-fg-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-500 leading-relaxed text-sm">
              {answer}
            </p>
          </details>
        ))}
      </div>

      {/* Enlace hacia la vista completa de FAQ */}
      <p className="text-center text-slate-500 mt-10">
        ¿Tienes más dudas?{" "}
        <a
          href="/legacy/pages/faq.html"
          className="text-fg-brand hover:text-fg-brand-hover font-medium hover:underline inline-flex items-center gap-1 transition-colors"
        >
          Haz clic aquí para ver todas las preguntas frecuentes
          <ArrowRight className="w-4 h-4" />
        </a>
      </p>
    </section>
  );
}
