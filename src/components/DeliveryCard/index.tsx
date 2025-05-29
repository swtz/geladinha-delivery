import { CurrencyValue } from "../CurrencyValue";

export function DeliveryCard() {
  return (
    <div className="p-4 bg-orange-300">
      <h2 className="text-2xl text-lime-950">Cliente: Lion Lurdes</h2>
      <span className="italic text-slate-900">Criado em 27/05/25 às 19:00</span>
      <p className="text-lg">
        Tipo de entrega: <b>em casa</b>
      </p>
      <div>
        <h3 className="text-2xl text-lime-950">Endereço de entrega:</h3>
        <ul className="list-disc pl-8">
          <li>Rua do comércio, 400</li>
          <li>Apto. 102</li>
          <li>Perto da escola</li>
          <li>Centro, Balneário Gaivota - SC</li>
        </ul>
      </div>
      <p>
        Método de pagamento: <b>Cartão</b>
      </p>
      <p>
        Subtotal: <CurrencyValue value={89.0} />
      </p>
      <p>
        Taxa de entrega: <CurrencyValue value={2.0} />
      </p>
      <p>
        Total: <CurrencyValue value={91.0} />
      </p>
    </div>
  );
}
