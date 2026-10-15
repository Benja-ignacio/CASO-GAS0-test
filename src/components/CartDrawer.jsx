import { useEffect } from "react";
import { useCart } from "./CartContext";

const money = (n) => "$" + n.toLocaleString("es-CL");

export default function CartDrawer({ imageBase = "/assets/images/" }) {
  const { cart, cartTotal, cartOpen, closeCart, changeQty, removeFromCart } =
    useCart();

  // Cerrar con Escape
  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        aria-hidden={!cartOpen}
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl transition-transform duration-300 flex flex-col ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Tu carrito</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="text-slate-500 hover:text-slate-900 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-slate-400 text-sm text-center mt-10">
              Tu carrito está vacío
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={`${imageBase}${item.image}`}
                  alt=""
                  className="w-14 h-14 object-contain"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-500">{money(item.price)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => changeQty(item.id, -1)}
                      aria-label={`Quitar una unidad de ${item.name}`}
                      className="w-6 h-6 rounded border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                    >
                      −
                    </button>
                    <span className="text-sm w-5 text-center">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => changeQty(item.id, 1)}
                      aria-label={`Agregar una unidad de ${item.name}`}
                      className="w-6 h-6 rounded border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Eliminar ${item.name}`}
                  className="text-slate-400 hover:text-red-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-slate-900">Total</span>
            <span className="font-bold text-xl text-slate-900">
              {money(cartTotal)}
            </span>
          </div>
          <button
            type="button"
            disabled={cart.length === 0}
            className="w-full bg-fg-brand hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer"
          >
            Ir a pagar
          </button>
        </div>
      </aside>
    </>
  );
}
