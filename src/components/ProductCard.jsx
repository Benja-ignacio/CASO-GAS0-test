const money = (n) => "$" + n.toLocaleString("es-CL");

export default function ProductCard({
  product,
  onAddToCart = () => {},
  imageBase = "/assets/images/",
}) {
  const { id, name, category, price, image, description } = product;

  return (
    <div
      id={`product-${id}`}
      data-search-name={name}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col justify-between group"
    >
      <div>
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
          {category}
        </span>
        <div className="h-44 flex items-center justify-center p-2 mb-4">
          <img
            src={`${imageBase}${image}`}
            alt={name}
            loading="lazy"
            className="max-h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="font-semibold text-slate-900 text-lg">{name}</h3>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900">{money(price)}</span>
        <button
          type="button"
          aria-label={`Agregar ${name} al carrito`}
          onClick={() => onAddToCart(product)}
          className="bg-fg-brand hover:opacity-90 text-white p-2.5 rounded-lg transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
