import producOne from "../assets/product-1.jpg";

function Card() {
  return (
    <div className="w-96 h-96 bg-amber-50">
      <img src={producOne} alt="bolso" className="rounded-2xl" />
      <h4 className="text-amber-900 py-2.5">Accesorios</h4>
      <p className="py-2.5">Bolso de cuero</p>
      <p className="py-2.5">$189.00</p>
    </div>
  );
}

export default Card;
