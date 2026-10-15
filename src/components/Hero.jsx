export default function Hero({
  image = "/assets/images/chillan.jpg",
  eyebrow = "Chillán · Región de Ñuble · Desde 1998",
  title = "Tu gas, directo a tu puerta.",
  description = "Solicita tu cilindro de gas y recíbelo en tu domicilio en Chillán y comunas aledañas.",
  primaryCta = { label: "Pedir gas", href: "/pages/productos.html" },
  secondaryCta = { label: "Ver productos", href: "#productos" },
}) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Imagen de Chillán */}
      <img
        src={image}
        alt="Paisaje de Chillán"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido */}
      <div className="hero-content relative z-10 w-full max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4">
            {eyebrow}
          </p>

          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="hero-description text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              {primaryCta.label}
            </a>

            <a
              href={secondaryCta.href}
              className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
