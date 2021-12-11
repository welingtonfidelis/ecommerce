export const maskValue = (value) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const maskDate = (date) => {
  return new Intl.DateTimeFormat("pt-BR").format(date);
};