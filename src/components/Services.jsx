const SERVICES = [
  {
    icon: "🛢️",
    title: "Gas a domicilio",
    description:
      "Solicita cilindros de 5, 11 y 15 kg y recíbelos directamente en tu domicilio.",
  },
  {
    icon: "🚚",
    title: "Despacho a domicilio",
    description: "Realizamos entregas rápidas en Chillán y comunas aledañas.",
  },
  {
    icon: "📍",
    title: "Seguimiento de pedidos",
    description:
      "Consulta el estado de tu pedido y conoce el avance de tu entrega en tiempo real.",
  },
  {
    icon: "💵",
    title: "Pago al recibir",
    description:
      "Realiza el pago de tu pedido de forma segura al momento de recibirlo.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="w-full max-w-7xl mx-auto px-8 py-16 scroll-mt-14"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Nuestros servicios
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Todo lo que necesitas para recibir tu gas de forma rápida, segura y
          confiable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col items-center text-center group"
          >
            <div
              aria-hidden="true"
              className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              {icon}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
            <p className="text-sm text-slate-500 mt-2">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
