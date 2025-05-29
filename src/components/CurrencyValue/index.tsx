type CurrencyValueProps = {
  value: number;
};

export function CurrencyValue({ value }: CurrencyValueProps) {
  return (
    <span>
      {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    </span>
  );
}
